import Link from "next/link";
import React from "react";
import { MenuLink } from "./MenuLink";

const isCandidate = false;
const session = false;
const id = 1;

const NavMenu = () => {
	return (
		<nav className="hidden font-inter font-semibold md:flex gap-4 text-lg">
			<MenuLink href="/" text="Головна" />

			{isCandidate ? (
				<>
					<MenuLink href="/jobs" text="Вакансії" />
				</>
			) : (
				<MenuLink href="/candidates" text="Кандидати" />
			)}
			{session ? (
				isCandidate ? (
					<MenuLink
						href={`/dashboard/candidate-profile/${id}`}
						text="Профіль"
					/>
				) : (
					<MenuLink href={`/dashboard/employer-profile/${id}`} text="Профіль" />
				)
			) : (
				<MenuLink href="/sign-in" text="Увійти" />
			)}
			<MenuLink
				href="/premium"
				text="Premium"
				className="text-blue-600 dark:text-yellow-400"
			/>
		</nav>
	);
};

export default NavMenu;
