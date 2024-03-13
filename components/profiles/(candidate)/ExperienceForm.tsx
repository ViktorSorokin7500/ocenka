"use client";
import TitleDesc from "@/components/shared/TitleDesc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, ChangeEvent } from "react";

interface Experience {
	vacancy: string;
	startDate: string;
	endDate: string;
}

const ExperienceForm = ({ user }: { user: Experience[] }) => {
	const [experience, setExperience] = useState<Experience[]>(
		user || [{ vacancy: "", startDate: "", endDate: "" }]
	);

	const handleAddExperience = () => {
		setExperience([...experience, { vacancy: "", startDate: "", endDate: "" }]);
	};

	const handleChange = (
		index: number,
		field: keyof Experience,
		value: string
	) => {
		const updatedExperience = [...experience];
		updatedExperience[index][field] = value;
		setExperience(updatedExperience);
	};

	const handleRemoveExperience = (index: number) => {
		const updatedExperience = [...experience];
		updatedExperience.splice(index, 1);
		setExperience(updatedExperience);
	};

	const handleSubmit = () => {
		console.log(experience);
	};

	return (
		<div className="mx-16 my-8 space-y-4">
			<TitleDesc
				title="Попередній досвід"
				desc="Вкажіть свій професійний досвід, щоб роботодавцю було зрозуміле, наскільки ви кваліфіковані. Вкажіть всі попередні місця роботи в яких ви працювали.  Це допоможе роботодавцю краще оцінити вашу кваліфікацію та підходження до вакансії"
			/>
			{experience.map((exp, index) => (
				<div key={index} className="shadow-lg px-4 py-2 rounded bg-stone-50">
					<h4 className="text-stone-700 font-semibold">Робота №{index + 1}</h4>
					<div
						key={index}
						className="grid grid-cols-2 md:grid-cols-7 gap-y-2 md:gap-y-0 md:gap-x-4">
						<div className="md:col-span-4 col-span-7">
							<div className="flex flex-col">
								<Input
									placeholder="Позиція (на чешській мові)"
									value={exp.vacancy}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										handleChange(index, "vacancy", e.target.value)
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
										handleChange(index, "startDate", e.target.value)
									}
								/>
							</div>
							<div className="flex flex-col gap-1 w-full">
								<Input
									placeholder="до мм.рррр"
									value={exp.endDate}
									onChange={(e: ChangeEvent<HTMLInputElement>) =>
										handleChange(index, "endDate", e.target.value)
									}
								/>
							</div>
						</div>

						<div className="md:flex md:items-end md:col-span-1 col-span-7 mb-1.5">
							<Button
								className="w-full py-1"
								variant="destructive"
								onClick={() => handleRemoveExperience(index)}>
								Remove
							</Button>
						</div>
					</div>
				</div>
			))}
			<div className="flex justify-between item-center">
				<Button
					className="bg-blue-600 hover:bg-blue-500 rounded-full size-9 text-lg font-bold text-white"
					onClick={handleAddExperience}>
					+
				</Button>
				<Button onClick={handleSubmit}>Зберігти</Button>
			</div>
		</div>
	);
};

export default ExperienceForm;
