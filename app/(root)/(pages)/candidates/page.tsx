import CandidatesList from "@/components/candidates/CandidatesList";
import Pagination from "@/components/shared/Pagination";
import TitleDesc from "@/components/shared/TitleDesc";
import { candidatesListInfo } from "@/constants/servicesInfo";
import React, { Suspense } from "react";

function SearchBarFallback() {
	return <>placeholder</>;
}

const page = () => {
	const firstTenCandidates = candidatesListInfo.slice(0, 12);
	return (
		<section className="py-8 px-4">
			<Suspense fallback={<SearchBarFallback />}>
				<TitleDesc
					title="Кандидати"
					desc="Комплексний реєстр потенційних кандидатів"
				/>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto gap-4">
					{firstTenCandidates.map(({ id, desc, name, surname, img }) => (
						<CandidatesList
							id={id}
							desc={desc}
							name={name}
							surname={surname}
							img={img}
							key={id}
						/>
					))}
				</div>

				<Pagination pageNumber={3} isNext={false} />
			</Suspense>
		</section>
	);
};

export default page;
