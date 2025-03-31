'use client';

import { motion } from 'framer-motion';
import SalaryRangeCard from './salary-range-card'
import ClosedChecboxMenu from './closed-checkbox-menu'
import SkillsCheckboxCard from './skills-checkbox-card'
import CountriesSearch from './countries-search'

const TalentLeftContainer = () => {
  return (
    <motion.div 
      className='flex flex-col gap-7'
      initial={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <SalaryRangeCard
        title='Salary Range'
      />
      <SkillsCheckboxCard/>
      <CountriesSearch/>
      <ClosedChecboxMenu
        title='Language'
      />
      <ClosedChecboxMenu
        title='Facility'
      />
    </motion.div>
  )
}

export default TalentLeftContainer