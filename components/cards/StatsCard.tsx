import Image from "next/image";
import React from "react";

interface StatsCardProps {
	img: string;
	quantity: number;
	title: string;
}

const StatsCard = ({ img, quantity, title }: StatsCardProps) => {
	return (
		<div className="bg-white h-56 w-56 rounded-full flex flex-col justify-center items-center gap-1 shadow-lg">
			<Image src={img} alt={title} width={52} height={52} />
			<span className="font-bold text-2xl text-blue-900">{quantity}</span>
			<h3 className="font-inter font-semibold text-lg text-blue-700">
				{title}
			</h3>
		</div>
	);
};

export default StatsCard;
