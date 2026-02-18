import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { log } from "console";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
console.log("Middleware loaded with JWT_SECRET:", process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  // allow api routes
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // protect admin
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (err) {
      console.log("JWT verify failed:", err);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // block login if already logged in
  if (pathname === "/login" && token) {
    try {
      await jwtVerify(token, secret);
      return NextResponse.redirect(new URL("/admin", req.url));
    } catch {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
