import { airbnb } from "@/lib/images";
import { EllipsisVertical } from "lucide-react"
import Image from "next/image"

interface Props {
  image: string;
  role: string;
  company: string;
  location: string;
  contractDuration: string;
  offeredSalary: string;
}


const OfferReceivedCard = ({  image, role, company, location, contractDuration, offeredSalary}: Props) => {
  return (
    <div className="bg-cardColorTwo rounded-[10px] mt-2.5 p-0.5">
      <div className="flex gap-[5px] m-[14px]">
        <Image
          src={image}
          alt="company"
        />
        <div className="flex flex-col gap-1">
          <span className="text-white text-sm font-semibold">{company}</span>
          <span className="text-neutralColor text-xxs font-normal">{location}</span>
        </div>
        <EllipsisVertical className="text-neutralColor ml-auto cursor-pointer" width={16} height={16}/>
      </div>
      <div className="flex gap-[17px] ml-[14px] mb-4">
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-neutralColor font-normal">Contract Duration</span>
          <span className="text-[#F1F1F5] text-xxs font-semibold">{contractDuration}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[12px] text-neutralColor font-normal">Offered Salary</span>
          <span className="text-[#F1F1F5] text-xxs font-semibold">{offeredSalary}/
            <span className="text-neutralColor text-xxs">month</span>
          </span>
        </div>
      </div>
      <div className="ml-[14px] flex flex-col mb-4">
        <span className="text-xxs text-neutralColor font-normal">Job Role</span>
        <span className="text-xxs text-[#F1F1F5] font-semibold">{role}</span>
      </div>
      <div className="flex items-center justify-center gap-6 mb-4">
        <button className="text-white bg-greenButtonColor rounded-[10px] text-xxs font-semibold py-2 px-7 hover:text-greenButtonColor hover:bg-transparent hover:border-[1px] hover:border-greenButtonColor transition-all duration-300">Accept</button>
        <button className="text-neutral3Color border border-[#44444F] bg-transparent rounded-[10px] text-xxs font-semibold py-2 px-7 hover:bg-red-500 hover:text-neutralWhite transition-colors duration-300">Reject</button>
      </div>
    </div>
  )
}

export default OfferReceivedCard