import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export interface MyTokenPayload {
  is_superuser: boolean; // interface payload matched!
  email: string;
}

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token")?.value;

  // 1. Token chhaina bhane out!
  if (!token) {
    return NextResponse.redirect(new URL("/?error=unauthorized", request.url));
  }

  // 2. Direct decode handine bina try-catch
  const decode = jwtDecode<MyTokenPayload>(token);
  console.log("decode", decode);

  // 3. Simple checking: admin haina bhane out!
  if (!decode.is_superuser) {
    return NextResponse.redirect(new URL("/?error=unauthorized", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/trips/:path*"],
};
