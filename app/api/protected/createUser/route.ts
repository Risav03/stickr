import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/utils/db";
import User from "@/utils/schemas/user";

export async function POST(req: NextRequest) {
  try {
    // Get frame ID from header
    const fid = req.headers.get("x-user-fid");

    // Check if frame ID exists
    if (!fid) {
      return NextResponse.json(
        { error: "Frame ID is required" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDB();

    // Check if user already exists
    let user = await User.findOne({ fid });

    // If user doesn't exist, create new user
    if (!user) {
      user = await User.create({ fid });
    }

    // Return user data
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error in createUser route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
