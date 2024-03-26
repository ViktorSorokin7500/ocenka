import { Button } from "@/components/ui/button";
import { SetLoading } from "@/redux/loadersSlice";
import { SetCurrentUser } from "@/redux/usersSlice";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const EscapeButton = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	async function Logout() {
		try {
			dispatch(SetLoading(true));
			await axios.post("/api/users/logout");
			dispatch(SetCurrentUser(null));
			router.push("/");
		} catch (error) {
			console.log("Escape button", error);
		} finally {
			dispatch(SetLoading(false));
		}
	}
	return (
		<Button
			className="w-full bg-red-600 hover:bg-red-700 text-white"
			variant="secondary"
			onClick={Logout}>
			Вийти
		</Button>
	);
};

export default EscapeButton;
