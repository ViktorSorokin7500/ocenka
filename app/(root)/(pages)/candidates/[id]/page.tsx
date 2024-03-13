import { CandidatSkill, UserInfo } from "@/components/candidates/CandidatSkill";
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
							{user.description}
						</span>
						<div className="grid grid-cols-1 sm:grid-cols-2">
							{" "}
							<UserInfo label="Телефон" value={user.phonenumber} />
							<UserInfo label="Email" value={user.email} />
							<UserInfo label="Місто" value={user.city} />
							<UserInfo label="Володіння мовою" value={user.languageSkill} />
							<UserInfo label="Очікуванна платня (kč/h)" value={user.salary} />
							<UserInfo label="Вік" value={user.age.toString()} />
						</div>
					</div>
				</div>
				<div className="text-center pt-8">
					<h3 className="text-2xl font-semibold">Досвід роботи</h3>
					<ul className="p-4 flex flex-wrap gap-4 items-center justify-center">
						{user.skills.map(({ vacancy, startDate, endDate }, i) => (
							<CandidatSkill
								key={i}
								vacancy={vacancy}
								startDate={startDate}
								endDate={endDate}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default page;
