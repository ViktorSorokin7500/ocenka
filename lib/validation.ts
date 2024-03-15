import * as z from "zod";

export const VacancySchema = z.object({
	title: z.string().min(3, {
		message: "Title min 3 characters",
	}),
	desc: z.string().min(10, {
		message: "Description min 10 characters",
	}),
	type: z.enum(["Всі", "Одноразовая", "Частичная", "Повна"]),
	obec: z.enum([
		"Всі",
		"Praha",
		"Jihočeský kraj",
		"Jihomoravský kraj",
		"Karlovarský kraj",
		"Královéhradecký kraj",
		"Liberecký kraj",
		"Moravskoslezský kraj",
		"Olomoucký kraj",
		"Pardubický kraj",
		"Plzeňský kraj",
		"Středočeský kraj",
		"Ústecký kraj",
		"Vysočina",
		"Zlínský kraj",
	]),
	category: z.enum([
		"Всі",
		"Auto-moto",
		"Ubytování",
		"Doprava a zásobování",
		"Gastronomie a pohostinství",
		"Chemie a potravinářství",
		"Ostatní",
		"Prodej a obchod",
		"Řemeslné a manuální práce",
		"Stavebnictví",
		"Energetika",
		"Tisk a polygrafie",
		"Výroba průmysl a provoz",
		"Zdravotnictví a sociální péče",
		"Zemědělství a lesnictví",
	]),
	languageSkill: z.enum(["Всі", "Початковий", "Комунікативний", "Розмовний"]),
	city: z.string().min(3, {
		message: "Type city",
	}),
	address: z.string().min(3, {
		message: "Type address",
	}),
	salary: z.string().min(3, {
		message: "Type salary",
	}),
	duties: z
		.array(
			z.string().min(1, { message: "Графа бонуси не можуть бути порожніми" })
		)
		.min(1, { message: "Графа обов'язки не можуть бути порожніми" }),
	bonuses: z
		.array(
			z.string().min(1, { message: "Графа бонуси не можуть бути порожніми" })
		)
		.min(1, { message: "Графа бонуси не можуть бути порожніми" }),
});
