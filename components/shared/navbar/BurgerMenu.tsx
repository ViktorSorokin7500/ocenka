import React from "react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BurgerLink } from "./MenuLink";
import { useInfoId, useInfoRole, useInfoSession } from "@/constants/formulas";
import EscapeButton from "./EscapeButton";

const NavContent = () => {
	const role = useInfoRole();
	const id = useInfoId();
	return (
		<section className="flex flex-col gap-8 pt-16 text-center text-xl font-semibold">
			<BurgerLink href="/" text="Головна" />

			{role === "candidate" ? (
				<>
					<BurgerLink href="/jobs" text="Вакансії" />
				</>
			) : (
				<BurgerLink href="/candidates" text="Працівникі" />
			)}
			{role === "candidate" ? (
				<BurgerLink
					href={`/dashboard/candidate-profile/${id}`}
					text="Мій профіль"
				/>
			) : (
				<BurgerLink href={`/dashboard/employer-profile/${id}`} text="Профіль" />
			)}
			<BurgerLink href="/premium" text="Premium" className="text-yellow-500" />
		</section>
	);
};

const BurgerMenu = () => {
	const session = useInfoSession();

	return (
		<div className="flex md:hidden">
			<Sheet>
				<SheetTrigger>
					<Image
						src="/assets/icons/hamburger.svg"
						alt="hamburger"
						height={36}
						width={36}
						className="dark:invert"
					/>
				</SheetTrigger>
				<SheetContent
					side="left"
					className="bg-gray-100 dark:bg-stone-800 flex flex-col justify-between">
					<Link href="/" className="text-2xl font-bold">
						<span className="text-blue-600">U</span>
						<span className="text-purple-400">W</span>
						<span className="text-yellow-400">H</span>
					</Link>
					<SheetClose asChild>
						<NavContent />
					</SheetClose>

					{session ? (
						<SheetClose asChild>
							<Link href="/">
								<EscapeButton />
							</Link>
						</SheetClose>
					) : (
						<div className="flex flex-col gap-3">
							<SheetClose asChild>
								<Link href="/sign-in">
									<Button
										className="w-full border border-black hover:bg-white"
										variant="secondary">
										<span>Увійти</span>
									</Button>
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href="/sign-up">
									<Button className="w-full">
										<span>Реєстрація</span>
									</Button>
								</Link>
							</SheetClose>
						</div>
					)}
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default BurgerMenu;
