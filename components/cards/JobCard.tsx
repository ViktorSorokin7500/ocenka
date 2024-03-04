import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";

interface JobCardProps {
	id: number;
	title: string;
	desc: string;
	type: string;
	city: string;
	atDate: Date;
	salery: number;
	img: any;
}

const JobCard = ({
	id,
	title,
	desc,
	type,
	city,
	atDate,
	salery,
	img,
}: JobCardProps) => {
	return (
		<div className="group mx-auto bg-white dark:bg-stone-200 rounded-lg shadow-lg hover:shadow-2xl w-full hover:scale-105 transirion duration-300">
			<div className="relative h-72 sm:h-60 lg:h-48">
				<Image
					src={img}
					alt={title}
					fill
					className="rounded-t-lg object-cover"
				/>
			</div>
			<div className="p-6">
				<h2 className="text-lg font-bold font-inter line-clamp-1 dark:text-stone-800">
					{title}
				</h2>
				<div className="flex items-center justify-around py-4">
					<div className="flex items-center gap-1">
						<Image
							src="/assets/icons/location.svg"
							alt="location"
							width={20}
							height={20}
						/>
						<span className="font-semibold dark:text-stone-800">{city}</span>
					</div>
					<Badge>{type}</Badge>
				</div>
				<span className="text-stone-600 line-clamp-2">{desc}</span>
			</div>
			<div className="bg-blue-50 group-hover:bg-blue-200 dark:bg-blue-200 dark:group-hover:bg-blue-300 py-3 flex items-center justify-around rounded-b-lg">
				<span className="font-semibold dark:text-stone-800">{salery} kč/h</span>
				<Button asChild size="sm">
					<Link href={`/jobs/${id}`}>Деталі</Link>
				</Button>
			</div>
		</div>
	);
};

export default JobCard;
