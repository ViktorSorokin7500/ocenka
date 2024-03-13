import TitleDesc from "@/components/shared/TitleDesc";
import { Button } from "@/components/ui/button";
import { candidatesListInfo } from "@/constants/servicesInfo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteButtonModal from "@/components/shared/DeleteButtonModal";

const user = candidatesListInfo[0];

const page = () => {
	return (
		<section className="py-2 md:py-16 space-y-2">
			<TitleDesc
				title="Профіль"
				desc="Тут ви можете або доповнити свій профіль або видалити його"
			/>
			<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 p-4 md:p-16 border max-w-[1200px] mx-auto bg-stone-50 ">
				<div className="w-60 md:w-72">
					<div className="relative rounded-full bg-stone-100">
						<Image
							src={user.img}
							alt={`${user.name} ${user.surname}`}
							height={0}
							width={0}
							className="w-full h-auto object-contain"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-y-2 font-spaceGrotesk">
					<h3 className="text-3xl font-semibold text-center">
						{user.name} {user.surname} {user.age}p
					</h3>
					<span className="text-center text-2xl">{user.mainJob}</span>
					<span>{user.description}</span>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-y-1">
						<span>
							<b>Телефон:</b> {user.phonenumber}
						</span>
						<span>
							<b>Пошта:</b> {user.email}
						</span>
						<span>
							<b>Мовні здібності:</b> {user.languageSkill}
						</span>
						<span>
							<b>Годинна ставка:</b> {user.salary}
						</span>
					</div>
					<div>
						<h3 className="text-xl font-semibold">Досвід роботи</h3>
						<ul>
							{user.skills.map(({ vacancy, startDate, endDate }, i) => (
								<li key={i} className="flex justify-between w-3/4 md:w-2/3">
									<h4>{vacancy}</h4>
									<div className="flex gap-3">
										<span>{startDate}</span>
										<span>-</span>
										<span>{endDate}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-2 md:pt-16">
				<Button asChild>
					<Link href={`/dashboard/edit-my-profile/${user.id}`}>Змінити</Link>
				</Button>
				<DeleteButtonModal />
			</div>
		</section>
	);
};

export default page;
