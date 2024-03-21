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

export const EmployerSchema = z.object({
	username: z
		.string()
		.min(2, {
			message: "І'мя повино бути більше двох символів",
		})
		.regex(/^[a-zA-Z]+$/, { message: "Використовуйте лише латинські літери" }),
	email: z.string().email({ message: "Введіть свою пошту" }),
	phonenumber: z
		.string()
		.min(8, {
			message: "Номер телелефону має бути довжиною більше 8 цифр",
		})
		.max(15, {
			message:
				"Номер телелефону має бути виключно з цифр, довжиною менше 15 цифр",
		})
		.regex(/^\+\d{10,}$/, {
			message: "Номер телелефону має починатись на +, бути виключно з цифр",
		}),
});

export const CandidateSchema = z.object({
	name: z.string().min(3, {
		message: "Title min 3 characters",
	}),
	surname: z.string().min(3, {
		message: "Title min 3 characters",
	}),
	description: z.string().min(3, {
		message: "Title min 3 characters",
	}),
	city: z.string().min(3, {
		message: "Title min 3 characters",
	}),
	phonenumber: z.string().min(3, {
		message: "Title min 3 characters",
	}),
	skills: z.array(
		z.object({
			vacancy: z.string(),
			startDate: z.string(),
			endDate: z.string(),
		})
	),
	mainJob: z.string().min(3, {
		message: "Title min 3 characters",
	}),
	languageSkill: z.enum(["Всі", "Початковий", "Комунікативний", "Розмовний"]),
	salary: z.string().min(3, {
		message: "Title min 3 characters",
	}),
	age: z.string().min(3, {
		message: "Title min 3 characters",
	}),
});

export const signInSchema = z.object({
	email: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),
});

export const signUpSchema = z.object({
	name: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),
	email: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),
	password: z.string().min(2, {
		message: "Email must be at least 2 characters.",
	}),
	role: z.enum(["candidate", "employer"]),
});
