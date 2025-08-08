import sdk from "@farcaster/miniapp-sdk";

export async function fetchWrapper(endpoint: string, options: RequestInit = {}) {
  // Make an authenticated request via Farcaster miniapp SDK
  const result = await sdk.quickAuth.fetch(endpoint, options);
  const jsonResult = await result.json();
  return jsonResult;
}