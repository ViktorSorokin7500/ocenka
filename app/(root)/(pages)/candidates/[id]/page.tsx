import CandidatSkill from "@/components/candidates/CandidatSkill";
import TitleDesc from "@/components/shared/TitleDesc";
import { candidatesListInfo } from "@/constants/servicesInfo";
import Image from "next/image";
import React from "react";

const page = () => {
	const user = candidatesListInfo[0];
	return (
		<section className="py-16 px-4 max-w-[920px] mx-auto">
			<TitleDesc
				title="Профіль кандидата"
				desc="Професійний портрет кандидата з коротким описом талантів і навичок"
			/>
			<div className="p-4 border border-spacing-1 shadow-lg">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
					<div className="bg-blue-400 flex justify-center max-w-96 mx-auto col-span-1 md:col-span-1 rounded-sm">
						<Image
							src="/assets/icons/avatar.svg"
							alt="avatar"
							width={240}
							height={240}
						/>
					</div>
					<div className="flex flex-col justify-center gap-4 col-span-1 md:col-span-2">
						<h2 className="text-4xl font-inter font-bold">{`${user.name} ${user.surname}`}</h2>
						<span className="text-2xl text-stone-600 dark:text-stone-300">
							{user.mainJob}
						</span>
						<span className="text-stone-500 dark:text-stone-200">
							{user.desc}
						</span>
						<div className="grid grid-cols-1 sm:grid-cols-2">
							<div className="text-sm flex gap-2">
								<span className="font-semibold">Телефон: </span>
								<span className="text-stone-700 font-spaceGrotesk">
									{user.phonenumber}
								</span>
							</div>
							<div className="text-sm flex gap-2">
								<span className="font-semibold">Email:</span>
								<span className="text-stone-700 font-spaceGrotesk">
									{user.email}
								</span>
							</div>
							<div className="text-sm flex gap-2">
								<span className="font-semibold">Місто:</span>
								<span className="text-stone-700 font-spaceGrotesk">
									{user.city}
								</span>
							</div>
							<div className="text-sm flex gap-2">
								<span className="font-semibold">Володіння мовою</span>
								<span className="text-stone-700 font-spaceGrotesk">
									{user.languageSkill}
								</span>
							</div>
							<div className="text-sm flex gap-2">
								<span className="font-semibold">Очікуванна платня:</span>
								<span className="text-stone-700 font-spaceGrotesk">
									{user.salery} kč/h
								</span>
							</div>
							<div className="text-sm flex gap-2">
								<span className="font-semibold">Вік:</span>
								<span className="text-stone-700 font-spaceGrotesk">
									{user?.age}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center pt-8">
					<h3 className="text-2xl font-semibold">Досвід роботи</h3>
					<ul className="p-4 flex flex-wrap gap-4 items-center justify-center">
						{user.skills.map(({ desc, from, to }, i) => (
							<CandidatSkill key={i} desc={desc} from={from} to={to} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default page;
