"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import JobHistoryTitlteCard from "./job-history-title-card";
import SavedJobCard from "./saved-job-card";
import { Card, CardContent } from "./ui/card";
import { savedJobsData } from "@/data/data";

const SavedJobsCard = () => {
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
              title="Saved Jobs"
              jobNumber={34}
            />
          </div>
          <div className="flex flex-col gap-2.5">
            {savedJobsData.map((jobs) => (
            <motion.div key={jobs.company} variants={itemVariants}>
              <SavedJobCard    
                title={jobs.title}
                company={jobs.company}
                image={jobs.image}
                location={jobs.location}
              />
            </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-cardColorTwo text-neutralColor w-[262px] py-2 rounded-[10px] mt-2.5 text-[15px] font-semibold hover:bg-greenButtonColor hover:text-white transition-colors">See more</button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default SavedJobsCard