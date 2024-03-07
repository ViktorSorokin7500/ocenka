import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CandidatesListProps {
	id: number;
	desc: string;
	name: string;
	surname: string;
	img: string;
}

const CandidatesList = ({
	id,
	desc,
	name,
	surname,
	img,
}: CandidatesListProps) => {
	return (
		<div className="p-2 border rounded-lg shadow-md bg-white dark:bg-stone-400 text-center flex flex-col gap-2">
			<div className="relative flex justify-center">
				<Image
					src={img}
					alt={`${name} ${surname}`}
					height={200}
					width={200}
					className="object-cover bg-blue-200"
				/>
			</div>
			<span className="text-stone-600 text-sm line-clamp-2 dark:text-stone-50">
				{desc}
			</span>
			<Link href={`/candidates/${id}`}>
				<h3 className="text-stone-800 dark:text-white text-lg font-spaceGrotesk font-semibold hover:underline hover:text-blue-600">{`${name} ${surname}`}</h3>
			</Link>
		</div>
	);
};

export default CandidatesList;
