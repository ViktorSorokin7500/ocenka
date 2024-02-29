import React from "react";
import TitleDesc from "../shared/TitleDesc";
import JobListCard from "../cards/JobListCard";

const information = [
	{
		id: 1,
		title: "Big Data Software Engineer Specialist",
		type: "full time",
		city: "Praha",
		salery: 125,
	},
	{
		id: 2,
		title: "Big Data Software Engineer Specialist",
		type: "full time",
		city: "Praha",
		salery: 125,
	},
	{
		id: 3,
		title: "Big Data Software Engineer Specialist",
		type: "full time",
		city: "Praha",
		salery: 125,
	},
	{
		id: 5,
		title: "Big Data Software Engineer Specialist",
		type: "full time",
		city: "Praha",
		salery: 125,
	},
	{
		id: 5,
		title: "Big Data Software Engineer Specialist",
		type: "full time",
		city: "Praha",
		salery: 125,
	},
];

const JobList = () => {
	return (
		<section className="bg-stone-50 dark:bg-stone-600 py-8">
			<TitleDesc
				title="Список нових вакансій"
				desc="Ось список вакансій які було додано щойно"
			/>
			<div className="flex flex-col gap-4 justify-center items-center">
				{information.map(({ id, title, type, city, salery }) => (
					<JobListCard
						key={title}
						id={id}
						title={title}
						type={type}
						city={city}
						salery={salery}
					/>
				))}
			</div>
		</section>
	);
};

export default JobList;
