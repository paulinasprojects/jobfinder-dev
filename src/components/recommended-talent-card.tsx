"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { recommendedTalents } from "@/data/data";
import { Bookmark } from "lucide-react";
import Image from "next/image";

const RecommendedTalentCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
      <div className="lg:ml-5 xl:ml-0 md:ml-5 max-sm:ml-10">
      <span className="text-white text-[22px] font-bold">Recomended Talent</span>
      </div>
      <div 
        className="xl:flex xl:flex-col max-sm:flex-col max-sm:flex lg:ml-0 xl:ml-0 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-[30px] mt-5"

        >
        {recommendedTalents.map((talent) => (
          <motion.div key={talent.name} variants={itemVariants}>
            <Card className="xl:w-[400px] max-sm:w-[400px] lg:w-[420px] h-[220px] bg-cardColor border-cardColor">
              <CardContent>
                <div className="flex items-center gap-[15px] mt-5">
                  <Image
                    src={talent.image}
                    alt={talent.name}
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-lg font-semibold">{talent.name}</span>
                    <span className="text-neutralColor text-sm">{talent.desiredPosition}</span>
                  </div>
                  <div className="ml-auto">
                    <Bookmark className="cursor-pointer text-neutral3Color hover:text-greenButtonColor"/>
                  </div>
                </div>
                <div className="bg-cardColorTwo w-[320px] h-[50px] mt-[24px] ml-5 rounded-[10px]">
                  <div className="flex items-center gap-[27px]">
                    <div className="flex flex-col items-start ml-3 mt-[4px]">
                      <span className="text-xxs text-neutralColor">Exp</span>
                      <span className="text-white text-sm">{talent.yearsExperience}</span>
                    </div>
                    <div className="flex flex-col items-start ml-3 mt-[4px]">
                      <span className="text-xxs text-neutralColor">Level</span>
                      <span className="text-white text-sm">{talent.level}</span>
                    </div>
                    <div className="flex flex-col items-start ml-3 mt-[4px] ">
                      <span className="text-xxs text-neutralColor">Type</span>
                      <span className="text-white text-sm">{talent.type}</span>
                    </div>
                    <div className="flex flex-col items-start ml-3 mt-[4px] ">
                      <span className="text-xxs text-neutralColor">Salary</span>
                      <span className="text-white text-sm">${talent.salary}</span>
                    </div>
                    </div>
                </div>
                    <div className="mt-[24px]">
                      <button className="lg:w-[360px] max-sm:w-[360px] md:w-[300px] h-[40px] rounded-[10px] text-greenButtonColor bg-[#1b2228] hover:bg-greenButtonColor hover:text-white transition-colors">Connect</button>
                    </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default RecommendedTalentCard