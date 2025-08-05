'use client'
import Landing from "@/components/pages/landing/Landing";
import Background from "@/components/UI/Background";
import { SignInAction } from "@/lib/signIn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex-col items-center justify-center relative py-6 text-white px-4">
      <Landing/>
      <SignInAction/>
    </div>
  );
}
