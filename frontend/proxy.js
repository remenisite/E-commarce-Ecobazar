import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SEC);

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin")) {
    const token = request.cookies.get("X-RF-Token")?.value;

    if (!token) {
      const response = NextResponse.redirect(new URL("/signin", request.url));

      // Delete cookies
      response.cookies.set("X-RF-Token", "", { maxAge: 0 });
      response.cookies.set("X-AS-Token", "", { maxAge: 0 });

      return response;
    }

    try {
      const { payload } = await jwtVerify(token, SECRET);

      if (!["admin", "editor"].includes(payload.role)) {
        const response = NextResponse.redirect(new URL("/signin", request.url));
        response.cookies.set("X-RF-Token", "", { maxAge: 0 });
        response.cookies.set("X-AS-Token", "", { maxAge: 0 });
        return response;
      }

      return NextResponse.next();
    } catch (err) {
      const response = NextResponse.redirect(new URL("/signin", request.url));

      // Properly delete both tokens
      response.cookies.set("X-RF-Token", "", { maxAge: 0 });
      response.cookies.set("X-AS-Token", "", { maxAge: 0 });

      return response;
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};