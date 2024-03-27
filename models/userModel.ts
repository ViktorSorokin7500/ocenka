import mongoose, { model, models } from "mongoose";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			require: true,
			default: "candidate",
		},
		isAdmin: {
			type: Boolean,
			required: true,
			default: false,
		},
		phonenumber: {
			type: String,
			require: false,
			default: "",
		},
		image: {
			type: String,
			require: true,
			default: "/public/assets/icons/avatar.svg",
		},

		// candidate info
		description: {
			type: String,
			require: false,
			default: "",
		},
		surname: {
			type: String,
			require: false,
			default: "",
		},
		city: {
			type: String,
			require: false,
			default: "",
		},
		mainJob: {
			type: String,
			require: false,
			default: "",
		},
		languageSkill: {
			type: String,
			require: false,
			default: "",
		},
		salary: {
			type: String,
			require: false,
			default: "",
		},
		age: {
			type: String,
			require: false,
			default: "",
		},
		skills: {
			type: [],
			require: false,
			default: [""],
		},

		// employer info
		companyname: {
			type: String,
			require: false,
			default: "",
		},
		website: {
			type: String,
			require: false,
			default: "",
		},
	},
	{ timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
