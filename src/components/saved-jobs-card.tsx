import JobHistoryTitlteCard from "./job-history-title-card";
import SavedJobCard from "./saved-job-card";
import { Card, CardContent } from "./ui/card";
import { savedJobsData } from "@/data/data";

const SavedJobsCard = () => {
  return (
    <div>
      <Card className="w-[290px] max-sm:w-[340px] h-full bg-cardColor border-cardColor rounded-[20px]">
        <CardContent>
          <div>
            <JobHistoryTitlteCard
              title="Saved Jobs"
              jobNumber={34}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            {savedJobsData.map((jobs) => (
            <SavedJobCard
              key={jobs.company}
              title={jobs.title}
              company={jobs.company}
              image={jobs.image}
              location={jobs.location}
            />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-cardColorTwo text-neutralColor w-[262px] py-2 rounded-[10px] mt-2.5 text-[15px] font-semibold hover:bg-greenButtonColor hover:text-white transition-colors">See more</button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SavedJobsCard