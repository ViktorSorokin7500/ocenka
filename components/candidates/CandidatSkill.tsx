import React from "react";

interface CandidatSkillProps {
	vacancy: string;
	startDate: string;
	endDate: string;
}

interface UserInfoProps {
	label: string;
	value: string | number;
}

export const UserInfo: React.FC<UserInfoProps> = ({ label, value }) => {
	return (
		<div className="text-sm flex gap-2">
			<span className="font-semibold">{label}:</span>
			<span className="text-stone-700 font-spaceGrotesk">{value}</span>
		</div>
	);
};

export const CandidatSkill = ({
	vacancy,
	startDate,
	endDate,
}: CandidatSkillProps) => {
	return (
		<div className="border rounded-lg dark:bg-stone-500 shadow-lg p-2 ">
			<div className="flex gap-1 items-center">
				<span className="text-stone-500 dark:text-stone-200">Посада:</span>
				<span className="font-semibold">{vacancy}</span>
			</div>
			<div className="flex gap-1 items-center">
				<span className="text-stone-500 dark:text-stone-200">Від: </span>
				<span className="font-semibold">{startDate}</span>
			</div>
			<div className="flex gap-1 items-center">
				<span className="text-stone-500 dark:text-stone-200">До:</span>
				<span className="font-semibold">{endDate}</span>
			</div>
		</div>
	);
};
