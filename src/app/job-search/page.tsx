"use client";

import { motion } from 'framer-motion'
import PageHeading from '@/components/common/page-heading'
import LeftContainer from '@/components/left-container'
import RightContainer from '@/components/right-container'
import Search from '@/components/search'

const JobSearch = () => {
  return (
    <div className='mb-10'>
      <PageHeading
        title="Let's Find Your Dream Job"
        text='Wednesday, 13 July 2024'
        className='max-sm:ml-[26px] lg:ml-[26px] md:ml-[30px]'
      />
      <Search/>
      <div>
        <div className='flex gap-[77px] lg:gap-[50px]'>
          {/* Left */}
          <motion.div 
            className='xl:ml-20 mt-[52px] md:hidden lg:block max-sm:hidden lg:ml-[26px]'
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} 
          >
            <LeftContainer/>
          </motion.div>
          {/* Right */}
          <div>
            <RightContainer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobSearch