import { useInfoId, useInfoRole, useInfoSession } from "@/constants/formulas";
import { MenuLink } from "./MenuLink";

const NavMenu = () => {
	const session = useInfoSession();
	const role = useInfoRole();
	const id = useInfoId();

	return (
		<nav className="hidden font-inter font-semibold md:flex gap-4 text-lg">
			<MenuLink href="/" text="Головна" />

			{role === "candidate" ? (
				<>
					<MenuLink href="/jobs" text="Вакансії" />
				</>
			) : (
				<MenuLink href="/candidates" text="Кандидати" />
			)}
			{session ? (
				role === "candidate" ? (
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
