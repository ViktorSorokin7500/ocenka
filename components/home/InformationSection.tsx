import React from "react";
import InfoCard from "../cards/InfoCard";

const information = [
	{
		icon: "/assets/icons/account.svg",
		title: "Створюй",
		text: "Створіть особистий обліковий запис для користування сервісом.",
		link: "/",
	},
	{
		icon: "/assets/icons/notebook.svg",
		title: "Заповняй",
		text: "Заповніть ваші дані для отримання найбільш повної інформації.",
		link: "/",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		text: "Шукайте і знаходьте, що вам потрібно.",
		link: "/",
	},
];

const InformationSection = () => {
	return (
		<section className="bg-stone-50 dark:bg-stone-600 pb-8">
			<div className="px-4 py-8 text-center">
				<h2 className="font-inter text-5xl font-semibold">Як це працює?</h2>
				<span className="text-sm text-slate-600 dark:text-stone-50">
					Портал UkrainianWorkersHub допоможе вам знайти потрібні ресурси для
					досягнення ваших кар'єрних цілей або знайти кваліфікованих кандидатів.
				</span>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
				{information.map(({ icon, title, text, link }) => (
					<InfoCard icon={icon} title={title} text={text} link={link} />
				))}
			</div>
		</section>
	);
};

export default InformationSection;
