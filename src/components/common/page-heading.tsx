"use client";

import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

interface PageHeadingProps {
  title: string;
  text: string;
  className?: string;
}

const PageHeading = ({title, text, className}: PageHeadingProps) => {
  return (
    <motion.div 
      className={cn("flex flex-col gap-[14px] mt-[50px] xl:ml-20", className)}
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }} 
    >
      <h1 className="text-[32px] font-bold text-neutralWhite max-sm:text-xl">{title}</h1>
      <span className="text-neutralColor font-medium text-[20px]">{text}</span>
    </motion.div>
  )
}

export default PageHeading