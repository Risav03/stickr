"use client";
import { CiSquarePlus } from "react-icons/ci";
import { TiPlus } from "react-icons/ti";
import ProfileImgHolder from "./ProfileImgHolder";
import { FaStar } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 w-screen h-20 rounded-t-xl flex items-center justify-center border-t-[1px] border-white bg-(--subheading)/10 backdrop-blur-md z-50">
      <button className="w-1/3">
        <FaStar className="mx-auto text-3xl text-white" />
      </button>
      <button className="w-1/3 text-white rounded-full aspect-square text-3xl font-bold">
        <CiSquarePlus className="mx-auto text-4xl" />
      </button>
      <button className="w-1/3 mx-auto h-full">
        <div className="w-full mx-auto">
          <ProfileImgHolder />
        </div>
      </button>
    </div>
  );
}
