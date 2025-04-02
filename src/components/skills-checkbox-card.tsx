import { SkillsCheckbox } from "@/data/data";
import { ChevronUp, Search } from 'lucide-react'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const SkillsCheckboxCard = () => {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="test">
      <AccordionItem value="test" className="border-none">
      <div className='flex items-center justify-between'>
        <span className='text-white text-lg font-semibold'>Skills</span>
        <AccordionTrigger>
          <ChevronUp color='#92929d' width={20} height={20} className='cursor-pointer'/>
        </AccordionTrigger>
      </div>
      <AccordionContent>
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
      </AccordionContent>
      </AccordionItem>
  </Accordion>
  )
}

export default SkillsCheckboxCard