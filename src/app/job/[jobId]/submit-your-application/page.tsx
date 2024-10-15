"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { jobdetails, jobdetailsimage, mobileCover } from "@/lib/images";
import { Separator } from "@/components/ui/separator";
import ApplicationForm from "@/components/application-form";
import ImageComponent from "@/components/image-component";

const SubmitYourApplicationPage = () => {
  const router = useRouter();


  return (
    <div>
      {/* The big margin here is because if I try to center the container with the button inside 
      the button goes in the center of the screen */}
      <div className="xl:ml-[330px] mt-[51px] lg:ml-32">
        <button className="max-sm:hidden md:flex p-2.5 bg-cardColorTwo  items-center gap-1.5 rounded-[10px] text-neutralColor text-xxs font-medium" onClick={() => router.push("/job/1")}>
          <ChevronLeft width={18} height={18}/>
          Back
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <ImageComponent
            coverImage={jobdetailsimage}
            mobileCoverImage={mobileCover}
            profileImage={jobdetails}
            className='ml-10 -mt-5 max-sm:ml-16'
          />
          <div className="flex flex-col ml-10 mt-7 gap-3">
            <span className="text-white text-3xl font-bold">React Developer</span>
            <span className="text-neutralColor text-lg">UIHUT Technologies LLC • Sylhet, BD • 3 days ago</span>
          </div>
          <div className="mt-5 ml-10 mb-7">
            <Separator className="bg-[#21212B]"/>
          </div>
          <div className="ml-10">
            <span className="text-neutralWhite200 text-lg font-bold">Submit Your Application</span>
          </div>
          <div className="mt-5 ml-10 mb-7">
            <Separator className="bg-[#21212B]"/>
          </div>
        </div>
        <div>
          <ApplicationForm/>
        </div>
      </div>
    </div>
  )
}

export default SubmitYourApplicationPage