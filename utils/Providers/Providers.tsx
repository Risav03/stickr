"use client";

import { base } from "viem/chains";
import { GlobalContextProvider } from "../context/GlobalContextProvider";
import Rainbow from "./rainbow";
import { MiniKitProvider } from "@coinbase/onchainkit/minikit";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MiniKitProvider
    apiKey={process.env.NEXT_PUBLIC_CDP_CLIENT_API_KEY}
      chain={base}
    >
      <GlobalContextProvider>
        <Rainbow>{children}</Rainbow>
      </GlobalContextProvider>
    </MiniKitProvider>
  );
}
