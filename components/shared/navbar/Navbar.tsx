import { ModeToggle } from "@/components/ui/toggleMode";
import Image from "next/image";
import React from "react";
import NavMenu from "./NavMenu";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
	return (
		<header className="sticky top-0 right-0 flex justify-between items-center px-8 py-4 bg-stone-100 dark:bg-stone-800 bg-opacity-75 backdrop-filter backdrop-blur-sm">
			<div className="flex items-center gap-4">
				<Link
					href="/"
					className="text-transparent bg-gradient-to-r from-blue-600 via-purple-400 to-yellow-400 bg-clip-text text-4xl font-bold font-spaceGrotesk">
					<span className="hidden lg:flex">UkrainianWorkersHub</span>
					<span className="flex lg:hidden">UWH</span>
				</Link>
			</div>

			<div className="flex items-center gap-4">
				<NavMenu />
				<Image
					title="українська"
					src="/ukraine.png"
					alt="flag"
					width={42}
					height={30}
					className="cursor-pointer"
				/>
				<ModeToggle />
				<BurgerMenu />
			</div>
		</header>
	);
};

export default Navbar;
