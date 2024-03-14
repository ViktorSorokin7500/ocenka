"use client";

import { RequestForm } from "@/components/forms/RequestForm";
import DeleteButtonModal from "@/components/shared/DeleteButtonModal";
import TitleDesc from "@/components/shared/TitleDesc";
import { Button } from "@/components/ui/button";
import { employerListInfo, jobListInfo } from "@/constants/servicesInfo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const info = jobListInfo[0];
const employer = employerListInfo[0];

const isOwner = employer.id === 33;

const page = () => {
	const truncatedEmail =
		employer.email.length > 18
			? employer.email.slice(0, 18) + ".."
			: employer.email;
	const truncatedWebsite =
		employer.website.length > 18
			? employer.website.slice(0, 18) + ".."
			: employer.website;

	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			alert(`${text} скопійовано`);
		} catch (error) {
			console.error("Error copying text to clipboard:", error);
		}
	};
	return (
		<section className="py-8 space-y-4">
			<TitleDesc
				title="Деталі вакансії"
				desc="повний опис вакансії, включаючи інформацію про обов'язки, вимоги до кандидатів, умови праці, компенсаційний пакет та іншу важливу інформацію"
			/>
			<div className="grid w-full md:grid-cols-4 gap-4 max-w-[960px] mx-auto px-4">
				<div className="md:col-span-3 space-y-4">
					<div className="p-4 border rounded-lg shadow-md space-y-4">
						<div>
							<h3 className="font-inter font-semibold text-lg">Деталі</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2">
								<div className="flex flex-col">
									<span className="text-sm text-stone-500">Тип роботи</span>
									<span className="text-sm text-stone-800 dark:text-stone-200">
										{info.type}
									</span>
								</div>
								<div className="flex flex-col">
									<span className="text-sm text-stone-500">Категорія</span>
									<span className="text-sm text-stone-800 dark:text-stone-200">
										{info.category}
									</span>
								</div>
								<div className="flex flex-col">
									<span className="text-sm text-stone-500">Зарплатня</span>
									<span className="text-sm text-stone-800 dark:text-stone-200">
										{info.salary} kč/h
									</span>
								</div>
								<div className="flex flex-col">
									<span className="text-sm text-stone-500">Опубліковано</span>
									<span className="text-sm text-stone-800 dark:text-stone-200">
										{info.atDate}
									</span>
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-inter font-semibold text-lg">Опис роботи</h3>
							<p className="text-stone-600 dark:text-stone-200 text-sm">
								{info.desc}
							</p>
						</div>
						<div>
							<h3 className="font-inter font-semibold text-lg">
								Обов&apos;язки
							</h3>
							<ul className="space-y-4 text-stone-600 dark:text-stone-200 text-sm ml-2">
								{info.duties?.map((item, i) => (
									<li key={i} className="flex items-center gap-2 leading-3">
										<Image
											src="/assets/icons/check.svg"
											alt="check"
											width={14}
											height={14}
											className="rounded-sm bg-blue-700"
										/>
										{item}
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="font-inter font-semibold text-lg">Бонуси</h3>
							<ul className="space-y-4 text-stone-600 dark:text-stone-200 text-sm ml-2">
								{info.bonuses?.map((item, i) => (
									<li key={i} className="flex items-center gap-2 leading-3">
										<Image
											src="/assets/icons/check.svg"
											alt="check"
											width={14}
											height={14}
											className="rounded-sm bg-blue-700"
										/>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="p-4 border rounded-lg shadow-md">
						<h3 className="font-inter font-semibold text-lg">
							Місце знаходження
						</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2">
							<div className="flex flex-col">
								<span className="text-sm text-stone-500">Край</span>
								<span className="text-sm text-stone-800 dark:text-stone-200">
									{info.obec}
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-sm text-stone-500">Місто</span>
								<span className="text-sm text-stone-800 dark:text-stone-200">
									{info.city}
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-sm text-stone-500">Адреса</span>
								<span className="text-sm text-stone-800 dark:text-stone-200">
									{info.address}
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-sm text-stone-500">Зарплатня</span>
								<span className="text-sm text-stone-800 dark:text-stone-200">
									{info.salary}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="md:col-span-1 space-y-4">
					<div className="lg:p-4 p-2 border rounded-lg shadow-md md:h-96">
						<h3 className="font-inter font-semibold text-lg">
							Інформація про роботодавця
						</h3>
						<div className="relative w-full flex justify-center">
							<Image
								src={employer.image}
								alt={employer.companyname}
								height={320}
								width={320}
								className="object-contain flex"
							/>
						</div>
						<div className="flex flex-col gap-y-2 pt-4">
							<h4 className="font-bold font-spaceGrotesk text-lg">
								{employer.companyname}
							</h4>
							<div
								className="flex gap-x-2 cursor-pointer"
								onClick={() => copyToClipboard(employer.phonenumber)}
								title="Копіювати">
								<Image
									src="/assets/icons/phone.svg"
									alt="photo"
									height={16}
									width={16}
									className="object-contain"
								/>{" "}
								<span className="text-sm text-stone-700">
									{employer.phonenumber}
								</span>
							</div>
							<div
								className="flex gap-x-2 cursor-pointer"
								onClick={() => copyToClipboard(truncatedEmail)}
								title="Копіювати">
								<Image
									src="/assets/icons/email.svg"
									alt="photo"
									height={16}
									width={16}
									className="object-contain"
								/>
								<span className="hidden md:block text-sm text-stone-700">
									{truncatedEmail}
								</span>
								<span className="md:hidden">{truncatedEmail}</span>
							</div>
							<div className="flex gap-x-2">
								<Image
									src="/assets/icons/link.svg"
									alt="photo"
									height={16}
									width={16}
									className="object-contain"
								/>
								<Link
									href="https://web.dotthemes.com/html/jobslab-demo/job-single.html"
									className="text-blue-600 underline hover:no-underline text-sm"
									target="_blank">
									{truncatedWebsite}
								</Link>
							</div>
						</div>
					</div>
					<div className="p-2 border rounded-lg shadow-md">
						{isOwner ? (
							<div className="flex flex-col gap-y-2">
								<Button
									title="Додати вакансію"
									asChild
									className="bg-blue-500 hover:bg-blue-400">
									<Link href="/dashboard/add-vacancy">Змінити</Link>
								</Button>
								<DeleteButtonModal />
							</div>
						) : (
							<>
								<h3 className="font-inter font-semibold text-lg">
									Відправити запит
								</h3>
								<RequestForm />
							</>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
