import React from "react";

interface TitleDescProps {
	title: string;
	desc?: string;
}

const TitleDesc = ({ title, desc }: TitleDescProps) => {
	return (
		<div className="px-4 text-center">
			<h2 className="font-inter text-4xl sm:text-5xl font-semibold">{title}</h2>
			<span className="text-sm text-slate-600 dark:text-stone-50">{desc}</span>
		</div>
	);
};

export default TitleDesc;
