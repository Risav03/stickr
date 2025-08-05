"use client";

import { GlobalContextProvider } from "../context/GlobalContextProvider";
import Rainbow from "./rainbow";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GlobalContextProvider>
      <Rainbow>{children}</Rainbow>
    </GlobalContextProvider>
  );
}
