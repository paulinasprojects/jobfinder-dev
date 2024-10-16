"use client";

import { useRouter } from "next/navigation";
import { profileCover, talencovermobile, talentcircle } from "@/lib/images" 
import ImageComponent from "@/components/image-component"
import { ArrowLeft } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import PersonalInformationForm from "@/components/personal-information-form";

  const AccountSettingsPage = () => {
    const router = useRouter();

  return (
    <div>
      <div className="flex items-center gap-[22px] ml-20 mt-[42px] max-sm:ml-[24px]">
        <ArrowLeft className="cursor-pointer" onClick={() => router.push('/')}/>
        <h1 className="text-3xl font-bold text-white">Account Settings</h1>
      </div>
      <div className='ml-20 mt-10 max-sm:ml-0'>
        <ImageComponent
          coverImage={profileCover}
          mobileCoverImage={talencovermobile}
          profileImage={talentcircle}
          className='ml-10 -mt-5 max-sm:ml-16'
        />
      </div>
      <div className='flex xl:justify-between items-center lg:justify-normal lg:gap-10 xl:gap-0'>
        <div className='flex flex-col ml-[135px] mt-7 gap-2 max-sm:ml-[24px]'>
          <span className='text-3xl text-white font-bold max-sm:text-xl'>Thomas L. Fletcher</span>
          <span className='text-neutralColor text-lg'>UX Researcher</span>
          <span className='text-neutralColor text-sm'>Washington, United States • 765 Connections</span>
        </div>
          <div className='flex gap-[18px] mb-12 max-sm:hidden lg:mr-24'>
            <button className='text-neutralColor bg-[#F1F1F5] px-5 py-2 rounded-[10px] text-[15px] font-semibold'>Cancel</button>
            <button className='text-white bg-greenButtonColor px-6 py-2 rounded-[10px] text-[15px] font-semibold'>Save</button>
          </div>
      </div>
      <div className="mt-10 mb-8 flex items-center justify-center">
        <Separator className="bg-[#21212B] w-[1170px] max-sm:w-[327px]"/>
      </div>
      <div>
        <PersonalInformationForm/>
      </div>
    </div>
  )
}

export default AccountSettingsPage