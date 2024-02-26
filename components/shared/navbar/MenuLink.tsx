import { SheetClose } from "@/components/ui/sheet";
import Link from "next/link";
import React from "react";

interface MenuLinkProps {
	href: string;
	text: string;
	className?: string | undefined;
}

export const MenuLink = ({ href, text, className }: MenuLinkProps) => {
	return (
		<Link
			href={href}
			className={`text-base lg:text-lg hover:underline ${className}`}>
			<span>{text}</span>
		</Link>
	);
};

export const BurgerLink = ({ href, text, className }: MenuLinkProps) => {
	return (
		<SheetClose asChild>
			<Link
				href={href}
				className={`${className} w-full border py-4 rounded-sm`}>
				<span>{text}</span>
			</Link>
		</SheetClose>
	);
};
