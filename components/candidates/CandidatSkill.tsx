import React from "react";

interface CandidatSkillProps {
	desc: string;
	from: string;
	to: string;
}

const CandidatSkill = ({ desc, from, to }: CandidatSkillProps) => {
	return (
		<div className="border rounded-lg dark:bg-stone-500 shadow-lg p-2 ">
			<div className="flex gap-1 items-center">
				<span className="text-stone-500 dark:text-stone-200">Посада:</span>
				<span className="font-semibold">{desc}</span>
			</div>
			<div className="flex gap-1 items-center">
				<span className="text-stone-500 dark:text-stone-200">Від: </span>
				<span className="font-semibold">{from}</span>
			</div>
			<div className="flex gap-1 items-center">
				<span className="text-stone-500 dark:text-stone-200">До:</span>
				<span className="font-semibold">{to}</span>
			</div>
		</div>
	);
};

export default CandidatSkill;
