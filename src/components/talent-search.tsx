'use client'

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, MapPin, } from "lucide-react";

const TalentSearch = () => {
  return (
    <motion.div 
      className="flex lg:flex-row  lg:ml-10 xl:ml-20 md:ml-[30px] mt-7 max-sm:flex-col max-sm:ml-[24px]"
      initial={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
    <div className="relative">
        <SearchIcon className="absolute top-7 text-neutralColor left-3 max-sm:left-9 max-sm:size-7"/>
       <Input className="xl:w-[512px] lg:h-[80px] max-sm:w-[370px] max-sm:h-[52px] bg-cardColor rounded-tl-[20px] border-none text-neutralColor p-10 text-sm font-bold max-sm:pl-20" placeholder="Search a Talent"/>
    </div>
    <div className="relative">
      <MapPin className="absolute top-7 text-neutralColor left-2.5 max-sm:left-9 max-sm:size-7"/>
    <Input className="xl:w-[360px] lg:h-[80px] max-sm:w-[370px] max-sm:h-[52px] bg-cardColor  border-none text-neutralColor p-10 text-sm font-bold max-sm:pl-20" placeholder="Select Location"/>
    </div>
    <div className="p-4 bg-cardColor rounded-tr-[20px] max-sm:w-[370px] max-sm:h-[78px] rounded-br-[20px] flex items-center justify-center max-sm:rounded-none">
      <Button size="lg" className="bg-greenButtonColor text-white max-sm:w-[295px] max-sm:h-[48px] hover:border-2 hover:border-greenButtonColor hover:text-greenButtonColor transition-colors">Find Talent</Button>
    </div>
  </motion.div>
  )
}

export default TalentSearch