import { SkillsCheckbox } from "@/data/data";
import { Checkbox } from './ui/checkbox'
import { ChevronUp, Search } from 'lucide-react'

const SkillsCheckboxCard = () => {
  return (
    <div>
    <div className='flex items-center justify-between'>
      <span className='text-white text-lg font-semibold'>Skills</span>
      <ChevronUp color='#92929d' width={20} height={20} className='cur'/>
    </div>
      <div className="relative mt-[26px]">
        <input type="text" className="w-[248px] h-[32px] rounded-[10px] bg-cardColor text-sm text-neutralColor pl-7 font-medium" placeholder="Search skills" />
        <Search className="absolute top-2 left-2 text-neutralColor" width={15} height={15}/>
      </div>
      {SkillsCheckbox.map((data) => (
      <div className='flex flex-col mt-5 gap-3.5' key={data.skill}>
        <div className='flex items-center gap-3.5'>
          <Checkbox id={data.skill} className='checked:bg-greenButtonColor text-white'/>
          <label htmlFor={data.skill} className='text-white text-sm'>{data.skill}</label>
          <div className='ml-auto'>
          <span className='text-white text-sm'>{data.checkboxPeople}</span>
          </div>
        </div>
      </div>
      ))}
  </div>
  )
}

export default SkillsCheckboxCard