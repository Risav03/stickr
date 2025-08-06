import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

// Define the shape of the context data
interface GlobalContextProps {
  user: string | null;
  setUser: (user: string | null) => void;
  signIn: () => Promise<void>;
}

// Create the context
const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

// Create the provider component
export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    sdk.actions.ready();
    (async () => {
      const res = await sdk.quickAuth.fetch(`/api/getUser`);
      if (res.ok) {
        setUser(await res.json());
        
      }
    })();
  }, []);

  const signIn = async () => {
    try {
      const nonce = Math.random().toString(36).substring(2, 10); // Generate a random nonce
      const result = await sdk.actions.signIn({ nonce, acceptAuthAddress: true });

      // Log the result for debugging purposes
      console.log('Sign-in result:', result);

      // Send the result to your server for verification
      const response = await fetch('/api/verifySignIn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result),
      });

      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error('Failed to verify sign-in');
      }
    } catch (error: any) {
      if (error.name === 'RejectedByUser') {
        console.warn('User rejected the sign-in request');
      } else {
        console.error('Sign-in error:', error);
      }
    }
  };

  return (
    <GlobalContext.Provider value={{ user, setUser, signIn }}>
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