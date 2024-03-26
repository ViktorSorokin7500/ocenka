import User from "@/models/userModel";
import { connectionToDB } from "@/lib/mongoose";

export interface GetUserByIdParams {
	userId: string;
}

export async function getUserById(params: GetUserByIdParams) {
	try {
		connectionToDB();
		console.log("user.action params =>", params);
		// const user = await User.findById(params);
		// if (!user) {
		// 	throw new Error("No user found");
		// }
		// return user;
	} catch (error) {
		console.error("Error getting user by ID:", error);
		throw error;
	}
}
