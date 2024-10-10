import InterviewingSingleCard from "./interviewing-single-card";
import JobHistoryTitlteCard from "./job-history-title-card";
import { Card, CardContent } from "./ui/card";
import { interviewCardData } from "@/data/data";

const InterviewingCard = () => {
  return (
    <div>
      <Card className="w-[290px] max-sm:w-[340px] h-full bg-cardColor border-cardColor rounded-[20px]">
      <CardContent>
          <div>
            <JobHistoryTitlteCard
              title="Interviewing"
              jobNumber={5}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            {interviewCardData.map((interview) => (
            <InterviewingSingleCard
              key={interview.name}
              date={interview.date}
              image={interview.image}
              location={interview.location}
              name={interview.name}
              time={interview.time}

            />
            ))}
          </div>  
        </CardContent>
      </Card>
    </div>
  )
}

export default InterviewingCard