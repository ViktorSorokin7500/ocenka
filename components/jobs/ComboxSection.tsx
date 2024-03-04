import React from "react";
import { JobsCombobox } from "../shared/ComboboxSeacrh";
import { jobTypes } from "@/constants/servicesInfo";

const ComboxSection = () => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-4 mb-6">
			<div className="flex flex-col">
				<label className="text-sm font-semibold">Тип роботи</label>
				<JobsCombobox labelsValues={jobTypes} />
			</div>
			<div className="flex flex-col">
				<label className="text-sm font-semibold">Край</label>
				<JobsCombobox labelsValues={jobTypes} />
			</div>
			<div className="flex flex-col">
				<label className="text-sm font-semibold">Категорія</label>
				<JobsCombobox labelsValues={jobTypes} />
			</div>
			<div className="flex flex-col">
				<label className="text-sm font-semibold">Володыння мовою</label>
				<JobsCombobox labelsValues={jobTypes} />
			</div>
		</div>
	);
};

export default ComboxSection;
