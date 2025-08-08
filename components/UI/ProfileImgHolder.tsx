"use client";
import { useGlobalContext } from "@/utils/context/GlobalContextProvider";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProfileImgHolder: React.FC = () => {
  const {user, setUser } = useGlobalContext();
  if (!user) {
    return (
      <div className="flex flex-col w-full items-center h-full gap-1 justify-center mx-auto">
        <div
          className="rounded-full w-8 aspect-square bg-white/10 animate-pulse" // Placeholder style
        ></div>
        <div className="w-10 h-2 rounded-full bg-white/10 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full items-center h-full gap-1 justify-center mx-auto">
      <Image
        src={user.pfp_url}
        alt={`${user.username} profile`}
        className="rounded-full w-8 aspect-square"
      />
      <h3 className="text-xs text-center">{user.username}</h3>
    </div>
  );
};

export default ProfileImgHolder;
