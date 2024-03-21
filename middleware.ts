import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

// Хоршенько поиграть тут с кодом продумая все возможности!

export async function middleware(request: NextRequest) {
	const token = request.cookies.get("token");
	if (!!token === true) {
		const decoded = jwtDecode(token?.value as string);
		// console.log(decoded);
		if ("role" in decoded) {
			const role = decoded.role;
			// console.log("role =>", role);

			// if (
			// 	role === "candidates" &&
			// 	request.url === "http://localhost:3000/candidates"
			// ) {
			// 	return NextResponse.redirect(new URL("/", request.url));
			// }

			// if (
			// 	role === "employer" &&
			// 	request.url === "http://localhost:3000/candidates"
			// ) {
			// 	return NextResponse.redirect(new URL("/", request.url));
			// }
		}
	}

	const isLoggenIn = !!token;
	if (isLoggenIn) {
		return NextResponse.next();
	}
	return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
	matcher: [
		"/jobs",
		"/jobs/:path*",
		"/candidates",
		"/candidates/:path*",
		"/premium",
		"/dashboard/:path*",
	],
};
