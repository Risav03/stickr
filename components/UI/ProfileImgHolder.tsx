"use client";
import { useGlobalContext } from "@/utils/context/GlobalContextProvider";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProfileImgHolder: React.FC = () => {
  const {user, setUser } = useGlobalContext();
  if (!user) {
    return (
      <div className="flex-col gap-2 items-center justify-center">
        <div
          className="rounded-full w-10 aspect-square bg-white/10 animate-pulse" // Placeholder style
        />
        <span className="w-10 h-2 rounded-full bg-white/10 animate-pulse"></span>
      </div>
    );
  }

  return (
    <div className="flex-col gap-2 items-center justify-center">
      <Image
        src={user.pfp_url}
        alt={`${user.username} profile`}
        className="rounded-full w-10 aspect-square"
      />
      <span>{user.username}</span>
    </div>
  );
};

export default ProfileImgHolder;
