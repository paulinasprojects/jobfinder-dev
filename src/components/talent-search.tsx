import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, MapPin, } from "lucide-react";

const TalentSearch = () => {
  return (
    <div className="flex lg:flex-row  ml-20 mt-7 max-sm:flex-col max-sm:ml-15">
    <div className="relative">
        <SearchIcon className="absolute top-7 text-neutralColor left-3"/>
       <Input className="xl:w-[512px] lg:h-[80px] max-sm:w-[295px] max-sm:h-[52px] bg-cardColor rounded-tl-[20px] border-none text-neutralColor p-10 text-sm font-bold" placeholder="Search a Talent"/>
    </div>
    <div className="relative">
      <MapPin className="absolute top-7 text-neutralColor left-2.5 max-sm:left-2"/>
    <Input className="xl:w-[360px] lg:h-[80px] max-sm:w-[295px] max-sm:h-[52px] bg-cardColor  border-none text-neutralColor p-10 text-sm font-bold" placeholder="Select Location"/>
    </div>
    <div className="p-4 bg-cardColor rounded-tr-[20px] max-sm:w-[295px] max-sm:h-[78px] rounded-br-[20px] flex items-center justify-center max-sm:rounded-none">
      <Button size="lg" className="bg-greenButtonColor text-white max-sm:w-[295px] max-sm:h-[48px]">Find Talent</Button>
    </div>
  </div>
  )
}

export default TalentSearch