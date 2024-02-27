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
