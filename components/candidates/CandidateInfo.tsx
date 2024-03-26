"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { candidatesListInfo } from "@/constants/servicesInfo";
import { CandidatSkill, UserInfo } from "./CandidatSkill";
import { useDispatch } from "react-redux";
import { SetLoading } from "@/redux/loadersSlice";
import axios from "axios";
import { SetCurrentUser } from "@/redux/usersSlice";
import { useRouter } from "next/navigation";

const user = candidatesListInfo[0];

const CandidateInfo = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	async function Logout() {
		try {
			dispatch(SetLoading(true));
			await axios.post("/api/users/logout");
			dispatch(SetCurrentUser(null));
			router.push("/");
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(SetLoading(false));
		}
	}
	return (
		<>
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
						<UserInfo label="Телефон" value={user.phonenumber} />
						<UserInfo label="Email" value={user.email} />
						<UserInfo label="Місто" value={user.city} />
						<UserInfo label="Володіння мовою" value={user.languageSkill} />
						<UserInfo label="Очікуванна платня (kč/h)" value={user.salary} />
						<UserInfo label="Вік" value={user.age.toString()} />
					</div>
					<div>
						<h3 className="text-xl font-semibold">Досвід роботи</h3>
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
			</div>
			<div className="flex justify-center gap-2 md:pt-16">
				<Button asChild>
					<Link href={`/dashboard/edit-my-profile/${user.id}`}>Змінити</Link>
				</Button>
				<Button variant="destructive" onClick={Logout}>
					Вийти
				</Button>
			</div>
		</>
	);
};

export default CandidateInfo;
