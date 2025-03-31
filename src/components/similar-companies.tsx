"use client";

import { motion } from 'framer-motion'
import SimilarCompanyCard from './similar-company-card'

const SimilarCompanies = () => {
  return (
    <>
       <motion.div 
        className="mt-[50px] max-sm:ml-6 xl:ml-0 md:ml-5 lg:ml-10"
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <span className="text-[22px] text-white font-bold">Similar Companies</span>
      </motion.div>
       <SimilarCompanyCard/>
    </>
  )
}

export default SimilarCompanies