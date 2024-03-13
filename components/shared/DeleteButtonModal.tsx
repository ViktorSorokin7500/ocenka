"use client";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const DeleteButtonModal = () => {
	const { toast } = useToast();
	const router = useRouter();
	const handleDelete = () => {
		toast({
			description: "Your message has been sent.",
			duration: 3000,
		}),
			setTimeout(() => {
				router.push("/");
			}, 3000);
	};
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button title="Видалити аккаунт" variant="destructive">
					Видалити
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						Ви насправді бажаєте видалити свій аккаунт?
					</AlertDialogTitle>
					<AlertDialogDescription>
						Якщо ви натискнете так - то Ваш аккаунт буде видаленою Я кщо ви не
						хочете його видаляти, то натисніть Повернутись.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Повернутись</AlertDialogCancel>
					<AlertDialogAction onClick={handleDelete}>Так</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default DeleteButtonModal;
