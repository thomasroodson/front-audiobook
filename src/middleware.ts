import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("AUTH_TOKEN")?.value;

  const signInURL = new URL("/login", request.url);
  const dashboardURL = new URL("/livros", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInURL);
  }

  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(dashboardURL);
  }
}

export const config = {
  matcher: ["/login", "/livros/:path*"]
};
