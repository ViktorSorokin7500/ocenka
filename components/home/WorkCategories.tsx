import React from "react";
import TitleDesc from "../shared/TitleDesc";
import JobCategoriesCard from "../cards/JobCategoriesCard";
import { VacancyCategory } from "@/types/index.d";

const information = [
	{
		icon: "/assets/icons/search-circle.svg",
		title: VacancyCategory.Accommodation,
		link: "/",
		desc: "(1 вакансія)",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		link: "/",
		desc: "(1 вакансія)",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		link: "/",
		desc: "(1 вакансія)",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		link: "/",
		desc: "(1 вакансія)",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		link: "/",
		desc: "(1 вакансія)",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		link: "/",
		desc: "(1 вакансія)",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		link: "/",
		desc: "(1 вакансія)",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		link: "/",
		desc: "(1 вакансія)",
	},
];

const WorkCategories = () => {
	return (
		<section className="py-8 md:p-8 bg-blue-50 dark:bg-slate-400 space-y-4">
			<TitleDesc
				title="Робочі категорії"
				desc="Почніть свій пошук, використовуючи будь-яку з наступних категорій роботи"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
				{information.map(({ icon, title, link, desc }, i) => (
					<JobCategoriesCard
						icon={icon}
						title={title}
						link={link}
						desc={desc}
						key={i}
					/>
				))}
			</div>
		</section>
	);
};

export default WorkCategories;
