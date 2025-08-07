'use client'
import { useIsInMiniApp } from "@coinbase/onchainkit/minikit";
import sdk from "@farcaster/miniapp-sdk";
import { useQuery } from "@tanstack/react-query";

export default function useUserInfo() {
  const { isInMiniApp } = useIsInMiniApp();

  return useQuery({
    queryKey: ["useQuickAuth", isInMiniApp],
    queryFn: async () => {
      // If we're in a mini app context, all we have to do to make an authenticated
      // request is to use `sdk.quickAuth.fetch`. This will automatically include the
      // necessary `Authorization` header for the backend to verify.
      const result = await sdk.quickAuth.fetch("/api/me");

      const userInfo = await result.json();
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      return {
        displayName: userInfo.display_name,
        pfpUrl: userInfo.pfp_url,
        bio: userInfo.profile?.bio?.text,
        followerCount: userInfo.follower_count,
        followingCount: userInfo.following_count,
      };
    },
    enabled: isInMiniApp,
  });
}