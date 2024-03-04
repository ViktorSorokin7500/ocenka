import React from "react";
import TitleDesc from "../shared/TitleDesc";
import JobListCard from "../cards/JobListCard";
import { jobListInfo } from "@/constants/servicesInfo";

const JobList = () => {
	const firstFiveJobs = jobListInfo.slice(0, 5);
	return (
		<section className="bg-stone-50 dark:bg-stone-600 py-8">
			<TitleDesc
				title="Список нових вакансій"
				desc="Ось список вакансій які було додано щойно"
			/>
			<div className="flex flex-col gap-4 justify-center items-center">
				{firstFiveJobs.map(({ id, title, type, city, salery }) => (
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
