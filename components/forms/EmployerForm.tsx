"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EmployerSchema } from "@/lib/validation";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { SetLoading } from "@/redux/loadersSlice";
import { SetCurrentUser } from "@/redux/usersSlice";
import { useInfoEmail, useInfoId, useInfoRole } from "@/constants/formulas";

export function EmployerForm() {
	const id = useInfoId();
	const role = useInfoRole();
	const email = useInfoEmail();
	const dispatch = useDispatch();
	const [userInfo, setUserInfo] = useState({
		id: id,
		role: role,
		name: "",
		email: "",
		phonenumber: "",
		website: "",
	});

	useEffect(() => {
		const getCurrentUser = async () => {
			try {
				const user = await axios.get("/api/users/currentuser");
				const userInfoData = user.data.data;
				setUserInfo(userInfoData);
			} catch (error) {
				console.log(error);
			}
		};
		getCurrentUser();
	}, []);

	const form = useForm({
		resolver: zodResolver(EmployerSchema),
		defaultValues: userInfo,
	});

	useEffect(() => {
		form.setValue("id", userInfo.id);
		form.setValue("email", userInfo.email);
		form.setValue("role", userInfo.role);
		form.setValue("name", userInfo.name);
		form.setValue("phonenumber", userInfo.phonenumber);
		form.setValue("website", userInfo.website);
	}, [userInfo, form]);

	async function onSubmit(values: z.infer<typeof EmployerSchema>) {
		console.log("first");
		try {
			values.id = id;
			values.email = email;
			console.log(values);
			dispatch(SetLoading(true));
			const response = await axios.put("/api/users", values);
			dispatch(SetCurrentUser(response.data.data));
		} catch (error) {
			console.log(error);
		} finally {
			dispatch(SetLoading(false));
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 pb-2">
					<div className="col-span-1">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ім&apos;я</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-1">
						<FormField
							control={form.control}
							name="id"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Id</FormLabel>
									<FormControl>
										<Input disabled placeholder="shadcn" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-1">
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Role</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-1">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Пошта</FormLabel>
									<FormControl>
										<Input disabled placeholder="shadcn" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-1">
						<FormField
							control={form.control}
							name="phonenumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Номер телефону</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="col-span-1">
						<FormField
							control={form.control}
							name="website"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Website</FormLabel>
									<FormControl>
										<Input placeholder="shadcn" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="mt-4">
						<Button type="submit">Submit</Button>
					</div>
				</div>
			</form>
		</Form>
	);
}
