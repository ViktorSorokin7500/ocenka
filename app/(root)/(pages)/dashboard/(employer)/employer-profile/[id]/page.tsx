"use client";
import TitleDesc from "@/components/shared/TitleDesc";
import { Button } from "@/components/ui/button";
import { employerListInfo, jobListInfo } from "@/constants/servicesInfo";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DeleteButtonModal from "@/components/shared/DeleteButtonModal";
import JobListCard from "@/components/cards/JobListCard";
import { useInfoId } from "@/constants/formulas";

const employer = employerListInfo[0];
const info = jobListInfo;

const Page = () => {
	const userId = useInfoId();
	return (
		<section className="py-2 md:py-16 space-y-2">
			<TitleDesc
				title="Профіль"
				desc="Тут ви можете додати або видалити свої вакансії, доповнити свій профіль або видалити його"
			/>
			<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 p-4 md:p-16 border max-w-[1200px] mx-auto bg-stone-50 dark:bg-stone-500">
				<div className="w-60 md:w-72">
					<div className="relative rounded-full bg-stone-100">
						<Image
							src={employer.image}
							alt={employer.companyname}
							height={250}
							width={250}
							className="w-full h-auto object-contain"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-y-6 font-spaceGrotesk">
					<h3 className="text-3xl font-semibold text-center">
						{employer.companyname}
					</h3>
					<div className="flex flex-col gap-y-3">
						<span>
							<b>Телефон:</b> {employer.phonenumber}
						</span>
						<span>
							<b>Пошта:</b> {employer.email}
						</span>
						<span>
							<b>Сайт:</b> {employer.website}
						</span>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-4 justify-center items-center pt-4">
				<h3 className="text-2xl font-bold">Мої пропозиції</h3>
				{info?.map(({ id, title, type, city, salary }, i) => (
					<JobListCard
						key={i}
						id={id}
						title={title}
						type={type}
						city={city}
						salary={salary}
					/>
				))}
			</div>
			<div className="flex justify-center gap-2 pt-4 md:pt-8">
				<Button
					title="Додати вакансію"
					asChild
					className="bg-blue-500 hover:bg-blue-400 rounded-full">
					<Link href="/dashboard/add-vacancy">
						<span className="scale-150 text-white">+</span>
					</Link>
				</Button>
				<Button title="Змінити профіль" asChild>
					<Link href={`/dashboard/edit-profile/${userId}`}>Змінити</Link>
				</Button>
				<DeleteButtonModal />
			</div>
		</section>
	);
};

export default Page;
