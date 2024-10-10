import { EllipsisVertical, Paperclip } from "lucide-react";
import Image from "next/image";


interface Props {
  image: string;
  title: string;
  company: string;
  location: string;
  type: string;
  whenApplied: string;
  filesUploaded: string;
}

const AppliedJobCard = ({image, title, company, location, type, whenApplied, filesUploaded}: Props) => {
  return (
    <div className="bg-cardColorTwo rounded-[10px]  mt-2.5 p-0.5">
      <div className="flex items-center justify-between mx-[14px]">
        <Image
          src={image}
          alt={company}
          width={48}
          height={48}
          className="mt-[14px]"
        />
        <EllipsisVertical className="text-neutralColor cursor-pointer"/>
      </div>
      <div>
        <div className="flex flex-col ml-[14px] mt-[13px] gap-1">
          <span className="text-white text-sm font-semibold">{title}</span>
          <div className="flex gap-[9px]">
            <span className="text-neutralColor text-sm font-medium">{company}</span>
            <span className="text-neutralColor">•</span>
            <span className="text-neutral3Color text-sm font-normal">{location}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-[17px] ml-2 mb-2 mr-2">
        <div className="text-white flex items-center gap-[8px]">
          <span className="py-1.5 px-2.5 bg-[#C7F4C2] text-black text-[12px] font-medium rounded-[5px]">{type}</span>
          <span className="text-neutralColor text-[14px] font-medium">{whenApplied}</span>
        </div>
        <div className="flex items-center gap-0.5">
          <Paperclip className="text-neutralColor" width={14} height={14}/>
          <span className="text-neutralColor text-sm">{filesUploaded}</span>
        </div>
      </div>
    </div>
  )
}

export default AppliedJobCard