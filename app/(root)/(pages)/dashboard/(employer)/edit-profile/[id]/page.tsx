"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { employerListInfo } from "@/constants/servicesInfo";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

interface User {
	companyname: string;
	phonenumber: string;
	email: string;
	website: string;
}

const initialUser: User = {
	companyname: "",
	phonenumber: "",
	email: "",
	website: "",
};

const user = employerListInfo[0];

const ExperienceForm = () => {
	const router = useRouter();

	const [userInfo, setUserInfo] = useState<User>(user || initialUser);

	const handleChangeUserInfo = (field: keyof User, value: string) => {
		setUserInfo({ ...userInfo, [field]: value });
	};

	const handleSubmit = () => {
		console.log(userInfo);
		router.push(`/dashboard/employer-profile/${user.id}`);
	};

	return (
		<div className="mx-2 md:mx-16 my-8 space-y-4">
			<h1 className="text-center text-4xl font-bold">Доповнити профіль</h1>
			<div className="py-4 flex flex-col gap-2 rounded bg-stone-50 dark:bg-stone-400 shadow-lg">
				<h3 className="text-center text-2xl font-semibold">
					Загальна інформація
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 pb-2 ">
					<div className="col-span-1">
						<Label htmlFor="companyname">Назва компанії:</Label>
						<Input
							id="companyname"
							placeholder="S.R.O. MyCompany"
							value={userInfo.companyname}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("companyname", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="website">Web Site</Label>
						<Input
							id="website"
							placeholder="ukrainianworkhub.cz"
							value={userInfo.website}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("website", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="phonenumber">Номер телефону</Label>
						<Input
							id="phonenumber"
							placeholder="+420123456789"
							value={userInfo.phonenumber}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("phonenumber", e.target.value)
							}
						/>
					</div>
					<div className="col-span-1">
						<Label htmlFor="email">Пошта</Label>
						<Input
							id="email"
							placeholder="uwh@seznam.cz"
							value={userInfo.email}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeUserInfo("email", e.target.value)
							}
						/>
					</div>
				</div>

				<Button
					onClick={handleSubmit}
					className="dark:bg-stone-300 w-fit ml-4 dark:hover:bg-stone-200">
					Зберігти
				</Button>
			</div>
		</div>
	);
};

export default ExperienceForm;
