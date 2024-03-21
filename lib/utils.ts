import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

interface UrlQueryParams {
	params: string;
	key: string;
	value: string | null;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
	const currentUrl = qs.parse(params);

	currentUrl[key] = value;

	return qs.stringifyUrl(
		{
			url: window.location.pathname,
			query: currentUrl,
		},
		{ skipNull: true }
	);
}

export const validateJWT = async (request: NextRequest) => {
	try {
		const token = request.cookies.get("token")?.value;

		if (!token) {
			throw new Error("No token found");
		}
		const decodetData: any = await jwt.verify(token, process.env.jwt_secret!);
		return decodetData.userId;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
