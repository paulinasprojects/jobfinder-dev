import { X } from "lucide-react";
import Image from "next/image";

interface Props {
  image: string;
  title: string;
  company: string;
  location: string;
}

const SavedJobCard = ({ image, title, company, location }: Props) => {
  return (
    <div className="bg-cardColorTwo rounded-[10px] mt-2.5 p-1">
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-row justify-between ml-[14px] mr-[14px] mt-[14px]">
        <Image
          src={image}
          alt="company logo"
          className=""
        />
        <X className="text-neutralColor cursor-pointer" width={18} height={18}/>
        </div>
        <div className="ml-[14px]">
          <span className="text-white text-sm font-semibold">{title}</span>
          <div className="flex gap-[9px]">
            <span className="text-neutralColor text-sm font-medium">{company}</span>
            <span className="text-neutral3Color">•</span>
            <span className="text-neutral3Color text-sm font-normal">{location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedJobCard