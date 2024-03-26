import CandidateInfo from "@/components/candidates/CandidateInfo";
import TitleDesc from "@/components/shared/TitleDesc";
import React from "react";

const page = async () => {
	return (
		<section className="py-2 md:py-16 space-y-2">
			<TitleDesc
				title="Профіль"
				desc="Тут ви можете або доповнити свій профіль або видалити його"
			/>
			<CandidateInfo />
		</section>
	);
};

export default page;
