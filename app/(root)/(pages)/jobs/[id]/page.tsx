"use client";

import { RequestForm } from "@/components/forms/RequestForm";
import TitleDesc from "@/components/shared/TitleDesc";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const info = [
	"Conduct research to make evidence-based improvements to current methods of on-campus and online leadership courses",
	"Teach and facilitate in the leadership development programs",
	"Assist in planning and designing curriculum for the leadership programs",
	"Prepare guidelines and schedule for leadership sessions, activities, and small group discussions",
	"Supervise and monitor the work and performance of participants during the training programs",
	"Facilitate community service projects",
	"Ensure documentation of all training related activities",
	"Serve in the Admissions of committee of different BYLC programs",
];

const page = () => {
	const email = "berhaneselassie1945@gmail.com";
	const phonenumber = "+380991241055";
	const truncatedEmail = email.length > 18 ? email.slice(0, 18) + ".." : email;
	const copyToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			alert(`${text} скопійовано`);
		} catch (error) {
			console.error("Error copying text to clipboard:", error);
		}
	};
	return (
		<section className="py-8">
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
										Повна заннятість
									</span>
								</div>
								<div className="flex flex-col">
									<span className="text-sm text-stone-500">Категорія</span>
									<span className="text-sm text-stone-800 dark:text-stone-200">
										Водій
									</span>
								</div>
								<div className="flex flex-col">
									<span className="text-sm text-stone-500">Зарплатня</span>
									<span className="text-sm text-stone-800 dark:text-stone-200">
										125 kč/h
									</span>
								</div>
								<div className="flex flex-col">
									<span className="text-sm text-stone-500">Опубліковано</span>
									<span className="text-sm text-stone-800 dark:text-stone-200">
										25-06-1992
									</span>
								</div>
							</div>
						</div>
						<div>
							<h3 className="font-inter font-semibold text-lg">Опис роботи</h3>
							<p className="text-stone-600 dark:text-stone-200 text-sm">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, is a long established fact that
								a reader will be distracted by the readable content of a page
								when looking at its layout. The point of using Lorem Ipsum is
								that it has a more-or-less normal distribution of letters, as
								opposed to using 'Content here, content here', making it look
								like readable English.
							</p>
						</div>
						<div>
							<h3 className="font-inter font-semibold text-lg">Обов'язки</h3>
							<ul className="space-y-4 text-stone-600 dark:text-stone-200 text-sm ml-2">
								{info.map((item, i) => (
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
								{info.map((item, i) => (
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
									Плзенський
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-sm text-stone-500">Місто</span>
								<span className="text-sm text-stone-800 dark:text-stone-200">
									Пілзень
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-sm text-stone-500">Адреса</span>
								<span className="text-sm text-stone-800 dark:text-stone-200">
									Otakarova 10
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-sm text-stone-500">Адреса</span>
								<span className="text-sm text-stone-800 dark:text-stone-200">
									125 kč/h
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
								src="/qa-photo.jpg"
								alt="photo"
								height={320}
								width={320}
								className="object-contain flex"
							/>
						</div>
						<div className="flex flex-col gap-y-2 pt-4">
							<h4 className="font-bold font-spaceGrotesk text-lg">
								Tyno corporation
							</h4>
							<div
								className="flex gap-x-2 cursor-pointer"
								onClick={() => copyToClipboard(phonenumber)}
								title="Копіювати">
								<Image
									src="/assets/icons/phone.svg"
									alt="photo"
									height={16}
									width={16}
									className="object-contain"
								/>{" "}
								<span className="text-sm text-stone-700">{phonenumber}</span>
							</div>
							<div
								className="flex gap-x-2 cursor-pointer"
								onClick={() => copyToClipboard(email)}
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
								<span className="md:hidden">{email}</span>
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
									className="text-blue-600 underline hover:no-underline text-sm">
									web.dotthemes.com
								</Link>
							</div>
						</div>
					</div>
					<div className="p-2 border rounded-lg shadow-md">
						<h3 className="font-inter font-semibold text-lg">
							Відправити запит
						</h3>
						<RequestForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
