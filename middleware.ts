export { default } from "next-auth/middleware";
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
