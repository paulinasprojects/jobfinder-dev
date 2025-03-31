"use client";

import { motion } from 'framer-motion'
import SimilarJobCard from './similar-job-card'

const SimilarJobsCard = () => {
  return (
    <>
      <motion.div 
        className='mb-6 max-sm:text-center lg:text-center xl:text-start md:mt-5 lg:mt-0 md:ml-10 lg:ml-0'
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} 
      >
        <span className='text-white text-lg font-bold'>Similar Jobs</span>
      </motion.div>
        <SimilarJobCard/>
    </>
  )
}

export default SimilarJobsCard