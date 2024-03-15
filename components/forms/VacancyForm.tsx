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
import { VacancySchema } from "@/lib/validation";
import {
	VacancyCategory,
	VacancyLanguage,
	VacancyObec,
	VacancyType,
} from "@/types/index.d";
import { useState } from "react";

const VacancyForm = () => {
	const [renderKey, setRenderKey] = useState(0);
	const form = useForm<z.infer<typeof VacancySchema>>({
		resolver: zodResolver(VacancySchema),
		defaultValues: {
			title: "",
			desc: "",
			type: "Всі",
			category: "Всі",
			languageSkill: "Всі",
			obec: "Всі",
			city: "",
			address: "",
			salary: "",
			duties: ["Жодних"],
			bonuses: ["Жодних"],
		},
	});

	function onSubmit(values: z.infer<typeof VacancySchema>) {
		console.log("submit", values);
	}

	function addDuty() {
		form.setValue("duties", [...form.getValues().duties, ""]);
		setRenderKey((prevKey) => prevKey + 1);
	}

	function addBonus() {
		form.setValue("bonuses", [...form.getValues().bonuses, ""]);
		setRenderKey((prevKey) => prevKey + 1);
	}

	const removeDuty = (index: number) => {
		if (index < 1) {
			return;
		}
		const updatedDuties = form.getValues().duties.filter((_, i) => i !== index);
		form.setValue("duties", updatedDuties);
		setRenderKey((prevKey) => prevKey + 1);
	};

	const removeBonus = (index: number) => {
		if (index < 1) {
			return;
		}
		const updatedBonuses = form
			.getValues()
			.bonuses.filter((_, i) => i !== index);
		form.setValue("bonuses", updatedBonuses);
		setRenderKey((prevKey) => prevKey + 1);
	};

	const hasDuties = form.getValues().duties.length > 0;
	const hasBonuses = form.getValues().bonuses.length > 0;

	return (
		<Form key={renderKey} {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
				<div className="p-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
					<h4 className="text-center font-semibold text-2xl">
						Інформація щодо вакансії
					</h4>
					<div className="grid grid-cols-1 md:grid-cols-9 gap-2">
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Назва вакансії:</FormLabel>
										<FormControl>
											<Input placeholder="Ridic" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1 md:col-span-7">
							<FormField
								control={form.control}
								name="desc"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Опис вакансії:</FormLabel>
										<FormControl>
											<Input placeholder="shadcn" {...field} />
										</FormControl>

										<FormMessage className="text-sm" />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-7 gap-2">
						<div className="col-span-1">
							<FormField
								control={form.control}
								name="salary"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Платня:</FormLabel>
										<FormControl>
											<Input placeholder="Ridic" {...field} />
										</FormControl>

										<FormMessage className="text-sm" />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="type"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Зайнятість:</FormLabel>
										<FormControl>
											<Select
												onValueChange={(value) => field.onChange(value)}
												value={field.value}>
												<SelectTrigger>
													<SelectValue placeholder="Всі">
														{field.value}
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
										</FormControl>

										<FormMessage className="text-sm" />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="category"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Категорія:</FormLabel>
										<FormControl>
											<Select
												onValueChange={(value) => field.onChange(value)}
												value={field.value}>
												<SelectTrigger>
													<SelectValue placeholder="Всі">
														{field.value}
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
										</FormControl>

										<FormMessage className="text-sm" />
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
													{Object.values(VacancyLanguage).map(
														(languageSkill) => (
															<SelectItem
																key={languageSkill}
																className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
																value={languageSkill}>
																{languageSkill}
															</SelectItem>
														)
													)}
												</SelectContent>
											</Select>
										</FormControl>

										<FormMessage className="text-sm" />
									</FormItem>
								)}
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-2">
						<div className="col-span-1">
							<FormField
								control={form.control}
								name="obec"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Край:</FormLabel>
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
										</FormControl>

										<FormMessage className="text-sm" />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1">
							<FormField
								control={form.control}
								name="city"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Місто:</FormLabel>
										<FormControl>
											<Input placeholder="Praha" {...field} />
										</FormControl>

										<FormMessage className="text-sm" />
									</FormItem>
								)}
							/>
						</div>
						<div className="col-span-1 md:col-span-2">
							<FormField
								control={form.control}
								name="address"
								render={({ field }) => (
									<FormItem className="flex flex-col gap">
										<FormLabel className="font-bold">Адреса:</FormLabel>
										<FormControl>
											<Input placeholder="Otakarova 10" {...field} />
										</FormControl>

										<FormMessage className="text-sm" />
									</FormItem>
								)}
							/>
						</div>
					</div>
				</div>
				<div className="p-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
					{hasDuties && (
						<h4 className="text-center font-semibold text-2xl">
							Обов&apos;язки
						</h4>
					)}
					{form.getValues().duties.map((_, index) => (
						<FormField
							key={index}
							control={form.control}
							name={`duties.${index}`}
							render={({ field }) => (
								<FormItem className="flex flex-col gap">
									<FormLabel className="font-bold mt-2">
										Обов&apos;язок {index + 1}
									</FormLabel>
									<div className="flex gap-2">
										<FormControl>
											<Input placeholder="Введите обязанность" {...field} />
										</FormControl>

										{index != 0 ? (
											<Button
												variant="destructive"
												onClick={() => removeDuty(index)}>
												Видалити
											</Button>
										) : (
											<Button disabled>Видалити</Button>
										)}
									</div>
									<FormMessage className="text-sm" />
								</FormItem>
							)}
						/>
					))}
					<div className="flex justify-center">
						<Button
							type="button"
							className="bg-blue-600 hover:bg-blue-500 rounded-full my-2"
							onClick={addDuty}>
							+
						</Button>
					</div>
				</div>
				<div className="p-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
					{hasBonuses && (
						<h4 className="text-center font-semibold text-2xl">Бонуси</h4>
					)}
					{form.getValues().bonuses.map((_, index) => (
						<FormField
							key={index}
							control={form.control}
							name={`bonuses.${index}`}
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel className="font-bold mt-2">
										Бонус {index + 1}
									</FormLabel>
									<div className="flex gap-2">
										<FormControl>
											<Input placeholder="Введите бонус" {...field} />
										</FormControl>

										{index != 0 ? (
											<Button
												variant="destructive"
												onClick={() => removeBonus(index)}>
												Видалити
											</Button>
										) : (
											<Button disabled>Видалити</Button>
										)}
									</div>
									<FormMessage className="text-sm" />
								</FormItem>
							)}
						/>
					))}
					<div className="flex justify-center">
						<Button
							className="bg-blue-600 hover:bg-blue-500 rounded-full my-2"
							onClick={addBonus}>
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

export default VacancyForm;
