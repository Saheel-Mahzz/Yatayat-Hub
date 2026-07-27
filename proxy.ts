// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";

// export interface MyTokenPayload {
//   is_superuser: boolean; // interface payload matched!
//   email: string;
// }

// export default function middleware(request: NextRequest) {
//   const token = request.cookies.get("access_token")?.value;

//   // 1. Token chhaina bhane out!
//   if (!token) {
//     return NextResponse.redirect(new URL("/?error=unauthorized", request.url));
//   }

//   // 2. Direct decode handine bina try-catch
//   const decode = jwtDecode<MyTokenPayload>(token);

//   // 3. Simple checking: admin haina bhane out!
//   if (!decode.is_superuser) {
//     return NextResponse.redirect(new URL("/?error=unauthorized", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*"],
// };

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";

// export interface MyTokenPayload {
//   is_superuser: boolean;
//   email: string;
//   exp: number; // Expiration timestamp in seconds
// }

// export async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("access_token")?.value;
//   const refreshToken = request.cookies.get("refresh_token")?.value;

//   // 1. Access Token nai chhaina bhane redirect!
//   if (!accessToken) {
//     return NextResponse.redirect(new URL("/?error=unauthorized", request.url));
//   }

//   try {
//     const decoded = jwtDecode<MyTokenPayload>(accessToken);
//     const currentTime = Math.floor(Date.now() / 1000);
//     const isExpired = decoded.exp < currentTime;

//     // 2. Token Active chha ani Admin ho bhane Request Pass garne
//     if (!isExpired) {
//       if (!decoded.is_superuser) {
//         return NextResponse.redirect(
//           new URL("/?error=unauthorized", request.url),
//         );
//       }
//       return NextResponse.next();
//     }

//     // 3. TOKEN EXPIRED BHAKO CASE: Refresh Token use garne
//     if (!refreshToken) {
//       const response = NextResponse.redirect(
//         new URL("/?error=session_expired", request.url),
//       );
//       response.cookies.delete("access_token");
//       return response;
//     }

//     // 4. Backend Refresh Endpoint Call garne
//     const refreshRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/token/refresh/`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ refresh: refreshToken }),
//       },
//     );
//     const errorData = await refreshRes.json();
//     console.log("Refresh Failed Response:", errorData);

//     if (!refreshRes.ok) {
//       // Refresh token pani fail / expired vaye login ma pathaune
//       const response = NextResponse.redirect(
//         new URL("/?error=session_expired", request.url),
//       );
//       response.cookies.delete("access_token");
//       response.cookies.delete("refresh_token");
//       return response;
//     }

//     const data = await refreshRes.json();
//     const newAccessToken = data.access; // Backend ko field name anusar adjust gara (e.g. data.access_token)

//     // Decode new token to re-check permissions
//     const newDecoded = jwtDecode<MyTokenPayload>(newAccessToken);
//     if (!newDecoded.is_superuser) {
//       return NextResponse.redirect(
//         new URL("/?error=unauthorized", request.url),
//       );
//     }

//     // 5. Success! New token cookie ma update garera Request ra Response Dubai ma Forward garne
//     const response = NextResponse.next();

//     // Cookie update garne browser ko laagi
//     response.cookies.set("access_token", newAccessToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       path: "/",
//     });

//     // Immediate incoming request ma pani token override garne (Server Component le pauna ko lagi)
//     request.cookies.set("access_token", newAccessToken);

//     return response;
//   } catch (error) {
//     // Malformed token aayo bhane clean redirect
//     const response = NextResponse.redirect(
//       new URL("/?error=invalid_token", request.url),
//     );
//     response.cookies.delete("access_token");
//     return response;
//   }
// }

// export const config = {
//   matcher: ["/admin/:path*"],
// };

// export default middleware;

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";

// export interface MyTokenPayload {
//   is_superuser: boolean;
//   email: string;
//   exp: number; // Expiration timestamp in seconds
// }

// export async function middleware(request: NextRequest) {
//   const accessToken = request.cookies.get("access_token")?.value;
//   const refreshToken = request.cookies.get("refresh_token")?.value;

//   console.log("👉 MIDDLEWARE HIT FOR:", request.nextUrl.pathname);

//   // 1. Access Token nai chhaina bhane redirect!
//   if (!accessToken) {
//     return NextResponse.redirect(new URL("/?error=unauthorized", request.url));
//   }

//   try {
//     const decoded = jwtDecode<MyTokenPayload>(accessToken);
//     const currentTime = Math.floor(Date.now() / 1000);
//     const isExpired = decoded.exp < currentTime;

//     // 2. Token Active chha ani Admin ho bhane Direct Request Pass garne
//     if (!isExpired) {
//       if (!decoded.is_superuser) {
//         return NextResponse.redirect(
//           new URL("/?error=unauthorized", request.url),
//         );
//       }
//       return NextResponse.next();
//     }

//     console.log("⚠️ Access token EXPIRED! Refreshing token...");

//     // 3. Refresh Token nai chhaina bhane session kill
//     if (!refreshToken) {
//       console.log("❌ No refresh_token cookie found!");
//       const response = NextResponse.redirect(
//         new URL("/?error=session_expired", request.url),
//       );
//       response.cookies.delete("access_token");
//       return response;
//     }

//     // 4. Backend Refresh Endpoint Call garne
//     const refreshRes = await fetch(
//       `${process.env.NEXT_PUBLIC_API_URL}/token/refresh/`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ refresh: refreshToken }),
//       },
//     );

//     const data = await refreshRes.json();

//     if (!refreshRes.ok) {
//       console.log("❌ Refresh API Failed Response:", data);
//       const response = NextResponse.redirect(
//         new URL("/?error=session_expired", request.url),
//       );
//       response.cookies.delete("access_token");
//       response.cookies.delete("refresh_token");
//       return response;
//     }

//     // Adjust field name as per your backend (e.g. data.access_token or data.access)
//     const newAccessToken = data.access || data.access_token;

//     console.log("✅ Token successfully refreshed!");

//     // Decode new token to re-check permissions
//     const newDecoded = jwtDecode<MyTokenPayload>(newAccessToken);
//     if (!newDecoded.is_superuser) {
//       return NextResponse.redirect(
//         new URL("/?error=unauthorized", request.url),
//       );
//     }

//     // 5. Incoming Request Headers ma NAYA Authorization Token Forward garne
//     const requestHeaders = new Headers(request.headers);
//     requestHeaders.set("Authorization", `Bearer ${newAccessToken}`);

//     const response = NextResponse.next({
//       request: {
//         headers: requestHeaders,
//       },
//     });

//     // Browser Ko Cookie ma NAYA Access Token Set Garne
//     response.cookies.set("access_token", newAccessToken, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       path: "/",
//     });

//     // Immediate Server Side Call (cookies) update garne
//     response.cookies.set("access_token", newAccessToken);

//     return response;
//   } catch (error) {
//     console.log("❌ Middleware Catch Error:", error);
//     const response = NextResponse.redirect(
//       new URL("/?error=invalid_token", request.url),
//     );
//     response.cookies.delete("access_token");
//     return response;
//   }
// }

// export const config = {
//   matcher: ["/admin/:path*"],
// };

// export default middleware;
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export interface MyTokenPayload {
  is_superuser: boolean;
  email: string;
  exp: number; // Expiration timestamp in seconds
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // "/admin" bhitra matra superuser check garne, baki protected routes
  // (jastai /profile, /dashboard) ma just "logged in vaye pugcha"
  const isAdminRoute = pathname.startsWith("/admin");

  const accessToken = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  // 1. Access Token nai chhaina bhane redirect!
  if (!accessToken) {
    return NextResponse.redirect(new URL("/?error=unauthorized", request.url));
  }

  try {
    const decoded = jwtDecode<MyTokenPayload>(accessToken);
    const currentTime = Math.floor(Date.now() / 1000);
    const isExpired = decoded.exp < currentTime;

    // 2. Token Active chha bhane pass garne (admin route ma matra superuser check)
    if (!isExpired) {
      if (isAdminRoute && !decoded.is_superuser) {
        return NextResponse.redirect(
          new URL("/?error=unauthorized", request.url),
        );
      }
      return NextResponse.next();
    }

    // 3. Refresh Token nai chhaina bhane session kill
    if (!refreshToken) {
      const response = NextResponse.redirect(
        new URL("/?error=session_expired", request.url),
      );
      response.cookies.delete("access_token");
      return response;
    }

    // 4. Backend Refresh Endpoint Call garne
    const refreshRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/token/refresh/`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
      },
    );

    const data = await refreshRes.json();

    if (!refreshRes.ok) {
      const response = NextResponse.redirect(
        new URL("/?error=session_expired", request.url),
      );
      response.cookies.delete("access_token");
      response.cookies.delete("refresh_token");
      return response;
    }

    // Adjust field name as per your backend (e.g. data.access_token or data.access)
    const newAccessToken = data.access || data.access_token;

    // Decode new token to re-check permissions (admin route ma matra superuser check)
    const newDecoded = jwtDecode<MyTokenPayload>(newAccessToken);
    if (isAdminRoute && !newDecoded.is_superuser) {
      return NextResponse.redirect(
        new URL("/?error=unauthorized", request.url),
      );
    }

    // 5a. IMPORTANT: current request ko cookie pani update garne
    // yesle garda yehi request cycle ma chalne Server Components / route handlers le
    // naya token nai paunchan, purano expired token hoina
    request.cookies.set("access_token", newAccessToken);

    // 5b. Response banaune — updated request cookies sanga forward garne
    const response = NextResponse.next({
      request,
    });

    // 5c. Browser ko lagi naya cookie set garne (ek choti matra, options sahit)
    response.cookies.set("access_token", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return response;
  } catch (error) {
    // Malformed / invalid token aayo bhane clean redirect
    const response = NextResponse.redirect(
      new URL("/?error=invalid_token", request.url),
    );
    response.cookies.delete("access_token");
    return response;
  }
}

export const config = {
  // /admin bahek, /profile, /dashboard jastai protected routes pani thap
  // (ya sabai route cover garna: matcher: ["/((?!api|_next/static|_next/image|favicon.ico|$).*)"])
  matcher: ["/admin/:path*", "/profile/:path*", "/dashboard/:path*"],
};

export default middleware;
