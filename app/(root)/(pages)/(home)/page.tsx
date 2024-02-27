import AboutUs from "@/components/home/AboutUs";
import Head from "@/components/home/Head";
import InformationSection from "@/components/home/InformationSection";
import WorkCategories from "@/components/home/WorkCategories";

export default function Home() {
	return (
		<>
			<Head />
			<AboutUs />
			<InformationSection />
			<WorkCategories />
			<div>Картки (3) топ вакансій</div>
			<div>
				Кількість роботодавців + кількість працівників + кількість робот
			</div>
			<div>Топ роботодавців</div>
		</>
	);
}
