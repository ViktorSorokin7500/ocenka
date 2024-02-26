import Link from "next/link";
import React from "react";
import { MenuLink } from "./MenuLink";

const isCandidate = true;

const NavMenu = () => {
	return (
		<nav className="hidden md:flex text-white gap-4 text-lg">
			<MenuLink href="/" text="Головна" />

			{isCandidate ? (
				<>
					<MenuLink href="/" text="Вакансії" />
					<MenuLink href="/" text="Роботодавці" />
				</>
			) : (
				<MenuLink href="/" text="Працівникі" />
			)}
			<MenuLink href="/" text="Мій профіль" />
			<MenuLink href="/" text="Premium" className="text-yellow-400" />
		</nav>
	);
};

export default NavMenu;
