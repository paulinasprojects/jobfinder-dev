"use client";

import { motion } from 'framer-motion'
import { Briefcase, Users, FileText, TrendingUp, TrendingDown } from 'lucide-react'
import JobCard from './common/jobs-card'
import { ListingPerformanceChart } from './listing-performance-chart'
import { containerVariants, itemVariants } from '@/lib/constants'

const CardChart = () => {
  return (
    <motion.div
      initial="hidden"
    >
      <div className='flex xl:flex-row gap-10 mt-10 lg:ml-20 md:flex-col md:ml-10 max-sm:flex-col max-sm:ml-[24px]'>
        {/* Left */}
        <motion.div 
          className='grid xl:grid-cols-20 lg:grid-cols-2 md:grid-cols-2 md:gap-y-10 max-sm:gap-y-10 gap-x-10  max-sm:grid-cols-19'
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <JobCard
            className='bg-[#C7F4C2] outline-none border-none'
            icon={<Briefcase color='#C7F4C2'/>}
            title='2.345'
            description='Jobs views'
            percent='+15%'
            arrow={<TrendingUp width={20} height={20} color='#0BAB7C'/>}
          />
          <JobCard
            className='bg-purpleCard outline-none border-none'
            icon={<Users color='#D7D0FF'/>}
            title='4.345'
            description='Jobs Applications'
            percent='+4%'
            arrow={<TrendingUp width={20} height={20} color='#0BAB7C'/>}
          />
          <JobCard
            className='bg-yellowCard outline-none border-none'
            icon={<FileText color='#FDDD8C'/>}
            title='3.345'
            description='Posted Jobs'
            percent='-10%'
            arrow={<TrendingDown color='#FC5A5A' className='-rotate-[250deg]' height={20} width={20}/>}
          />
          <JobCard
            className='bg-pinkCard outline-none border-none'
            icon={<FileText color='#FFBBD7'/>}
            title='50'
            description='Unread Message'
            percent='-10%'
            arrow={<TrendingDown color='#FC5A5A' className='-rotate-[250deg]' height={20} width={20}/>}
          />
        </motion.div>
        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
        >
          <ListingPerformanceChart/>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CardChart