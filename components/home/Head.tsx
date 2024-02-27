import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import RenderTag from "../shared/RenderTag";

interface popularTagsProps {
	_id: number;
	name: string;
}
const Head = () => {
	const popularTags: popularTagsProps[] = [
		{ _id: 1, name: "Ridic" },
		{ _id: 2, name: "Nakladak" },
		{ _id: 3, name: "Uklizicka" },
		{ _id: 4, name: "prodavac" },
		{ _id: 5, name: "ostatni" },
	];
	return (
		<section className="relative h-96 xl:h-[600px]">
			<Image
				src="/home_main.jpg"
				alt=""
				fill
				className="object-cover opacity-75"
				style={{ filter: "brightness(35%) sepia(60%) hue-rotate(200deg)" }}
			/>
			<div className="absolute inset-0 flex flex-col justify-center gap-8 items-center text-white">
				<h1 className="px-4 text-4xl md:text-5xl lg:text-6xl text-center font-bold">
					Знайди своє місце:
					<br /> платформа для пошуку роботи та працівників!
				</h1>
				<div className="bg-red-500 relative flex items-center rounded-xl">
					<Input
						type="text"
						placeholder="Search anything globally..."
						className="min-w-60 lg:min-w-96 border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 text-gray-700"
					/>
					<Button variant="destructive" type="submit">
						Пошук
					</Button>
				</div>
				<div className="flex gap-4">
					{popularTags.map((tag) => (
						<RenderTag key={tag._id} _id={tag._id} name={tag.name} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Head;
