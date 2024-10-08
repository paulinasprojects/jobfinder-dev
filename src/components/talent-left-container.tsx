import React from 'react'
import SalaryRangeCard from './salary-range-card'
import ClosedChecboxMenu from './closed-checkbox-menu'
import SkillsCheckboxCard from './skills-checkbox-card'
import CountriesSearch from './countries-search'

const TalentLeftContainer = () => {
  return (
    <div className='flex flex-col gap-7'>
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
    </div>
  )
}

export default TalentLeftContainer