import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronUp, Search } from 'lucide-react'

const CountriesSearch = () => {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="test">
      <AccordionItem value="test" className="border-none">
      <div className='flex items-center justify-between'>
        <span className='text-white text-lg font-semibold'>Countries</span>
        <AccordionTrigger>
          <ChevronUp color='#92929d' width={20} height={20} className='cursor-pointer'/>
        </AccordionTrigger>
      </div>
      <AccordionContent>
      <div className="relative mt-[26px]">
        <input type="text" className="w-[248px] h-[32px] rounded-[10px] bg-cardColor text-sm text-neutralColor pl-7 font-medium" placeholder="Search  country" />
        <Search className="absolute top-2 left-2 text-neutralColor" width={15} height={15}/>
      </div>
      </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default CountriesSearch