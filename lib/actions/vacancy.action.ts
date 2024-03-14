"use server";

import { connectionToDB } from "../mongoose";

export async function createVacancy(params: any) {
	try {
		connectionToDB();
	} catch (error) {}
}
