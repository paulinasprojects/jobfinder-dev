import CardChart from "@/components/card-chart";
import PageHeading from "@/components/common/page-heading";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <PageHeading
      title="Welcome, Jubed"
      text="Wednesday, 13 July 2024"
    />
    <CardChart/>
   </div>
  );
}
