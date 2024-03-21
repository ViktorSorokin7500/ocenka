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
import { signUpSchema } from "@/lib/validation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RegistrationInfo } from "@/types/index.d";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
	const router = useRouter();
	const { toast } = useToast();

	const form = useForm<z.infer<typeof signUpSchema>>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			role: "candidate",
		},
	});

	async function onSubmit(values: z.infer<typeof signUpSchema>) {
		try {
			const res = await fetch("/api/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});
			if (res.ok) {
				toast({
					variant: "success",
					description: "user registered",
					duration: 3000,
				}),
					setTimeout(() => {
						router.push("/sign-in");
					}, 3000);
			}
		} catch (error: any) {
			toast({
				variant: "destructive",
				description:
					error.response.data.message || "Something went wrong. Try again!",
			});
			console.log("signUp =>", error);
		}
	}

	return (
		<div className="p-4 w-[320px] sm:w-[400px] shadow-lg rounded-lg bg-white space-y-4">
			<h1 className="text-3xl text-center font-semibold">Реєстрація</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input type="text" placeholder="shadcn" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
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
					<FormField
						control={form.control}
						name="role"
						render={({ field }) => (
							<FormItem className="flex flex-col gap">
								<FormLabel className="font-bold">Зереєструватись як:</FormLabel>
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
					/>
					<div className="grid">
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</Form>
			<div className="flex justify-between">
				<Link
					href="/"
					className="text-blue-600 font-semibold underline hover:no-underline">
					На головну
				</Link>
				<span>
					Маєте аккаунт?{" "}
					<Link
						href="/sign-in"
						className="text-blue-600 font-semibold underline hover:no-underline">
						Увійти
					</Link>
				</span>
			</div>
		</div>
	);
};

export default SignUp;
