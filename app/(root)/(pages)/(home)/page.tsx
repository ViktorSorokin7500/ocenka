import AboutUs from "@/components/home/AboutUs";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import Head from "@/components/home/Head";
import InformationSection from "@/components/home/InformationSection";
import JobList from "@/components/home/JobList";
import OurStats from "@/components/home/OurStats";
import WorkCategories from "@/components/home/WorkCategories";

export default function Home() {
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
