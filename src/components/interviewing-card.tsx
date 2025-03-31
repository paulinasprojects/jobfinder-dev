"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import InterviewingSingleCard from "./interviewing-single-card";
import JobHistoryTitlteCard from "./job-history-title-card";
import { Card, CardContent } from "./ui/card";
import { interviewCardData } from "@/data/data";

const InterviewingCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
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
              <motion.div variants={itemVariants} key={interview.name}>
                <InterviewingSingleCard
                  date={interview.date}
                  image={interview.image}
                  location={interview.location}
                  name={interview.name}
                  time={interview.time}
    
                />
              </motion.div>
            ))}
          </div>  
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default InterviewingCard