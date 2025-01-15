import { similarCompanies } from "@/data/data";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Plus } from "lucide-react";

const SimilarCompanyCard = () => {
  return (
    <>
      {similarCompanies.map((company) => (
      <div className="mt-5" key={company.company}>
        <Card className="max-sm:w-[400px] md:w-[350px] lg:w-[400px] h-[90px] bg-cardColor border-cardColor">
          <CardContent>
            <div className="flex items-center mt-5 gap-[18px]">
              <Image
                src={company.image}
                alt="company image"
              />
              <div className="flex flex-col gap-1.5">
                <span className="text-white text-lg font-semibold">{company.company}</span>
                <span className="text-neutralColor text-sm font-medium">{company.companyName}</span>
              </div>
              <div className="ml-auto">
                <button className="text-greenButtonColor border border-greenButtonColor p-2 pr-4 rounded-[10px] flex items-center gap-1.5 hover:bg-greenButtonColor hover:text-white transition-colors">
                <Plus width={18} height={18}/>Follow
              </button>
            </div>
            </div>
          </CardContent>
        </Card>
      </div>
      ))}
    </>
  )
}

export default SimilarCompanyCard