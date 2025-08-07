import { useIsInMiniApp } from "@coinbase/onchainkit/minikit";
import sdk from "@farcaster/miniapp-sdk";
import { useQuery } from "@tanstack/react-query";

export async function fetchWrapper(endpoint:string, options: RequestInit = {}) {
    const {isInMiniApp} = useIsInMiniApp();

    return useQuery({
    queryKey: ["useQuickAuth", isInMiniApp],
    queryFn: async () => {
      // If we're in a mini app context, all we have to do to make an authenticated
      // request is to use `sdk.quickAuth.fetch`. This will automatically include the
      // necessary `Authorization` header for the backend to verify.
      const result = await sdk.quickAuth.fetch(endpoint, options);

      const jsonResult = await result.json();
      return jsonResult
    },
    enabled: isInMiniApp,
  });
}