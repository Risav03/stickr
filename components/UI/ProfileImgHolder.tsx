"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProfileImgHolder: React.FC = () => {
  const [userInfo, setUserInfo] = useState<{ user: { username: string; pfp_url: string } } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("userInfo");
      if (stored) {
        try {
          setUserInfo(JSON.parse(stored));
        } catch (e) {
          console.error("Failed to parse userInfo from sessionStorage", e);
        }
      }
    }
  }, []);

  if (!userInfo?.user) {
    return null;
  }

  return (
    <div className="flex-col gap-2 items-center justify-center">
      <Image
        src={userInfo.user.pfp_url}
        alt={`${userInfo.user.username} profile`}
        className="rounded-full w-10 aspect-square"
      />
      <span>{userInfo.user.username}</span>
    </div>
  );
};

export default ProfileImgHolder;
