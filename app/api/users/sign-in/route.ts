import { connectionToDB } from "@/lib/mongoose";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

connectionToDB();

export async function POST(request: NextRequest) {
	try {
		const reqBody = await request.json();

		const user = await User.findOne({ email: reqBody.email });
		if (!user) {
			throw new Error("User does not exist");
		}

		const validPassword = await bcrypt.compare(reqBody.password, user.password);
		if (!validPassword) {
			throw new Error("Invalid password");
		}

		const dataToBeSigned = {
			userId: user._id,
			email: user.email,
			role: user.role,
		};

		const token = jwt.sign(dataToBeSigned, process.env.jwt_secret!, {
			expiresIn: "1d",
		});

		const response = NextResponse.json(
			{ message: "Login successful" },
			{ status: 200 }
		);

		response.cookies.set("token", token, {
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 1000,
		});

		return response;
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
