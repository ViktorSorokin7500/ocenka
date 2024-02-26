import { ModeToggle } from "@/components/ui/toggleMode";
import Image from "next/image";
import React from "react";

const Navbar = () => {
	return (
		<header className="sticky top-0 right-0 flex justify-between items-center px-8 py-4 bg-purple-700">
			<div className="flex items-center gap-4">
				<Image src="/Icon.png" width={40} height={40} alt="Viktorio Secret" />
				<span className="text-2xl font-semibold text-white">
					Viktorio Secret
				</span>
			</div>

			<div className="flex items-center gap-4">
				<nav className="hidden sm:flex">Menu</nav>
				<ModeToggle />
				<div className="flex sm:hidden">BurgerMenu</div>
			</div>
		</header>
	);
};

export default Navbar;
