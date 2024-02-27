"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface InfoCardProps {
	icon: string;
	title: string;
	text: string;
	link: string;
}

const InfoCard = ({ icon, title, text, link }: InfoCardProps) => {
	const router = useRouter();
	return (
		<div
			key={title}
			className="mx-auto bg-white dark:bg-stone-200 rounded-lg shadow-lg w-5/6">
			<div className="rounded-t-lg flex flex-col items-center pt-8 md:pb-2">
				<Image src={icon} alt={title} width={48} height={48} />
				<h3 className="text-2xl font-semibold dark:text-black">{title}</h3>
				<span className="text-center px-4 h-16 flex items-center text-stone-600">
					{text}
				</span>
			</div>
			<hr />
			<div
				style={{ transitionDuration: "600ms" }}
				className="rounded-b-lg py-2 transition-all ease-in-out hover:bg-blue-600 hover:text-white text-center dark:text-black dark:hover:text-white cursor-pointer"
				onClick={() => router.push(link)}>
				<span>Дізнатись більше</span>
			</div>
		</div>
	);
};

export default InfoCard;
