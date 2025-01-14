import CardChart from "@/components/card-chart";
import PageHeading from "@/components/common/page-heading";
import LatestJobPosts from "@/components/latest-job-posts";

export default function Home() {
  return (
   <div className="mb-10">
    <PageHeading
      title="Welcome, Jubed"
      text="Wednesday, 13 July 2024"
      className="max-sm:ml-[26px] md:ml-10 lg:ml-20"
    />
    <CardChart/>
    <LatestJobPosts/>
   </div>
  );
}
