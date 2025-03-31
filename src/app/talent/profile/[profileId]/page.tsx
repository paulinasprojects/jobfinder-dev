"use client";

import { motion } from 'framer-motion';
import RecommendedTalents from '@/components/recommended-talents';
import TalentInformation from '@/components/talent-information';

const ProfileIdPage = () => {
  return (
    <div className='mb-10'>
      <div className='flex gap-10 xl:flex-row md:flex-col lg:flex-col max-sm:flex-col'>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <TalentInformation/>
        </motion.div>
        {/* Right */}
        <div 
          className='lg:mr-10'
        >
          <RecommendedTalents/>
        </div>
      </div>
    </div>
  )
}

export default ProfileIdPage