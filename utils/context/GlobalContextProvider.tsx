import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import { createAppClient, generateNonce, viemConnector } from "@farcaster/auth-client";

// Define the shape of the context data
interface GlobalContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
}

// Create the context
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// Create the provider component
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    sdk.actions.ready();
    (async () => {
      await handleSignIn();
    })();
  }, []);

    const getNonce = useCallback(async (): Promise<string> => {
      console.log("getNonce called");
      try {
        const nonce = await generateNonce();
        if (!nonce) throw new Error("Unable to generate nonce");
        console.log("Nonce generated:", nonce);
        return nonce;
      } catch (error) {
        console.error("Error in getNonce:", error);
        throw error;
      }
    }, []);
  
    const handleSignIn = useCallback(async (): Promise<void> => {
      console.log("handleSignIn called");
      try {

        const nonce = await getNonce();

        const result = await sdk.actions.signIn({ nonce });
  
        const appClient = createAppClient({
          ethereum: viemConnector(),
        });
  
        const verifyRequestParams = {
          message: result.message,
          signature: result.signature as `0x${string}`,
          domain: new URL(window.location.origin).hostname,
          nonce: nonce,
          acceptAuthAddress: true
        };
        console.log("Verify request params:", verifyRequestParams);
  
        const verifyResult = await appClient.verifySignInMessage(verifyRequestParams);
        console.log("Verify result:", verifyResult);
  
      } catch (error) {
        console.error("Sign in error:", error);
      }
    }, [getNonce]);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the GlobalContext
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};