import AboutUs from "@/components/home/AboutUs";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import Head from "@/components/home/Head";
import InformationSection from "@/components/home/InformationSection";
import JobList from "@/components/home/JobList";
import OurStats from "@/components/home/OurStats";
import WorkCategories from "@/components/home/WorkCategories";
import axios from "axios";
import { cookies } from "next/headers";

export async function getUser() {
	try {
		const token = cookies().get("token");
		const response = await axios.get(
			`${process.env.webhttp}/api/users/currentuser`,
			{
				headers: { Cookie: `token=${token?.value}` },
			}
		);
		console.log("page", response.data.data);
		return response.data.data;
	} catch (error) {}
}

export default async function Home() {
	const user: any = await getUser();
	return (
		<>
			<Head />
			<AboutUs />
			<InformationSection />
			<WorkCategories />
			<FeaturedJobs />
			<OurStats />
			<JobList />
		</>
	);
}
