import { CalendarRange } from "lucide-react";
import { googlemeet } from "@/lib/images";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: string | StaticImageData;
  name: string;
  location: string;
  date: string;
  time: string;
}

const InterviewingSingleCard = ({image, name, location, date, time}: Props) => {
  return (
    <div className="bg-cardColorTwo rounded-[10px] mt-2.5 p-1">
      <div className="flex items-center gap-2.5 mx-[14px] mt-[14px]">
        <Image
          src={image}
          alt="image"
        />
        <div className="flex flex-col gap-1">
          <span className="text-white text-sm font-semibold">{name}</span>
          <span className="text-neutralColor text-sm font-normal">{location}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 ml-[14px] mt-[14px] mb-[14px]">
        <CalendarRange className="text-neutralColor" width={17} height={17}/>
        <span className="text-[#F1F1F5] text-[12px] font-medium">{date}</span>
        <span className="text-[#D8D8D8]">•</span>
        <span className="text-neutralColor text-[12px] font-normal">{time}</span>
      </div>
      <div className="flex gap-1.5 items-center ml-[14px] mb-[14px]">
        <Image
          src={googlemeet}
          alt="google meet icon"
        />
        <span className="text-[12px] text-neutralColor font-normal">Google Meet</span>
      </div>
    </div>
  )
}

export default InterviewingSingleCard