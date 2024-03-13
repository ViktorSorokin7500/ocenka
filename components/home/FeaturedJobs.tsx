import React from "react";
import TitleDesc from "../shared/TitleDesc";
import JobCard from "../cards/JobCard";
import { jobListInfo } from "@/constants/servicesInfo";

const noImg = false;

const FeaturedJobs = () => {
	return (
		<section className="bg-stone-50 dark:bg-stone-600 py-8 space-y-4">
			<TitleDesc
				title="Рекомендовані вакансії"
				desc="Рекомендовані вакансії, доступні на ukrainianworkershub.cz."
			/>
			<div className="px-6 lg:px-24 xl:px-48 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{jobListInfo.map(
					({ id, title, desc, type, city, atDate, salary, img }) => (
						<JobCard
							key={id}
							id={id}
							title={title}
							desc={desc}
							type={type}
							city={city}
							atDate={atDate}
							salary={salary}
							img={img}
						/>
					)
				)}
			</div>
		</section>
	);
};

export default FeaturedJobs;
