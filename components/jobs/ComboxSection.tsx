"use client";
import React, { useState } from "react";
import {
	VacancyCategory,
	VacancyLanguage,
	VacancyObec,
	VacancyType,
} from "@/types/index.d";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";

interface ComboxSectionProps {
	type: VacancyType;
	obec: VacancyObec;
	category: VacancyCategory;
	language: VacancyLanguage;
}

const initailValues: ComboxSectionProps = {
	type: VacancyType.Choose,
	obec: VacancyObec.Choose,
	category: VacancyCategory.Choose,
	language: VacancyLanguage.Choose,
};

const ComboxSection = () => {
	const [typeValue, setTypeValue] = useState(initailValues.type);
	const [obecValue, setObecValue] = useState(initailValues.obec);
	const [categoryValue, setCategoryValue] = useState(initailValues.category);
	const [languageValue, setLanguageValue] = useState(initailValues.language);

	const handleTypeChange = (selectedType: VacancyType) => {
		setTypeValue(selectedType);
	};
	const handleObecChange = (selectedType: VacancyObec) => {
		setObecValue(selectedType);
	};
	const handleCategoryChange = (selectedType: VacancyCategory) => {
		setCategoryValue(selectedType);
	};
	const handleLanguageChange = (selectedType: VacancyLanguage) => {
		setLanguageValue(selectedType);
	};

	console.log("typeValue =>", typeValue);
	console.log("obecValue =>", obecValue);
	console.log("categoryValue =>", categoryValue);
	console.log("languageValue =>", languageValue);

	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[960px] mx-auto">
			<div className="col-span-1">
				<Label>Зайнятість:</Label>
				<Select onValueChange={handleTypeChange} value={typeValue}>
					<SelectTrigger>
						<SelectValue placeholder="Оберіть свій рівень">
							{typeValue}
						</SelectValue>
					</SelectTrigger>
					<SelectContent>
						{Object.values(VacancyType).map((type) => (
							<SelectItem
								key={type}
								className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
								value={type}>
								{type}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="col-span-1">
				<Label>Край:</Label>
				<Select onValueChange={handleObecChange} value={obecValue}>
					<SelectTrigger>
						<SelectValue placeholder="Оберіть свій рівень">
							{obecValue}
						</SelectValue>
					</SelectTrigger>
					<SelectContent>
						{Object.values(VacancyObec).map((type) => (
							<SelectItem
								key={type}
								className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
								value={type}>
								{type}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="col-span-1">
				<Label>Категорія:</Label>
				<Select onValueChange={handleCategoryChange} value={categoryValue}>
					<SelectTrigger>
						<SelectValue placeholder="Оберіть свій рівень">
							{categoryValue}
						</SelectValue>
					</SelectTrigger>
					<SelectContent>
						{Object.values(VacancyCategory).map((type) => (
							<SelectItem
								key={type}
								className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
								value={type}>
								{type}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="col-span-1">
				<Label>Зайнятість:</Label>
				<Select onValueChange={handleLanguageChange} value={languageValue}>
					<SelectTrigger>
						<SelectValue placeholder="Оберіть свій рівень">
							{languageValue}
						</SelectValue>
					</SelectTrigger>
					<SelectContent>
						{Object.values(VacancyLanguage).map((type) => (
							<SelectItem
								key={type}
								className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
								value={type}>
								{type}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default ComboxSection;
