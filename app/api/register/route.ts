import { connectionToDB } from "@/lib/mongoose";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
	try {
		await connectionToDB();
		const { name, email, password, role } = await req.json();

		const exists = await User.findOne({ email });
		if (exists) {
			throw new Error("User already exists");
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		await User.create({ name, email, password: hashedPassword, role });
		return NextResponse.json({ message: "User created" }, { status: 201 });
	} catch (error: any) {
		// console.log("error", error);
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
