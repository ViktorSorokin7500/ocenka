import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("token");
	const activeSession = !!token;

	if (
		activeSession &&
		(request.url === "http://localhost:3000/sign-in" ||
			request.url === "http://localhost:3000/sign-up")
	) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	if (
		!activeSession &&
		(request.url.startsWith("http://localhost:3000/jobs/") ||
			request.url.startsWith("http://localhost:3000/candidates") ||
			request.url.startsWith("http://localhost:3000/dashboard"))
	) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	return NextResponse.next();
}
