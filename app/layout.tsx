import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
	title: {
		template: "%s | UWH",
		default: "UWH",
	},
	description: "Ukrainian Workers Hub",
	icons: [
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon/favicon-16x16.png",
		},
		{
			rel: "apple-touch-icon",
			sizes: "180x180",
			url: "/favicon/apple-touch-icon.png",
		},
		{
			rel: "android-chrome-192x192",
			sizes: "180x180",
			url: "/favicon/android-chrome-192x192.png",
		},
		{
			rel: "android-chrome-512x512",
			sizes: "180x180",
			url: "/favicon/android-chrome-512x512.png",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			// suppressHydrationWarning
		>
			<head />
			<body className={cn`${inter.variable} ${spaceGrotesk.variable}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<div className="max-w-[1680px] mx-auto">{children}</div>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
