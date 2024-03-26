"use client";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen relative">
			<Navbar />
			<main className="flex-grow bg-stone-100 dark:bg-stone-700">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default layout;
