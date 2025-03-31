"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { appliedJobsData } from "@/data/data";
import AppliedJobCard from "./applied-job-card";
import JobHistoryTitlteCard from "./job-history-title-card";
import { Card, CardContent } from "./ui/card";

const AppliedJobsCard = () => {
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
            title="Applied"
            jobNumber={6}
          />
          </div>
          <div className="flex flex-col gap-2.5">
            {appliedJobsData.map((jobs) => (
              <motion.div key={jobs.company} variants={itemVariants}>
                <AppliedJobCard
                  key={jobs.company}
                  image={jobs.image}
                  company={jobs.company}
                  title={jobs.title}
                  location={jobs.location}
                  filesUploaded={jobs.filesUploaded}
                  type={jobs.jobType}
                  whenApplied={jobs.whenApplied}
                />
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default AppliedJobsCard