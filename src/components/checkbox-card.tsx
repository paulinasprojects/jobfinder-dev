import { Checkbox } from './ui/checkbox'
import { ChevronUp } from 'lucide-react'
import { typeOfEmploymentCheckboxData } from '@/data/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface CheckboxCardProps {
  title: string;
}

const ChecboxCard = ({title}: CheckboxCardProps) => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='employment'>
      <AccordionItem value='employment' className='border-none'>
        <div className='mt-5'>
          <div className='flex items-center justify-between w-full'>
            <span className='text-white text-lg font-semibold'>{title}</span>
            <AccordionTrigger>
              <ChevronUp color='#92929d' width={20} height={20} className='cursor-pointer'/>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            {typeOfEmploymentCheckboxData.map((data) => (
            <div className='flex flex-col mt-5 gap-3.5' key={data.checkboxId}>
              <div className='flex items-center gap-3.5'>
                <Checkbox id={data.checkboxId} className='checked:bg-greenButtonColor text-white'/>
                <label htmlFor={data.checkboxId} className='text-white text-sm'>{data.checkboxName}</label>
                <div className='ml-auto'>
                <span className='text-white text-sm'>{data.checkboxJobs}</span>
                </div>
              </div>
            </div>
            ))}
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default ChecboxCard