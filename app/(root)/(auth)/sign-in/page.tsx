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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { signInSchema } from "@/lib/validation";
import Link from "next/link";
import { RegistrationInfo } from "@/types/index.d";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignIn = () => {
	const { toast } = useToast();
	const router = useRouter();

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
			role: "candidate",
		},
	});

	async function onSubmit(values: z.infer<typeof signInSchema>) {
		try {
			const response = await axios.post("/api/users/sign-in", values);
			toast({
				variant: "success",
				description: response.data.message,
				duration: 1500,
			}),
				setTimeout(() => {
					router.push("/");
				}, 1500);
		} catch (error: any) {
			toast({
				variant: "destructive",
				description: error.response.data.message || "Щось сталось...",
			});
		}
	}
	return (
		<div className="p-4 w-[320px] sm:w-[400px] shadow-lg rounded-lg bg-white space-y-4">
			<h1 className="text-3xl text-center font-semibold">Увійти</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input type="email" placeholder="shadcn" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type="password" placeholder="shadcn" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* <FormField
						control={form.control}
						name="role"
						render={({ field }) => (
							<FormItem className="flex flex-col gap">
								<FormLabel className="font-bold">Увійти як:</FormLabel>
								<FormControl>
									<Select
										onValueChange={(value) => field.onChange(value)}
										value={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Candidate">
												<span className="capitalize">{field.value}</span>
											</SelectValue>
										</SelectTrigger>
										<SelectContent>
											{Object.values(RegistrationInfo).map((type) => (
												<SelectItem
													key={type}
													className="cursor-pointer hover:bg-stone-50 dark:hover:bg-stone-500"
													value={type}>
													<span className="capitalize">{type}</span>
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>

								<FormMessage className="text-sm" />
							</FormItem>
						)}
					/> */}
					<div className="grid">
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</Form>
			<div className="text-sm sm:text-base flex justify-between">
				<Link
					href="/"
					className="text-blue-600 font-semibold underline hover:no-underline">
					На головну
				</Link>
				<span>
					Не маєте аккаунт?{" "}
					<Link
						href="/sign-up"
						className="text-blue-600 font-semibold underline hover:no-underline">
						Реєстрація
					</Link>
				</span>
			</div>
		</div>
	);
};

export default SignIn;
