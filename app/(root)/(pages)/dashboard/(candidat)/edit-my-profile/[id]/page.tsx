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
import { candidatesListInfo } from "@/constants/servicesInfo";
import { VacancyLanguage } from "@/types/index.d";
import { SelectItem } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

interface User {
	name: string;
	surname: string;
	description: string;
	city: string;
	phonenumber: string;
	skills: {
		vacancy: string | null;
		startDate: string | null;
		endDate: string | null;
	}[];
	mainJob: string;
	languageSkill: VacancyLanguage | string;
	salary: string;
	age: string;
}

const initialUser: User = {
	name: "",
	surname: "",
	description: "",
	city: "",
	phonenumber: "",
	skills: [{ vacancy: null, startDate: null, endDate: null }],
	mainJob: "",
	languageSkill: VacancyLanguage.Choose,
	salary: "",
	age: "",
};

const user = candidatesListInfo[0];

const ExperienceForm = () => {
	const router = useRouter();

	const [userInfo, setUserInfo] = useState<User>(user || initialUser);

	const [experience, setExperience] = useState(
		user?.skills || initialUser.skills
	);

	const handleAddExperience = () => {
		setExperience([...experience, { vacancy: "", startDate: "", endDate: "" }]);
	};

	const handleChangeUserInfo = (field: keyof User, value: string) => {
		setUserInfo({ ...userInfo, [field]: value });
	};

	const handleChangeExperience = (
		index: number,
		field: keyof (typeof experience)[0],
		value: string
	) => {
		const updatedExperience = [...experience];
		updatedExperience[index][field] = value;
		setExperience(updatedExperience);
		const updatedUserInfo = { ...userInfo };
		if (!updatedUserInfo.skills[index]) {
			updatedUserInfo.skills[index] = {
				vacancy: "",
				startDate: "",
				endDate: "",
			};
		}
		updatedUserInfo.skills[index][field] = value;
		setUserInfo(updatedUserInfo);
	};

	const handleRemoveExperience = (index: number) => {
		const updatedExperience = [...experience];
		updatedExperience.splice(index, 1);
		setExperience(updatedExperience);
		const updatedUserInfo = { ...userInfo };
		updatedUserInfo.skills.splice(index, 1);
		setUserInfo(updatedUserInfo);
	};

	const handleSubmit = () => {
		console.log(userInfo);
		router.push(`/dashboard/candidate-profile/${user.id}`);
	};

	return (
		<section className="mx-2 md:mx-16 my-8 space-y-4">
			<h1 className="text-center text-4xl font-bold">Доповнити профіль</h1>
			<div className="py-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
				<h3 className="text-center text-2xl font-semibold">
					Загальна інформація
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-7 gap-2 px-4 pb-2">
					<div className="col-span-1 md:col-span-3">
						<Label htmlFor="name">Введіть ім&apos;я</Label>
						<Input
							id="name"
							placeholder="Pavel"
							value={userInfo.name}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("name", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1 md:col-span-3">
						<Label htmlFor="surname">Введіть Прізвище</Label>
						<Input
							id="surname"
							placeholder="Hubenko"
							value={userInfo.surname}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("surname", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1 md:col-span-1">
						<Label htmlFor="age">Вік</Label>
						<Input
							id="age"
							placeholder="51"
							value={userInfo.age}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("age", e.target.value)
							}
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-7 gap-2 px-4 pb-2 ">
					<div className="col-span-1 md:col-span-2">
						<Label htmlFor="mainJob">Основний фах</Label>
						<Input
							id="mainJob"
							placeholder="Spisovatel"
							value={userInfo.mainJob}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("mainJob", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1 md:col-span-5">
						<Label htmlFor="description">Про себе</Label>
						<Input
							id="description"
							placeholder="Mam ridicak"
							value={userInfo.description}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("description", e.target.value)
							}
						/>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-7 gap-2 px-4 pb-2 ">
					<div className="col-span-1 md:col-span-2">
						<Label htmlFor="phonenumber">Телефон</Label>
						<Input
							id="phonenumber"
							placeholder="+420123456789"
							value={userInfo.phonenumber}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("phonenumber", e.target.value)
							}
						/>
					</div>

					<div className="col-span-1 md:col-span-2">
						<Label>Мовні навички:</Label>
						<Select
							onValueChange={(value) =>
								handleChangeUserInfo("languageSkill", value)
							}
							value={userInfo.languageSkill}>
							<SelectTrigger>
								<SelectValue placeholder="Оберіть категорію">
									{userInfo.languageSkill}
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

					<div className="col-span-1 md:col-span-2">
						<Label htmlFor="city">Місто</Label>
						<Input
							id="city"
							placeholder="Praha"
							value={userInfo.city}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("city", e.target.value)
							}
						/>
					</div>

					<div className="col-span-1 md:col-span-1">
						<Label htmlFor="salary">Платня</Label>
						<Input
							id="salary"
							placeholder="kč/h"
							value={userInfo.salary}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("salary", e.target.value)
							}
						/>
					</div>
				</div>
			</div>

			<div className="shadow-lg px-4 py-2 rounded bg-stone-50 dark:bg-stone-400">
				<h3 className="text-center text-2xl font-semibold">
					Попередній досвід
				</h3>
				{experience.map((exp, index) => (
					<div key={index}>
						<h4 className="text-stone-700 font-semibold">
							Робота №{index + 1}
						</h4>
						<div
							key={index}
							className="grid grid-cols-2 md:grid-cols-7 gap-y-2 md:gap-y-0 md:gap-x-4">
							<div className="md:col-span-4 col-span-7">
								<div className="flex flex-col">
									<Input
										placeholder="Позиція (на чешській мові)"
										value={exp.vacancy}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											handleChangeExperience(index, "vacancy", e.target.value)
										}
									/>
								</div>
							</div>

							<div className="col-span-2 flex gap-4">
								<div className="flex flex-col gap-1 w-full">
									<Input
										placeholder="від мм.рррр"
										value={exp.startDate}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											handleChangeExperience(index, "startDate", e.target.value)
										}
									/>
								</div>
								<div className="flex flex-col gap-1 w-full">
									<Input
										placeholder="до мм.рррр"
										value={exp.endDate}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											handleChangeExperience(index, "endDate", e.target.value)
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
			<Button
				onClick={handleSubmit}
				className="dark:bg-stone-400 dark:hover:bg-stone-300">
				Зберігти
			</Button>
		</section>
	);
};

export default ExperienceForm;
