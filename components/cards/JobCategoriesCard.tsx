"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface InfoCardProps {
	icon: string;
	title: string;
	link: string;
	desc: string;
}

const JobCategoriesCard = ({ icon, title, link, desc }: InfoCardProps) => {
	const router = useRouter();
	return (
		<div
			key={title}
			className="mx-auto bg-white dark:bg-stone-200 rounded-lg shadow-lg w-4/5 sm:w-full cursor-pointer"
			onClick={() => router.push(link)}>
			<div className="flex flex-col items-center py-4">
				<Image src={icon} alt={title} width={48} height={48} />
				<h3 className="text-2xl font-semibold dark:text-black">{title}</h3>
				<span className="text-center flex items-center text-stone-600">
					{desc}
				</span>
			</div>
		</div>
	);
};

export default JobCategoriesCard;
