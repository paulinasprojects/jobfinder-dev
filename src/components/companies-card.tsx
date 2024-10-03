import { appleBlack, gitlab, mailchimp, star } from "@/lib/images";
import { Card, CardContent } from "@/components/ui/card";
import { StarHalf, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

const CompaniesCard = () => {
  return (
    <div className="">
      <Card className="bg-[#1c1c24] border-[#1c1c24]">
        <CardContent>
          <div className="flex mt-5 gap-3.5">
            <Image
              src={appleBlack}
              alt="apple"
            />
            <div className="flex flex-col gap-1">
              <span className="text-white">Apple Inc</span>
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
              <MapPin width={20} height={20}/>
              New York, USA
            </span>
            <span className="flex text-neutralColor text-sm gap-2.5 items-center">
              <Briefcase width={20} height={20}/>
              05 Job Vacancy
            </span>
          </div>
        </CardContent>
        {/* <CardContent>
          <div className="flex mt-5 gap-3.5">
            <Image
              src={appleBlack}
              alt="apple"
            />
            <div className="flex flex-col gap-1">
              <span className="text-white">Apple Inc</span>
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
              <MapPin width={20} height={20}/>
              New York, USA
            </span>
            <span className="flex text-neutralColor text-sm gap-2.5 items-center">
              <Briefcase width={20} height={20}/>
              05 Job Vacancy
            </span>
          </div>
        </CardContent> */}
        {/* <CardContent>
          <div className="flex mt-5 gap-3.5">
            <Image
              src={appleBlack}
              alt="apple"
            />
            <div className="flex flex-col gap-1">
              <span className="text-white">Apple Inc</span>
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
              <MapPin width={20} height={20}/>
              New York, USA
            </span>
            <span className="flex text-neutralColor text-sm gap-2.5 items-center">
              <Briefcase width={20} height={20}/>
              05 Job Vacancy
            </span>
          </div>
        </CardContent> */}
      </Card>
    </div>
  )
}

export default CompaniesCard