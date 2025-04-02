"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { latestJobPostsData, companiesCardsData } from "@/data/data";
import { ChevronDown } from "lucide-react";
import LatestJobCard from "./latest-jobs-card";
import RecomendedCard from "./recommended-card";
import Schedule from "./schedule";
import CompaniesCard from "./companies-card"


const LatestJobPosts = () => {
  return (
    <div>
      <motion.div 
        className="flex xl:flex-row gap-10 mt-[63px] xl:ml-10 md:flex-col lg:ml-0 md:ml-5 max-sm:flex-col max-sm:ml-4"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.2}}
        variants={containerVariants}
      >
        {/* Left */}
        <div>
          <div className="flex  xl:justify-between items-center md:justify-between md:mx-10 max-sm:justify-between max-sm:gap-[54px] max-sm:mx-[24px]">
            <h4 className="text-[22px] font-bold text-white">Latest Job Posts</h4>
              <button className="text-neutral3Color">See All</button>
          </div>
          <div className="mt-8 grid xl:grid-cols-40 lg:grid-cols-2 gap-10 md:grid-cols-1 max-sm:grid-cols-18 md:mx-5">
            {latestJobPostsData.map((data) => (
              <motion.div key={data.id} variants={itemVariants}>
                <LatestJobCard
                  title={data.title}
                  description={data.description}
                  image={data.image}
                  salary={data.salary}
                />
              </motion.div>
            ))}
          </div>
            <div className="mt-[52px] grid xl:grid-cols-30 lg:grid-cols-3 gap-9 max-sm:flex max-sm:flex-col max-sm:ml-[5px] md:grid-cols-26 md:mx-5">
              {companiesCardsData.map((data) => (
                <motion.div key={data.id} variants={itemVariants}>
                  <CompaniesCard
                    image={data.image}
                    star={data.star}
                    title={data.title}
                    location={data.location}
                    jobVacancy={data.jobVacancy}
                  />
                </motion.div>
              ))}
            </div>
        </div>
      {/* Right */}
      <div className="mr-20 md:mr-5 md:ml-5">
        <div className="flex items-center justify-between max-sm:justify-between  max-sm:gap-[13px]">
          <h4 className="text-[22px] max-sm:text-md font-bold text-white max-sm:ml-[10px]">Recomended For You</h4>
            <button className="text-neutral3Color">
              See All
          </button>
        </div>
        <div className="flex xl:flex-col md:gap-11 md:flex-col max-sm:flex-col">
        <div className="mt-8">
          <RecomendedCard/>
        </div>
        <div className="md:mt-8 max-sm:mt-8">
          <Schedule/>
        </div>
        </div>
      </div>
      </motion.div>
    </div>
  )
}

export default LatestJobPosts