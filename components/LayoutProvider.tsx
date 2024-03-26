"use client";
import store from "@/redux/store";
import { SetCurrentUser } from "@/redux/usersSlice";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";

const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
	const dispath = useDispatch();
	const pathname = usePathname();
	//№24 время 9.09
	useEffect(() => {
		const getCurrentUser = async () => {
			try {
				const res = await axios.get("/api/users/currentuser");
				dispath(SetCurrentUser(res.data.data));
			} catch (error) {
				console.log(error);
			}
		};
		getCurrentUser();
	}, [dispath, pathname]);
	return <>{children}</>;
};

function ReduxProvider({ children }: { children: React.ReactNode }) {
	return (
		<Provider store={store}>
			<LayoutProvider>{children}</LayoutProvider>
		</Provider>
	);
}
export default ReduxProvider;
