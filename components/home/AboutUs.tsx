import Image from "next/image";
import React from "react";

const information = [
	{
		icon: "/assets/icons/search.svg",
		title: "Знайти роботу",
		text: "Знайдіть ідеальну роботу просто!",
	},
	{
		icon: "/assets/icons/suitcase.svg",
		title: "Легкий пошук",
		text: "Швидкий та зручний пошук!",
	},
	{
		icon: "/assets/icons/folder-search.svg",
		title: "Знайти працівника",
		text: "Ефективний пошук працівників!",
	},
];

const AboutUs = () => {
	return (
		<section className="hidden bg-blue-50 dark:bg-slate-400 space-y-8 text-center md:py-4 md:flex md:space-y-0 md:justify-center md:gap-8 lg:gap-24">
			{information.map(({ icon, title, text }) => (
				<div key={title} className="flex flex-col items-center justify-center">
					<Image src={icon} alt={title} width={36} height={36} />
					<div>
						<h3 className="text-lg font-bold">{title}</h3>
						<span className="text-sm text-stone-700 dark:text-stone-200">
							{text}
						</span>
					</div>
				</div>
			))}
		</section>
	);
};

export default AboutUs;
