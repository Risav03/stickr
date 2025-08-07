'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type Data = {
  user: {
    username: string;
    pfp_url: string;
  };
};

const ProfileImgHolder: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const stored = sessionStorage?.getItem('userInfo');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData(parsed);
      } catch (e) {
        console.error('Failed to parse userInfo from sessionStorage', e);
      }
    }
  }, [sessionStorage]);

  if (!data?.user) {
    return null;
  }

  return (
    <div className="flex-col gap-2 items-center justify-center">
      <Image
        src={data.user.pfp_url}
        alt={`${data.user.username} profile`}
        className="rounded-full w-10 aspect-square"
      />
      <span>{data.user.username}</span>
    </div>
  );
};

export default ProfileImgHolder;
