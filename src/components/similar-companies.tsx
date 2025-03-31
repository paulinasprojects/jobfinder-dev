"use client";

import { motion } from 'framer-motion'
import SimilarCompanyCard from './similar-company-card'

const SimilarCompanies = () => {
  return (
    <div className=''>
       <motion.div 
        className="mt-[50px] max-sm:ml-6 xl:ml-0 md:ml-5 lg:ml-10"
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} 
      >
        <span className="text-[22px] text-white font-bold">Similar Companies</span>
      </motion.div>
      <div className='xl:flex xl:flex-col lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 md:gap-10 lg:gap-0 lg:ml-10 md:ml-5 md:mr-5 lg:mr-0 xl:ml-0 max-sm:ml-5'>
       <SimilarCompanyCard/>
      </div>
    </div>
  )
}

export default SimilarCompanies