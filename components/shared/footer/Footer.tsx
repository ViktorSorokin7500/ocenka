"use client";
import Link from "next/link";
import React from "react";
import { useClipboard } from "use-clipboard-copy";
import ScrollToTopButton from "../ScrollToTop";

const footerInfo = [
	{
		title: "Локації",
		desc1: { text: "Praha", link: "/" },
		desc2: { text: "Brno", link: "/" },
		desc3: { text: "Olomouc", link: "/" },
	},
	{
		title: "Як це працює",
		desc1: { text: "Створюй", link: "/" },
		desc2: { text: "Заповняй", link: "/" },
		desc3: { text: "Шукай", link: "/" },
	},
	{
		title: "Корисні посилання",
		desc1: { text: "Політика конфіденційності", link: "/" },
		desc2: { text: "Створити акаунт", link: "/" },
		desc3: {
			text: "Донат на русоріз",
			link: "/",
		},
	},
];

const Footer = () => {
	const clipboard = useClipboard();
	return (
		<footer className="md:h-40 bg-blue-400 flex flex-col gap-4 py-4 px-8 text-white relative">
			<div className="flex flex-col md:flex-row justify-center gap-8">
				<div className="flex flex-col">
					<div className="text-2xl font-bold">
						<span className="text-blue-600">U</span>
						<span className="text-purple-400">W</span>
						<span className="text-yellow-400">H</span>
					</div>
					<span>Ukrainian WorkersHub Theme</span>
					<span
						className="cursor-pointer"
						ref={clipboard.target}
						onClick={clipboard.copy}>
						viktoriosecret@gmail.com
					</span>
					<span>+380991241055</span>
				</div>
				<div className="flex flex-col sm:flex-row gap-4 justify-between">
					{footerInfo.map(({ title, desc1, desc2, desc3 }) => (
						<div key={title} className="flex flex-col sm:text-center">
							<h3 className="text-xl font-semibold">{title}</h3>
							<Link href={desc1.link} className="hover:underline">
								{desc1.text}
							</Link>
							<Link href={desc2.link} className="hover:underline">
								{desc2.text}
							</Link>
							<Link href={desc3.link} className="hover:underline">
								{desc3.text}
							</Link>
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center sm:justify-center gap-2">
				<span>&#169; Всі права захищені</span>
				<span className="font-semibold">{new Date().getFullYear()}</span>
			</div>
			<ScrollToTopButton />
		</footer>
	);
};

export default Footer;
