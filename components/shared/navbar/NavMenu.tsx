import Link from "next/link";
import React from "react";
import { MenuLink } from "./MenuLink";

const isCandidate = true;
const session = false;

const NavMenu = () => {
	return (
		<nav className="hidden font-inter font-semibold md:flex gap-4 text-lg">
			<MenuLink href="/" text="Головна" />

			{isCandidate ? (
				<>
					<MenuLink href="/jobs" text="Вакансії" />
				</>
			) : (
				<MenuLink href="/" text="Працівникі" />
			)}
			{session ? (
				<MenuLink href="/" text="Профіль" />
			) : (
				<MenuLink href="/" text="Увійти" />
			)}
			<MenuLink
				href="/"
				text="Premium"
				className="text-blue-600 dark:text-yellow-400"
			/>
		</nav>
	);
};

export default NavMenu;
