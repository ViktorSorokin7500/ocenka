import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface JobListCardProps {
	id: number;
	title: string;
	type: string;
	city: string;
	salery: number;
}

const JobListCard = ({ id, title, type, city, salery }: JobListCardProps) => {
	return (
		<div className="h-24 bg-blue-50 dark:bg-slate-400 flex sm:justify-between items-center shadow-xl px-4 sm:px-8 w-[320px] sm:w-[640px] rounded hover:scale-105 transition duration-300">
			<div className="space-y-1">
				<h3 className="text-lg font-inter font-bold">{title}</h3>
				<div className="flex gap-2 items-center">
					<Badge>{type}</Badge>
					<span>{city}</span>
					<span>{salery}kč/h</span>
				</div>
			</div>
			<Button asChild>
				<Link href={`/jobs/${id}`}>Деталі</Link>
			</Button>
		</div>
	);
};

export default JobListCard;
