import { connectionToDB } from "@/lib/mongoose";
import { validateJWT } from "@/lib/utils";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
	try {
		connectionToDB();
		await validateJWT(request);
		const reqBody = await request.json();
		const updateUser = await User.findByIdAndUpdate(reqBody.id, reqBody, {
			new: true,
		}).select("-password");
		console.log(!!updateUser);
		if (!updateUser) {
			throw new Error("No user found");
		}

		return NextResponse.json({
			message: "User update successfully",
			data: updateUser,
		});
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 200 });
	}
}
