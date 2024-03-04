import JobListCard from "@/components/cards/JobListCard";
import ComboxSection from "@/components/jobs/ComboxSection";
import Pagination from "@/components/shared/Pagination";
import TitleDesc from "@/components/shared/TitleDesc";
import { jobListInfo } from "@/constants/servicesInfo";
import React from "react";

const page = () => {
	const firstTenJobs = jobListInfo.slice(0, 10);
	return (
		<section className="py-8 px-4">
			<TitleDesc
				title="Свіжі вакансії"
				desc="Наша мета - зробити процес пошуку максимально зручним для вас. Обирайте з найсвіжіших пропозицій і здійснюйте свій кар'єрний ріст разом з нами!"
			/>
			<ComboxSection />
			<div className="max-w-[1320px] mx-auto grid place-items-center grid-cols-1 xl:grid-cols-2 gap-4 ">
				{firstTenJobs.map(({ id, title, type, city, salery }) => (
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
			<Pagination pageNumber={2} isNext={false} />
		</section>
	);
};

export default page;
