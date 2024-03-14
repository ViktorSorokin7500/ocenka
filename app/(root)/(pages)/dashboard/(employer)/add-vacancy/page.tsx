"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { jobListInfo } from "@/constants/servicesInfo";
import { createVacancy } from "@/lib/actions/vacancy.action";
import {
	Vacancy,
	VacancyCategory,
	VacancyLanguage,
	VacancyObec,
	VacancyType,
} from "@/types/index.d";
import { SelectItem } from "@radix-ui/react-select";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

const initialVacancy: Vacancy = {
	title: "",
	desc: "",
	type: VacancyType.Choose,
	category: VacancyCategory.Choose,
	obec: VacancyObec.Choose,
	city: "",
	address: "",
	salary: "",
	languageSkill: VacancyLanguage.Choose,
	img: "",
	duties: [],
	bonuses: [],
};

const vacancy = jobListInfo[90] as Vacancy;
const type = "edit";

const ExperienceForm = () => {
	const sessionId = 1;
	const router = useRouter();

	const [vacancyInfo, setVacancyInfo] = useState<Vacancy>(
		vacancy || initialVacancy
	);
	const [experience, setExperience] = useState(
		vacancy?.duties !== undefined ? vacancy.duties : initialVacancy.duties
	);
	const [bonus, setBonus] = useState(
		vacancy?.bonuses || initialVacancy.bonuses
	);

	const handleVacancyInfo = (field: keyof Vacancy, value: string) => {
		setVacancyInfo({ ...vacancyInfo, [field]: value });
	};

	const handleAddExperience = () => {
		setExperience([...experience, ""]);
	};

	const handleAddBonus = () => {
		setBonus([...bonus, ""]);
	};

	const handleChangeExperience = (index: number, value: string) => {
		const updatedExperience = [...experience];
		updatedExperience[index] = value;
		setExperience(updatedExperience);
		const updatedVacancyInfo = { ...vacancy };
		if (!updatedVacancyInfo.duties[index]) {
			updatedVacancyInfo.duties[index] = "";
		}
		updatedVacancyInfo.duties[index] = value;
		setVacancyInfo(updatedVacancyInfo);
	};

	const handleChangeBonus = (index: number, value: string) => {
		const updatedBonus = [...bonus];
		updatedBonus[index] = value;
		setBonus(updatedBonus);
		const updatedBonusInfo = { ...vacancy };
		if (!updatedBonusInfo.bonuses[index]) {
			updatedBonusInfo.bonuses[index] = "";
		}
		updatedBonusInfo.bonuses[index] = value;
		setVacancyInfo(updatedBonusInfo);
	};

	const handleRemoveExperience = (index: number) => {
		const updatedExperience = [...experience];
		updatedExperience.splice(index, 1);
		setExperience(updatedExperience);
		const updatedVacancyInfo = { ...vacancyInfo };
		updatedVacancyInfo.duties.splice(index, 1);
		setVacancyInfo(updatedVacancyInfo);
	};

	const handleRemoveBonus = (index: number) => {
		const updatedBonus = [...bonus];
		updatedBonus.splice(index, 1);
		setBonus(updatedBonus);
		const updatedBonusInfo = { ...vacancyInfo };
		updatedBonusInfo.bonuses.splice(index, 1);
		setVacancyInfo(updatedBonusInfo);
	};

	async function onSubmit() {
		console.log(vacancyInfo.bonuses);
		try {
			await createVacancy({});
		} catch (error) {
			console.log(error);
		}
		// router.push(`/dashboard/employer-profile/${vacancy.id}`);
	}

	return (
		<section className="mx-2 md:mx-16 py-6 md:py-8 space-y-6 md:space-y-8">
			<h1 className="text-3xl md:text-4xl font-bold text-center">
				Додати/змінити вакансію
			</h1>
			<div className="py-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
				<div className="grid grid-cols-1 md:grid-cols-9 gap-2 px-4 pb-2">
					<div className="col-span-1 md:col-span-2">
						<Label htmlFor="title">Назва вакансії:</Label>
						<Input
							id="title"
							placeholder="Ridic"
							value={vacancyInfo.title}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleVacancyInfo("title", e.target.value)
							}
						/>
					</div>

					<div className="col-span-1 md:col-span-7">
						<Label htmlFor="desc">Опис вакансії:</Label>
						<Input
							id="desc"
							placeholder="Ridic"
							value={vacancyInfo.desc}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleVacancyInfo("desc", e.target.value)
							}
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-7 gap-2 px-4 pb-2">
					<div className="col-span-1 ">
						<Label htmlFor="salary">Платня</Label>
						<Input
							id="salary"
							placeholder="Ridic"
							value={vacancyInfo.salary}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleVacancyInfo("salary", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1 md:col-span-2">
						<Label>Зайнятість:</Label>
						<Select
							onValueChange={(value) => handleVacancyInfo("type", value)}
							value={vacancyInfo.type}>
							<SelectTrigger>
								<SelectValue placeholder="Оберіть свій рівень">
									{vacancyInfo.type}
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
					<div className="col-span-1 md:col-span-2 ">
						<Label>Категорія:</Label>
						<Select
							onValueChange={(value) => handleVacancyInfo("category", value)}
							value={vacancyInfo.category}>
							<SelectTrigger>
								<SelectValue placeholder="Оберіть категорію">
									{vacancyInfo.category}
								</SelectValue>
							</SelectTrigger>
							<SelectContent>
								{Object.values(VacancyCategory).map((category) => (
									<SelectItem
										key={category}
										className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
										value={category}>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="col-span-1 md:col-span-2">
						<Label>Мовні навички:</Label>
						<Select
							onValueChange={(value) =>
								handleVacancyInfo("languageSkill", value)
							}
							value={vacancyInfo.languageSkill}>
							<SelectTrigger>
								<SelectValue placeholder="Оберіть категорію">
									{vacancyInfo.languageSkill}
								</SelectValue>
							</SelectTrigger>
							<SelectContent>
								{Object.values(VacancyLanguage).map((languageSkill) => (
									<SelectItem
										key={languageSkill}
										className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
										value={languageSkill}>
										{languageSkill}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
				{/* duties & bonuses */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-2 px-4 pb-2">
					<div className="col-span-1">
						<Label>Край:</Label>
						<Select
							onValueChange={(value) => handleVacancyInfo("obec", value)}
							value={vacancyInfo.obec}>
							<SelectTrigger>
								<SelectValue placeholder="Оберіть категорію">
									{vacancyInfo.obec}
								</SelectValue>
							</SelectTrigger>
							<SelectContent>
								{Object.values(VacancyObec).map((obec) => (
									<SelectItem
										key={obec}
										className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
										value={obec}>
										{obec}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="col-span-1">
						<Label htmlFor="title">Місто:</Label>
						<Input
							id="city"
							placeholder="Praha"
							value={vacancyInfo.city}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleVacancyInfo("city", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1 md:col-span-2">
						<Label htmlFor="title">Адреса:</Label>
						<Input
							id="address"
							placeholder="Praha"
							value={vacancyInfo.address}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleVacancyInfo("address", e.target.value)
							}
						/>
					</div>
				</div>
			</div>
			<div className="shadow-lg px-4 py-2 rounded bg-stone-50 dark:bg-stone-400">
				<h3 className="text-center text-2xl font-semibold">Вимоги</h3>
				{experience.map((exp, index) => (
					<div key={index}>
						<h4 className="text-stone-700 font-semibold">
							Вміння №{index + 1}
						</h4>
						<div
							key={index}
							className="grid grid-cols-2 md:grid-cols-7 gap-y-2 md:gap-y-0 md:gap-x-4">
							<div className="md:col-span-6 col-span-1">
								<div className="flex flex-col">
									<Input
										placeholder="Позиція (на чешській мові)"
										value={exp}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											handleChangeExperience(index, e.target.value)
										}
									/>
								</div>
							</div>
							<div className="md:flex md:items-end md:col-span-1 col-span-7 mb-1.5">
								<Button
									className="w-full py-1"
									variant="destructive"
									onClick={() => handleRemoveExperience(index)}>
									Видалити
								</Button>
							</div>
						</div>
					</div>
				))}
				<div className="flex justify-center item-center my-2">
					<Button
						className="bg-blue-600 hover:bg-blue-500 rounded-full size-9 text-lg font-bold text-white"
						onClick={handleAddExperience}>
						+
					</Button>
				</div>
			</div>
			<div className="shadow-lg px-4 py-2 rounded bg-stone-50 dark:bg-stone-400">
				<h3 className="text-center text-2xl font-semibold">Бонуси</h3>
				{bonus.map((bon, index) => (
					<div key={index}>
						<h4 className="text-stone-700 font-semibold">Бонус №{index + 1}</h4>
						<div
							key={index}
							className="grid grid-cols-2 md:grid-cols-7 gap-y-2 md:gap-y-0 md:gap-x-4">
							<div className="md:col-span-6 col-span-1">
								<div className="flex flex-col">
									<Input
										placeholder="Бонус (на чешській мові)"
										value={bon}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											handleChangeBonus(index, e.target.value)
										}
									/>
								</div>
							</div>
							<div className="md:flex md:items-end md:col-span-1 col-span-7 mb-1.5">
								<Button
									className="w-full py-1"
									variant="destructive"
									onClick={() => handleRemoveBonus(index)}>
									Видалити
								</Button>
							</div>
						</div>
					</div>
				))}
				<div className="flex justify-center item-center my-2">
					<Button
						className="bg-blue-600 hover:bg-blue-500 rounded-full size-9 text-lg font-bold text-white"
						onClick={handleAddBonus}>
						+
					</Button>
				</div>
			</div>

			<div className="my-4 flex items-center justify-center gap-4">
				<Button asChild variant="outline">
					<Link href={`/dashboard/employer-profile/${sessionId}`}>
						Повернутись
					</Link>
				</Button>
				<Button
					onClick={onSubmit}
					className="dark:bg-stone-400 dark:hover:bg-stone-300">
					Зберігти
				</Button>
			</div>
		</section>
	);
};

export default ExperienceForm;
