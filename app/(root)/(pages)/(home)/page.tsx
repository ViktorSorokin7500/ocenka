import Head from "@/components/home/Head";
import { ModeToggle } from "@/components/ui/toggleMode";

export default function Home() {
	return (
		<>
			<Head />
			<div>Маленький опис</div>
			<div>Як це працює</div>
			<div>Робочі категорії</div>
			<div>Картки (3) топ вакансій</div>
			<div>
				Кількість роботодавців + кількість працівників + кількість робот
			</div>
			<div>Топ роботодавців</div>
		</>
	);
}
