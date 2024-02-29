import React from "react";
import TitleDesc from "../shared/TitleDesc";
import JobCard from "../cards/JobCard";

const noImg = false;

const information = [
	{
		id: "1",
		title: "Big Data Software Engineer Specialist",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		type: "full time",
		city: "Praha",
		atDate: new Date(),
		salery: 125,
		img: "/home_main.jpg",
	},
	{
		id: "2",
		title: "Big Data Software Engineer Specialist",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		type: "full time",
		city: "Praha",
		atDate: new Date(),
		salery: 125,
		img: "/home_main.jpg",
	},
	{
		id: "3",
		title: "Big Data Software Engineer Specialist",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		type: "full time",
		city: "Praha",
		atDate: new Date(),
		salery: 125,
		img: "/home_main.jpg",
	},
];

const FeaturedJobs = () => {
	return (
		<section className="bg-stone-50 dark:bg-stone-600 py-8">
			<TitleDesc
				title="Рекомендовані вакансії"
				desc="Рекомендовані вакансії, доступні на ukrainianworkershub.cz."
			/>
			<div className="px-6 lg:px-24 xl:px-48 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{information.map(
					({ id, title, desc, type, city, atDate, salery, img }) => (
						<JobCard
							key={id}
							id={id}
							title={title}
							desc={desc}
							type={type}
							city={city}
							atDate={atDate}
							salery={salery}
							img={img}
						/>
					)
				)}
			</div>
		</section>
	);
};

export default FeaturedJobs;
