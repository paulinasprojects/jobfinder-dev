import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, MapPin, Briefcase } from "lucide-react";
import { Separator } from "./ui/separator";

const Search = () => {
  return (
    <div className="flex lg:flex-row  ml-20 mt-7 max-sm:flex-col max-sm:ml-15">
      <div className="relative">
          <SearchIcon color="#92929d" className="absolute top-7 left-2.5"/>
         <Input className="xl:w-[383px] lg:h-[80px] max-sm:w-[295px] max-sm:h-[52px] bg-[#1c1c24] rounded-tl-[20px] border-none text-neutralColor p-10 text-[14px] font-bold " placeholder="Job Title, Company or Keywords"/>
      </div>
      <div className="relative">
        <MapPin color="#92929d" className="absolute top-7 left-1 max-sm:left-2"/>
      <Input className="xl:w-[360px] lg:h-[80px] max-sm:w-[295px] max-sm:h-[52px] bg-[#1c1c24]  border-none text-neutralColor p-10 text-[14px] font-bold" placeholder="Select Location"/>
      </div>
      <div className="relative">
        <Briefcase color="#92929d" className="absolute top-7 left-1 max-sm:left-2"/>
         <Input className="lg:w-[223px] lg:h-[80px] max-sm:w-[295px] max-sm:h-[52px] bg-[#1c1c24]  border-none  text-neutralColor p-10 text-[14px] font-bold " placeholder="Job Type"/>
      </div>
      <div className="p-4 bg-[#1c1c24] rounded-tr-[20px] max-sm:w-[295px] max-sm:h-[78px] rounded-br-[20px] flex items-center justify-center max-sm:rounded-none">
        <Button size="lg" className="bg-greenButtonColor text-white max-sm:w-[295px] max-sm:h-[48px]">Find Jobs</Button>
      </div>
    </div>
  )
}

export default Search