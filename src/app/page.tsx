import CardChart from "@/components/card-chart";
import PageHeading from "@/components/common/page-heading";
import LatestJobPosts from "@/components/latest-job-posts";

export default function Home() {
  return (
   <div>
    <PageHeading
      title="Welcome, Jubed"
      text="Wednesday, 13 July 2024"
    />
    <CardChart/>
    <LatestJobPosts/>
   </div>
  );
}
