"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import Image from "next/image";
import { Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { similarJobData } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";


const SimilarJobCard = () => {
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
      className="xl:flex xl:flex-col gap-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:ml-0 max-sm:mx-5 xl:ml-0"
    >
    {similarJobData.map((data) => (
      <motion.div 
        className="mt-1.5" key={data.jobPosition}
        variants={itemVariants}
      >
        <Card 
          className="xl:w-[380px] h-full bg-cardColor border-cardColorTwo rounded-[10px] cursor-pointer" 
          onClick={() => router.push("/job/1")}
        >
          <CardContent>
            <div className="flex gap-4 items-center justify-between mt-5">
              <Image
                src={data.icon}
                alt="company logo"
              />
              <div className="flex flex-col gap-1.5 mr-auto">
                <span className="text-white text-lg font-bold">{data.jobPosition}</span>
                <span className="text-neutralColor text-sm">{data.jobLocation}</span>
              </div>
                <span className="text-white text-sm font-semibold">${data.jobSalaryHour}
                  <span className="text-neutralColor text-sm">/Hr</span>
                </span>
            </div>
            <div className="text-white flex items-center justify-between mt-5">
              <span className="text-sm text-neutralColor font-medium">{data.jobTimeLeft}</span>
              <div className="flex items-center gap-[11px]">
                <Bookmark className="cursor-pointer text-neutral3Color hover:text-greenButtonColor" width={19} height={19}/>
                <button className="text-greenButtonColor text-sm font-medium bg-[#1b2a2d] p-2.5 rounded-[7px] hover:bg-greenButtonColor hover:text-white transition-colors">
                  View
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    ))}
    </motion.div>
  )
}

export default SimilarJobCard