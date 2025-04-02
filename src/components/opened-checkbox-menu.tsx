import { ChevronUp, Search, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
  title?: string;
  isCategory?: boolean;
  placeholder?: string;
}

const OpenedCheckMenu = ({ isCategory, title, placeholder}: Props) => {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="open">
      <AccordionItem value="open" className="border-none">
       <div className='flex items-center justify-between'>
      <span className='text-white text-lg font-semibold'>{title}</span>
      <AccordionTrigger>
        <ChevronUp color='#92929d' width={20} height={20} className='cursor-pointer'/>
      </AccordionTrigger>
    </div>
    <AccordionContent>
      <div className="relative mt-[26px]">
        <input type="text" className="w-[248px] h-[32px] rounded-[10px] bg-cardColor text-sm text-neutralColor pl-7 font-medium" placeholder={placeholder} />
        <Search className="absolute top-2 left-2 text-neutralColor" width={15} height={15}/>
      </div>
      {isCategory && (
        <div className="mt-[22px] flex gap-2.5">
          <span className="bg-cardColorTwo text-neutralColor text-xxs p-1  rounded-[6px] flex items-center gap-1.5">
            Apple
            <X className="text-neutralColor w-[14px] h-[14px]"/>
          </span>
          <span className="bg-cardColorTwo text-neutralColor text-xxs p-1  rounded-[6px] flex items-center gap-1.5">
            Airbnb
            <X className="text-neutralColor w-[14px] h-[14px]"/>
          </span>
          <span className="bg-cardColorTwo text-neutralColor text-xxs p-1  rounded-[6px] flex items-center gap-1.5">
            Google
            <X className="text-neutralColor w-[14px] h-[14px]"/>
          </span>
        </div>
      )}
    </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default OpenedCheckMenu