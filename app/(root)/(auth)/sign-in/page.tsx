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
import { useToast } from "@/components/ui/use-toast";
import { signInSchema } from "@/lib/validation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
	const { toast } = useToast();
	const router = useRouter();

	const form = useForm<z.infer<typeof signInSchema>>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof signInSchema>) {
		try {
			const res = await signIn("credentials", {
				email: values.email,
				password: values.password,
				redirect: false,
			});
			if (res?.error) {
				throw new Error("Неверный эмеил или пароль");
			}
			router.push("/");
			console.log(res);
		} catch (error: any) {
			console.log(error);
			toast({
				variant: "destructive",
				description: "Неверный эмеил или пароль",
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
