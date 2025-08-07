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
      {JSON.stringify(user) !== '{}' && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Image
            src={user.pfp_url}
            alt={`${user.username} profile`}
            className="rounded-full w-20 aspect-square"
            width={80}
            height={80}
          />
          <span className="text-lg mt-2">{user.username}</span>
        </div>
      )}
      <h2>{JSON.stringify(user)}</h2>
    </div>
  );
}
