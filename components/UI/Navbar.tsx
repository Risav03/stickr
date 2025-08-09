"use client";
import { CiSquarePlus } from "react-icons/ci";
import ProfileImgHolder from "./ProfileImgHolder";
import { BsStars } from "react-icons/bs";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { set } from "mongoose";

export default function Navbar() {
  const [showSelector, setShowSelector] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleSelector = () => {
    setShowSelector((prev) => !prev);
    setShowProfileMenu(false); // Close profile menu when selector is toggled
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
    setShowSelector(false); // Close selector when profile menu is toggled
  };

  const router = useRouter();

  return (
    <div>
      <div className="fixed bottom-0 w-screen h-20 rounded-t-xl flex items-center justify-center border-t-[1px] border-white/20 bg-gray-950 z-50">
        <button onClick={()=>{setShowProfileMenu(false); setShowSelector(false);}} className="w-1/3">
          <BsStars className="mx-auto text-3xl text-white" />
        </button>
        <button
          className={`w-1/3 text-white h-full text-3xl font-bold transition-colors duration-200 ${showSelector ? "bg-white/20" : ""}`}
          onClick={toggleSelector}
        >
          
            <CiSquarePlus className="mx-auto text-4xl" />
          
        </button>
        <button className="w-1/3 mx-auto h-full" onClick={toggleProfileMenu}>
          <div
            className={`mx-auto w-full py-2 rounded-tr-lg h-full transition-all duration-200 ${
              showProfileMenu ? "bg-white/20" : ""
            } `}
          >
            <ProfileImgHolder />
          </div>
        </button>
      </div>

      <motion.div
        initial={{ scale: 0, transformOrigin: "bottom" }}
        animate={
          showSelector
            ? { scale: 1, transformOrigin: "bottom" }
            : { scale: 0, transformOrigin: "bottom" }
        }
        transition={{ duration: 0.1 }}
        className={`fixed bottom-20 transform bg-gray-900 border-t-[1px] z-40 pb-10 w-full translate-y-4 border-white/20 rounded-t-lg shadow-lg p-4 duration-200 ${
          showSelector ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <ul>
          <li className="cursor-pointer p-2 hover:bg-gray-200 text-center">
            <button onClick={() => {router.push("/pack/create"); setShowSelector(false);}}>Pack</button>
          </li>
          <li className="cursor-pointer p-2 hover:bg-gray-200 text-center">
            <button onClick={() => { router.push("/community/create"); setShowSelector(false); }}>
              Community
            </button>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ scale: 0, transformOrigin: "bottom" }}
        animate={
          showProfileMenu
            ? { scale: 1, transformOrigin: "bottom" }
            : { scale: 0, transformOrigin: "bottom" }
        }
        transition={{ duration: 0.1 }}
        className={`fixed bottom-20 pb-10 w-full translate-y-4 bg-gray-900 z-40 border-t-[1px] border-white/20 rounded-t-lg shadow-lg p-4 duration-200 `}
      >
        <ul>
          <li className="cursor-pointer p-2 hover:bg-gray-200 text-center">
            <button onClick={() => router.push("/pack/my-packs")}>
              My Packs
            </button>
          </li>
          <li className="cursor-pointer p-2 hover:bg-gray-200 text-center">
            <button onClick={() => router.push("/community/my-communities")}>
              My Communities
            </button>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
