import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Errors, createClient } from '@farcaster/quick-auth'


const client = createClient()
// This middleware runs on every request
export async function middleware(request: NextRequest) {
  // Example: Check if the user is authenticated
  console.log('Middleware running for request:', request.headers);
 const authorization = request.headers.get('Authorization');

  if (!authorization) {
    // Redirect to the login page if not authenticated
    return NextResponse.json({status: 401, statusText: 'Unauthorized'});
  }

  const payload = await client.verifyJwt({
      token: authorization.split(' ')[1] as string,
      domain: process.env.HOSTNAME as string,
    })

    const user = await resolveUser(payload.sub)

    if(!user){
        return NextResponse.json({status: 401, statusText: 'Unauthorized'});
    }

  // Allow the request to proceed
  return NextResponse.next();
}

// Define the paths where the middleware should run
export const config = {
  matcher: ["/api/protected/:path*"],
};

async function resolveUser(fid: number) {
  const primaryAddress = await (async () => {
    console.log("This is the fid: ", fid, process.env.NEYNAR_API_KEY)
    const res = await fetch(
      `https://api.neynar.com/v2/farcaster/user/bulk?fids=${fid}`, {
        headers:{
          "x-api-key": process.env.NEYNAR_API_KEY as string,
        }
      }
    )
    console.log("This is the raw response: ", res)
    if (res.ok) {
      const { result } = await res.json()
      console.log("This is the json response: ", result)
      return result.users?.[0]
    }
  })()
 
  return {
    fid,
    primaryAddress,
  }
}