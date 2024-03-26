import { SetLoading } from "@/redux/loadersSlice";
import { SetCurrentUser } from "@/redux/usersSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export function useUserInfo() {
	const currentUser = useSelector((state: any) => state.users.currentUser);
	return currentUser || {};
}

export function useInfoSession() {
	const { _id } = useUserInfo();
	return !!_id;
}

export function useInfoId() {
	const { _id } = useUserInfo();
	return _id || null;
}

export function useInfoName() {
	const { name } = useUserInfo();
	return name || "";
}

export function useInfoRole() {
	const { role } = useUserInfo();
	return role || "candidate";
}
