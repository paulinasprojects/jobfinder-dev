import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase } from "lucide-react";
import Image from "next/image";


interface CompaniesCardProps {
  image: string;
  star: string;
  title: string;
  location: string;
  jobVacancy: string;
}

const CompaniesCard = ({ image,  star, title, location, jobVacancy}: CompaniesCardProps) => {
  return (
    <div className="">
      <Card className="bg-cardColor border-cardColor">
        <CardContent>
          <div className="flex mt-5 gap-3.5">
            <Image
              src={image}
              alt="apple"
            />
            <div className="flex flex-col gap-1">
              <span className="text-white">{title}</span>
                <div className="flex items-center gap-1.5">
                    <Image
                    src={star}
                    alt="star"
                  />
                  <span className="text-neutralColor text-sm">4.8k</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <span className="flex text-neutralColor text-sm gap-2.5 items-center mb-2">
              <MapPin width={16} height={16}/>
             {location}
            </span>
            <span className="flex text-neutralColor text-sm gap-2.5 items-center">
              <Briefcase width={16} height={16}/>
             {jobVacancy}
            </span>
          </div>
            <div className="flex items-center justify-center mt-6">
              <button className="text-neutralColor w-[216px] h-[44px] rounded-[10px] text-sm bg-[#21212b]">See all</button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CompaniesCard