"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Talents } from "@/data/data";
import { Card, CardContent } from "@/components/ui/card";

const TalentCard = () => {
  const router = useRouter();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
        <div className='flex items-center justify-between mb-[27px] md:ml-[30px] lg:ml-0'>
          <div className=''>
            <span className='text-neutralColor text-lg max-sm:ml-5'>Showing: 125 results</span>
          </div>
            <div className='flex gap-2 items-center'>
              <span className='text-sm text-neutralColor font-semibold'>Sort by:</span>
              <button className='flex gap-1.5 items-center text-sm font-bold text-neutralColor'>Relevance <ChevronDown color='#808191' width={16} height={16}/></button>
            </div>
      </div>
      <div>
        {Talents.map((talent) => (
          <motion.div 
            key={talent.name} 
            className="mt-2.5 max-sm:ml-[24px] md:ml-[20px] lg:ml-0"
            variants={itemVariants} 
          >
            <Card className="xl:w-[950px] h-[118px] bg-cardColor border-cardColor md:w-[720px] lg:w-[620px] max-sm:w-[370px] max-sm:h-[154px] cursor-pointer" onClick={() => router.push("/talent/profile/1")}>
              <CardContent>
                <div className="flex lg:flex-row items-center lg:justify-between gap-5 mt-5 max-sm:justify-normal">
                  <div>
                    <Image
                      src={talent.image}
                      alt="talent"
                      className="max-sm:w-[60px] max-sm:h-[60px] max-sm:mb-12"
                    />
                  </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-white text-lg font-bold max-sm:text-md">{talent.name}</span>
                      <span className="text-sm text-neutralColor max-sm:text-xxs">{talent.twitter} | {talent.position}</span>
                      <span className="text-sm text-neutralColor max-sm:text-xxs">{talent.location}</span>
                      <button className="max-sm:block lg:hidden md:hidden text-neutralColor rounded-[10px] p-2 mt-2 bg-cardColorTwo hover:bg-greenButtonColor hover:text-neutralWhite transition-colors">Connect</button>
                    </div>
                    <div className="md:ml-auto max-sm:hidden">
                      <button className="text-neutralColor rounded-[10px] w-[101px] h-[48px] bg-cardColorTwo hover:bg-greenButtonColor hover:text-neutralWhite transition-colors">Connect</button>
                    </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default TalentCard