import VacancyForm from "@/components/forms/VacancyForm";
import React from "react";

const page = () => {
	return (
		<section className="m-4 md:m-8 space-y-4 md:space-y-8">
			<h1 className="text-3xl md:text-4xl font-bold text-center">
				Додати/змінити вакансію
			</h1>

			<VacancyForm />
		</section>
	);
};

export default page;
