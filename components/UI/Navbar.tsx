"use client";
import { CiSquarePlus } from "react-icons/ci";
import { TiPlus } from "react-icons/ti";
import ProfileImgHolder from "./ProfileImgHolder";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Card from "./Card";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [showSelector, setShowSelector] = useState(false);

  const toggleSelector = () => {
    setShowSelector((prev) => !prev);
  };

  const router = useRouter()

  return (
    <div className="fixed bottom-0 w-screen h-20 rounded-t-xl flex items-center justify-center border-t-[1px] border-white bg-gray-900 z-50">
      <button className="w-1/3">
        <FaStar className="mx-auto text-3xl text-white" />
      </button>
      <button
        className="w-1/3 text-white rounded-full aspect-square text-3xl font-bold"
        onClick={toggleSelector}
      >
        {!showSelector ? <CiSquarePlus className="mx-auto text-4xl" /> : <IoMdClose className="mx-auto text-4xl" />}
      </button>
      <button className="w-1/3 mx-auto h-full">
        <div className="w-full mx-auto">
          <ProfileImgHolder />
        </div>
      </button>


        <Card className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-900 rounded-lg shadow-lg p-4 duration-200 ${showSelector ? "opacity-100 scale-100" : "opacity-0 scale-y-0 pointer-events-none"} `}>
          <ul>
            <li className="cursor-pointer p-2 hover:bg-gray-200 text-center">
              <button onClick={() => router.push("/pack/create")}>Pack</button>
            </li>
            <li className="cursor-pointer p-2 hover:bg-gray-200 text-center">
              <button onClick={() => router.push("/community/create")}>Community</button>
            </li>
          </ul>
        </Card>
      
    </div>
  );
}
