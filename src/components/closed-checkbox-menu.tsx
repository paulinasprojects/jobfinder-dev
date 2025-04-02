import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ClosedCheckboxMenuProps {
  title: string;
}

const ClosedChecboxMenu = ({title}: ClosedCheckboxMenuProps) => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='test' className='border-none'>
      <div className='flex items-center justify-between'>
        <span className='text-white text-lg font-semibold'>{title}</span>
        <AccordionTrigger>
          <ChevronDown color='#92929d' width={20} height={20} className='cursor-pointer'/>
        </AccordionTrigger>
      </div>
      <AccordionContent>
        <span className='text-white'>This accordion is empty!</span>
      </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default ClosedChecboxMenu