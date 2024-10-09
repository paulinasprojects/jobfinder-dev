import { Card, CardContent } from "@/components/ui/card";
import { recommendedTalents } from "@/data/data";
import { Bookmark } from "lucide-react";
import Image from "next/image";

const RecommendedTalentCard = () => {
  return (
    <div className="xl:flex xl:flex-col max-sm:flex-col max-sm:flex lg:ml-10 xl:ml-0 lg:grid lg:grid-cols-2 gap-[30px]">
      {recommendedTalents.map((talent) => (
        <div key={talent.name} className="">
          <Card className="w-[400px] h-[220px] bg-cardColor border-cardColor">
            <CardContent>
              <div className="flex items-center gap-[15px] mt-5">
                <Image
                  src={talent.image}
                  alt={talent.name}
                />
                <div className="flex flex-col">
                  <span className="text-white text-lg font-semibold">{talent.name}</span>
                  <span className="text-neutralColor text-sm">{talent.desiredPosition}</span>
                </div>
                <div className="ml-auto">
                  <Bookmark className="cursor-pointer text-neutral3Color"/>
                </div>
              </div>
              <div className="bg-cardColorTwo w-[320px] h-[50px] mt-[24px] ml-5 rounded-[10px]">
                <div className="flex items-center gap-[27px]">
                  <div className="flex flex-col items-start ml-3 mt-[4px]">
                    <span className="text-xxs text-neutralColor">Exp</span>
                    <span className="text-white text-sm">{talent.yearsExperience}</span>
                  </div>
                  <div className="flex flex-col items-start ml-3 mt-[4px]">
                    <span className="text-xxs text-neutralColor">Level</span>
                    <span className="text-white text-sm">{talent.level}</span>
                  </div>
                  <div className="flex flex-col items-start ml-3 mt-[4px] ">
                    <span className="text-xxs text-neutralColor">Type</span>
                    <span className="text-white text-sm">{talent.type}</span>
                  </div>
                  <div className="flex flex-col items-start ml-3 mt-[4px] ">
                    <span className="text-xxs text-neutralColor">Salary</span>
                    <span className="text-white text-sm">${talent.salary}</span>
                  </div>
                  </div>
              </div>
                  <div className="mt-[24px]">
                    <button className="w-[360px] h-[40px] rounded-[10px] text-greenButtonColor bg-[#1b2228]">Connect</button>
                  </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default RecommendedTalentCard