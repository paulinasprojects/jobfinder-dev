import React from 'react'
import { Checkbox } from './ui/checkbox'
import { ChevronUp } from 'lucide-react'
import { experienceLevelData } from '@/data/data'

interface CheckboxCardProps {
  title: string;
}

const ExperienceLevelChecbox = ({title}: CheckboxCardProps) => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <span className='text-white text-lg font-semibold'>{title}</span>
        <ChevronUp color='#92929d' width={20} height={20} className='cursor-pointer'/>
      </div>
        {experienceLevelData.map((data) => (
        <div className='flex flex-col mt-5 gap-3.5' key={data.seniorityLevel}>
          <div className='flex items-center gap-3.5'>
            <Checkbox id={data.checkboxId} className='checked:bg-greenButtonColor text-white'/>
            <label htmlFor={data.checkboxId} className='text-white text-sm'>{data.seniorityLevel}</label>
            <div className='ml-auto'>
            <span className='text-white text-sm'>{data.checkboxJobs}</span>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}

export default ExperienceLevelChecbox