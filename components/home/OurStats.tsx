import React from "react";
import TitleDesc from "../shared/TitleDesc";
import StatsCard from "../cards/StatsCard";

const information = [
	{ img: "/assets/icons/search.svg", quantity: 100, title: "Кількість резюме" },
	{
		img: "/assets/icons/search.svg",
		quantity: 100,
		title: "Кількість компанії",
	},
	{
		img: "/assets/icons/search.svg",
		quantity: 100,
		title: "Вакансії опубліковані",
	},
];

const OurStats = () => {
	return (
		<section className="p-8 bg-blue-50 dark:bg-slate-400">
			<TitleDesc
				title="Наша статистика"
				desc="Тут перераховано статистичні дані нашого сайту і кількість людей, які шукають роботу, а також компаній, які шукають працівників."
			/>
			<div className="grid grid-cols-1 md:grid-cols-3 md:w-[768px] md:mx-auto gap-4 md:gap-0 place-items-center">
				{information.map(({ img, quantity, title }) => (
					<StatsCard img={img} quantity={quantity} title={title} key={title} />
				))}
			</div>
		</section>
	);
};

export default OurStats;
