'use client'
import React, { useState } from 'react';
import { TextInput, TextArea, ImageUploader } from '../../UI/Inputs';
import Button from '@/components/UI/Button';

const CreateCommunity: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [displayImage, setDisplayImage] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);

  const handleImageDrop = (files: File[]) => {
    if (files[0]) {
      setDisplayImage(files[0]);
    }
  };

  const handleBannerImageDrop = (files: File[]) => {
    if (files[0]) {
      setBannerImage(files[0]);
    }
  };

  return (
    <div className="p-3 pb-32">
      <h1 className="text-2xl font-bold text-white mb-4">Create Community</h1>

      <div className="mb-4">
        <TextInput fieldName='Title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter community title" />
      </div>

      <div className="mb-4">
        <TextArea fieldName='Description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter community description" />
      </div>

      <div className="mb-4">
        <ImageUploader id="display-image-upload" fieldName='Display Image' onDrop={handleImageDrop} className="mb-4 w-full aspect-square my-auto" />
      </div>

      <div className="mb-4">
        <ImageUploader id="banner-image-upload" fieldName='Banner Image' onDrop={handleBannerImageDrop}  className="mb-4 w-full aspect-[5/2] my-auto" />
      </div>

      <Button onClick={() => {}} className='w-full' >Create</Button>
    </div>
  );
};

export default CreateCommunity;