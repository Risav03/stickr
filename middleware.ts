import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import sdk from '@farcaster/miniapp-sdk';

// This middleware runs on every request
export async function middleware(request: NextRequest) {
  
    const res = await sdk.quickAuth.fetch("/api/me");
    const user = await res.json();

    if(!user.user){
        return NextResponse.json({status: 401, statusText: 'Unauthorized'});
    }

  // Allow the request to proceed
  return NextResponse.next();
}

// Define the paths where the middleware should run
export const config = {
  matcher: ["/api/protected/:path*"],
};

