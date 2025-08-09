import { NextRequest, NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import Community from '@/utils/schemas/community';
import userSchema from '@/utils/schemas/user';
import user from '@/utils/schemas/user';

const s3Client = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    const userFid = req.headers.get('x-user-fid');
    if (!userFid) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await req.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const displayImage = formData.get('displayImage') as File;
    const bannerImage = formData.get('bannerImage') as File;

    if (!title || !description || !displayImage || !bannerImage) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const userFound = await user.findOne({ fid: userFid });

    if (!userFound) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Upload display image to S3
    const displayImageKey = `community/${title}/display`;
    const displayImageBuffer = Buffer.from(await displayImage.arrayBuffer());
    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: displayImageKey,
        Body: displayImageBuffer,
        ContentType: displayImage.type,
      })
    );

    // Upload banner image to S3
    const bannerImageKey = `community/${title}/banner`;
    const bannerImageBuffer = Buffer.from(await bannerImage.arrayBuffer());
    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: bannerImageKey,
        Body: bannerImageBuffer,
        ContentType: bannerImage.type,
      })
    );

    // Create community in database
    const community = await Community.create({
      name: title,
      description,
      displayImage: `${process.env.AWS_S3_URL}/${displayImageKey}`,
      bannerImage: `${process.env.AWS_S3_URL}/${bannerImageKey}`,
      admin: userFound._id,
    });

    return NextResponse.json(community);
  } catch (error: any) {
    console.error('Error creating community:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
