'use client'
import Landing from "@/components/pages/landing/Landing";
import TestApiResponses from "@/components/pages/TestApiResponses";
import Background from "@/components/UI/Background";
import { useGlobalContext } from "@/utils/context/GlobalContextProvider";
import Image from "next/image";

export default function Home() {
  const {user} = useGlobalContext()
  return (
    <div className="min-h-[100dvh] flex-col items-center justify-center relative py-6 text-white px-4">
      <Landing/>
      
    </div>
  );
}
