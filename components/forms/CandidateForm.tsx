"use client";
// Zod
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Shadcn
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

// React
import { useForm } from "react-hook-form";
import { CandidateSchema } from "@/lib/validation";
import { VacancyLanguage } from "@/types/index.d";
import { useState } from "react";

const CandidateForm = () => {
	const [renderKey, setRenderKey] = useState(0);
	const form = useForm<z.infer<typeof CandidateSchema>>({
		resolver: zodResolver(CandidateSchema),
		defaultValues: {
			name: "",
			surname: "",
			description: "",
			city: "",
			phonenumber: "",
			skills: [{ vacancy: "", startDate: "", endDate: "" }],
			mainJob: "",
			languageSkill: VacancyLanguage.Choose,
			salary: "",
			age: "",
		},
	});

	function onSubmit(values: z.infer<typeof CandidateSchema>) {
		console.log("submit", { ...values, id: 1 });
	}

	function addSkill() {
		const newSkill = { vacancy: "", startDate: "", endDate: "" };
		form.setValue("skills", [...form.getValues().skills, newSkill]);
		setRenderKey((prevKey) => prevKey + 1);
	}

	const removeSkill = (index: number) => {
		if (index < 1) {
			return;
		}
		const updatedBonuses = form
			.getValues()
			.skills.filter((_, i) => i !== index);
		form.setValue("skills", updatedBonuses);
		setRenderKey((prevKey) => prevKey + 1);
	};

	return (
		<Form key={renderKey} {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="p-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
					<h4 className="text-center font-semibold text-2xl">
						Інформація щодо вакансії
					</h4>
					<div className="grid grid-cols-1 md:grid-cols-5 gap-2">
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Імя:</FormLabel>
										<FormControl>
											<Input placeholder="Ваше ім'я" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="surname"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Призвище:</FormLabel>
										<FormControl>
											<Input placeholder="Ваше призвище" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1">
							<FormField
								control={form.control}
								name="age"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Вік:</FormLabel>
										<FormControl>
											<Input placeholder="Ваш вік" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-7 gap-2">
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="mainJob"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Основний фах</FormLabel>
										<FormControl>
											<Input placeholder="Ваша основна професія" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1 md:col-span-5">
							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Про себе</FormLabel>
										<FormControl>
											<Input
												placeholder="Опишить себе в дікількох словах"
												{...field}
											/>
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-7 gap-2">
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="phonenumber"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">
											Ваш номер телефону
										</FormLabel>
										<FormControl>
											<Input placeholder="+380991241055" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="languageSkill"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Мовні навички:</FormLabel>
										<FormControl>
											<Select
												onValueChange={(value) => field.onChange(value)}
												value={field.value}>
												<SelectTrigger>
													<SelectValue placeholder="Оберіть категорію">
														{field.value}
													</SelectValue>
												</SelectTrigger>
												<SelectContent>
													{Object.values(VacancyLanguage).map((obec) => (
														<SelectItem
															key={obec}
															className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
															value={obec}>
															{obec}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</FormControl>

										<FormMessage className="text-sm" />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="city"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Ваше місто</FormLabel>
										<FormControl>
											<Input placeholder="Де ви знаходитесь" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1">
							<FormField
								control={form.control}
								name="salary"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Платня</FormLabel>
										<FormControl>
											<Input placeholder="kc/h" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					</div>
				</div>
				<div className="p-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
					<h4 className="text-center font-semibold text-2xl">
						Попередній досвід
					</h4>

					{form.getValues().skills.map((skill, index) => (
						<div key={index}>
							<h3>Навык {index + 1}</h3>
							<div className="grid gap-3 md:gap-1 grid-cols-2 md:grid-cols-6">
								<div className="col-span-2 md:col-span-3">
									<FormField
										control={form.control}
										name={`skills.${index}.vacancy`}
										render={({ field }) => (
											<FormItem className="flex flex-col gap">
												<div className="flex gap-2">
													<FormControl>
														<Input placeholder="Введите навык" {...field} />
													</FormControl>
												</div>
											</FormItem>
										)}
									/>
								</div>
								<div className="col-span-1">
									<FormField
										control={form.control}
										name={`skills.${index}.startDate`}
										render={({ field }) => (
											<FormItem className="flex flex-col gap">
												<div className="flex gap-2">
													<FormControl>
														<Input placeholder="Введите навык" {...field} />
													</FormControl>
												</div>
											</FormItem>
										)}
									/>
								</div>
								<div className="col-span-1">
									<FormField
										control={form.control}
										name={`skills.${index}.endDate`}
										render={({ field }) => (
											<FormItem className="flex flex-col gap">
												<div className="flex gap-2">
													<FormControl>
														<Input placeholder="Введите навык" {...field} />
													</FormControl>
												</div>
											</FormItem>
										)}
									/>
								</div>
								<div className="col-span-2 md:col-span-1 grid">
									{index != 0 ? (
										<Button
											variant="destructive"
											onClick={() => removeSkill(index)}>
											Видалити
										</Button>
									) : (
										<Button disabled>Видалити</Button>
									)}
								</div>
							</div>
						</div>
					))}
					<div className="flex justify-center">
						<Button
							type="button"
							className="bg-blue-600 hover:bg-blue-500 rounded-full my-2"
							onClick={addSkill}>
							+
						</Button>
					</div>
				</div>

				<div className="flex justify-between">
					<Button type="submit">Зберігти</Button>
					<Button disabled>Видалити</Button>
				</div>
			</form>
		</Form>
	);
};

export default CandidateForm;
