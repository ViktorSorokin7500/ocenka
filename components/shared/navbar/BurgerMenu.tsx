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

const NavContent = () => {
	const isCandidate = true;
	return (
		<section className="flex flex-col gap-8 pt-16 text-center text-xl font-semibold">
			<BurgerLink href="/" text="Головна" />

			{isCandidate ? (
				<>
					<BurgerLink href="/" text="Вакансії" />
					<BurgerLink href="/" text="Роботодавці" />
				</>
			) : (
				<BurgerLink href="/" text="Працівникі" />
			)}
			<BurgerLink href="/" text="Мій профіль" />
			<BurgerLink href="/" text="Premium" className="text-yellow-500" />
		</section>
	);
};

const BurgerMenu = () => {
	return (
		<div className="flex md:hidden">
			<Sheet>
				<SheetTrigger>
					<svg
						width="36"
						height="36"
						viewBox="0 0 15 15"
						fill="white"
						stroke="white"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"></path>
					</svg>
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

					<div className="flex flex-col gap-3">
						<SheetClose asChild>
							<Link href="/">
								<Button
									className="w-full border border-black hover:bg-white"
									variant="secondary">
									<span>Увійти</span>
								</Button>
							</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link href="/">
								<Button className="w-full">
									<span>Реєстрація</span>
								</Button>
							</Link>
						</SheetClose>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default BurgerMenu;
