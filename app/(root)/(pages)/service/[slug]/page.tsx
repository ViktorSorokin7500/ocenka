import { servicesInfo } from "@/constants/servicesInfo";
import Image from "next/image";
import React from "react";

interface SearchServicePageProps {
	params: {
		slug: string;
	};
}

const SearchServicePage: React.FC<SearchServicePageProps> = ({ params }) => {
	const item = servicesInfo.find((item) => item.slug === params.slug);
	if (!item) {
		return (
			<div className="min-h-screen grid place-items-center">
				{/* <div className="px-4 text-center text-xl font-spaceGrotesk font-semibold">
					<span>Сталась помилка, будь-ласка, поверніться на</span>{" "}
					<Link href="/" className="text-blue-700 underline">
						головну сторінку.
					</Link>
				</div> */}
			</div>
		);
	}
	return (
		<section className="">
			<div className="relative w-full h-48 grid place-items-center">
				<Image
					style={{
						filter:
							"brightness(50%) sepia(75%) opacity(50%) hue-rotate(280deg) blur(1px)",
					}}
					src="/qa-photo.jpg"
					alt="Q&A"
					fill
					className="object-cover"
				/>
				<h1 className="absolute text-3xl md:text-4xl text-blue-900 dark:text-stone-200 font-inter font-bold">
					{item.title}
				</h1>
			</div>
			<div className="py-8 px-16 text-stone-700 dark:text-stone-200">
				{item.desc}
			</div>
		</section>
	);
};

export default SearchServicePage;
