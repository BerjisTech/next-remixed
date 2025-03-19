import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const cookieStore = cookies();
  // console.log(cookieStore.get('_clsk')?.value)

  // const cookieHeader = req.headers.get('cookie');
  // console.log(cookieHeader)
  // const cookiesObj = cookieHeader ? cookie.parse(cookieHeader) : {};

  // console.log(cookiesObj)
  // if (token) {
  //   const entityId = token.user.entity_id;
  //   const page = req.nextUrl.pathname;
  //   const browser = req.headers.get('user-agent') || 'unknown browser';

  //   // Fetch the user's IP address asynchronously
  //   const ipFetchPromise = fetch("https://api.ipify.org?format=json")
  //     .then(response => response.json())
  //     .then(data => {
  //       const userIp = data.ip || 'unknown IP';

  //       // Log the page visit
  //       return logPageVisit(entityId, page, browser, userIp);
  //     })
  //     .catch((err) => {
  //       console.log('Error fetching IP address:', err);
  //       return null; // Return null or handle it accordingly
  //     });

  //   // Use event.waitUntil to log the page visit
  //   event.waitUntil(
  //     ipFetchPromise
  //       .then((result) => {
  //         if (result) {
  //           console.log('Page visit logged successfully:', result);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log('Error logging to database:', err);
  //       })
  //   );
  // }

  // If there is no token, you may want to redirect to login
  const { pathname } = req.nextUrl;
  if ((!token || (token.user && !token.user.is_admin)) && pathname.includes("/admin")) {
    //return NextResponse.redirect(new URL('/next', req.url));
  }

  return NextResponse.next();
}

// Apply the middleware only to specific paths
export const config = {
  matcher: [
    "/((?!/_next|/next_assets/|next_assets|_next|api/).*)", // Exclude specific paths
  ],
};
