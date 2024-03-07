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

const formSchema = z.object({
	username: z
		.string()
		.min(2, {
			message: "І'мя повино бути більше двох символів",
		})
		.regex(/^[a-zA-Z]+$/, { message: "Використовуйте лише латинські літери" }),
	email: z.string().email({ message: "Введіть свою пошту" }),
	phonenumber: z
		.string()
		.min(8, {
			message: "Номер телелефону має бути довжиною більше 8 цифр",
		})
		.max(15, {
			message:
				"Номер телелефону має бути виключно з цифр, довжиною менше 15 цифр",
		})
		.regex(/^\+\d{10,}$/, {
			message: "Номер телелефону має починатись на +, бути виключно з цифр",
		}),
});

export function RequestForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			email: "",
			phonenumber: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
				<FormField
					control={form.control}
					name="username"
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
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пошта</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
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
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
