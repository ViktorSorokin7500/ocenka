export interface Vacancy {
	title: string;
	desc: string;
	type: VacancyType;
	category: VacancyCategory;
	obec: string;
	city: string;
	address: string;
	salary: string;
	languageSkill: string;
	img: string;
	duties: string[];
	bonuses: string[];
}

export enum RegistrationInfo {
	Candidate = "candidate",
	Employer = "employer",
}

export enum VacancyType {
	Choose = "Всі",
	OneTime = "Одноразова",
	Partial = "Часткова",
	Full = "Повна",
}

export enum VacancyCategory {
	Choose = "Всі",
	AutoMoto = "Auto-moto",
	Accommodation = "Ubytování",
	Supply = "Doprava a zásobování",
	Hospitality = "Gastronomie a pohostinství",
	FoodIndustry = "Chemie a potravinářství",
	Other = "Ostatní",
	Commerce = "Prodej a obchod",
	ManualLabor = "Řemeslné a manuální práce",
	Construction = "Stavebnictví",
	Energy = "Energetika",
	Printing = "Tisk a polygrafie",
	Manufacturing = "Výroba průmysl a provoz",
	Healthcare = "Zdravotnictví a sociální péče",
	Agriculture = "Zemědělství a lesnictví",
}

export enum VacancyObec {
	Choose = "Всі",
	Praha = "Praha",
	Jihocesky = "Jihočeský kraj",
	Jihomoravsky = "Jihomoravský kraj",
	Karlovarsky = "Karlovarský kraj",
	Kralovehrasky = "Královéhradecký kraj",
	Liberecky = "Liberecký kraj",
	Moravskoslezsky = "Moravskoslezský kraj",
	Olomoucky = "Olomoucký kraj",
	Pardubicky = "Pardubický kraj",
	Plzensky = "Plzeňský kraj",
	Stredocesky = "Středočeský kraj",
	Ustecky = "Ústecký kraj",
	Vysocina = "Vysočina",
	Zlinsky = "Zlínský kraj",
}

export enum VacancyLanguage {
	Choose = "Всі",
	Low = "Початковий",
	Medium = "Комунікативний",
	High = "Розмовний",
}

export interface CreateUserParams {
	email: string;
	password: string;
	role: string;
}
