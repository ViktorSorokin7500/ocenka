"use client";

import { EmployerForm } from "@/components/forms/EmployerForm";

const ExperienceForm = () => {
	return (
		<div className="mx-2 md:mx-16 my-8 space-y-4">
			<h1 className="text-center text-4xl font-bold">Доповнити профіль</h1>
			<div className="py-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
				<h3 className="text-center text-2xl font-semibold">
					Загальна інформація
				</h3>
				<EmployerForm />
			</div>
		</div>
	);
};

export default ExperienceForm;
