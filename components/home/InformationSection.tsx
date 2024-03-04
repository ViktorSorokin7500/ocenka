import React from "react";
import InfoCard from "../cards/InfoCard";
import TitleDesc from "../shared/TitleDesc";

const information = [
	{
		icon: "/assets/icons/account.svg",
		title: "Створюй",
		text: "Створіть особистий обліковий запис для користування сервісом.",
		link: "/service/create-an-account",
	},
	{
		icon: "/assets/icons/notebook.svg",
		title: "Заповняй",
		text: "Заповніть ваші дані для отримання найбільш повної інформації.",
		link: "/service/complete-your-profile",
	},
	{
		icon: "/assets/icons/search-circle.svg",
		title: "Шукай",
		text: "Шукайте і знаходьте, що вам потрібно.",
		link: "/service/search",
	},
];

const InformationSection = () => {
	return (
		<section className="bg-stone-50 dark:bg-stone-600 py-8">
			<TitleDesc
				title="Як це працює?"
				desc="Портал UkrainianWorkersHub допоможе вам знайти потрібні ресурси для
					досягнення ваших кар'єрних цілей або знайти кваліфікованих кандидатів."
			/>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
				{information.map(({ icon, title, text, link }) => (
					<InfoCard
						icon={icon}
						title={title}
						text={text}
						link={link}
						key={title}
					/>
				))}
			</div>
		</section>
	);
};

export default InformationSection;
