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
      <div className="flex items-center gap-[22px] xl:ml-20 mt-[42px] max-sm:ml-[26px] lg:ml-10">
        <ArrowLeft className="cursor-pointer" onClick={() => router.push('/')}/>
        <h1 className="text-3xl font-bold text-white">Account Settings</h1>
      </div>
      <div className='xl:ml-20 mt-10 max-sm:ml-[26px] lg:ml-0'>
        <ImageComponent
          coverImage={profileCover}
          mobileCoverImage={talencovermobile}
          profileImage={talentcircle}
          className='ml-10 -mt-5 max-sm:ml-16'
          className2="lg:w-[850px] xl:w-[1280px]"
        />
      </div>
      <div className='flex xl:justify-between items-center lg:justify-normal lg:gap-10 xl:gap-0'>
        <div className='flex flex-col xl:ml-[135px] mt-7 gap-2 max-sm:ml-[40px] lg:ml-[26px]'>
          <span className='text-3xl text-white font-bold max-sm:text-xl'>Thomas L. Fletcher</span>
          <span className='text-neutralColor text-lg'>UX Researcher</span>
          <span className='text-neutralColor text-sm'>Washington, United States • 765 Connections</span>
        </div>
          <div className='xl:flex gap-[18px] mb-12 max-sm:hidden lg:mr-24 lg:hidden'>
            <button className='text-neutralColor bg-[#F1F1F5] px-5 py-2 rounded-[10px] text-[15px] font-semibold'>Cancel</button>
            <button className='text-white bg-greenButtonColor px-6 py-2 rounded-[10px] text-[15px] font-semibold'>Save</button>
          </div>
      </div>
      <div className="mt-10 mb-8 flex items-center justify-center">
        <Separator className="bg-[#21212B] xl:w-[1170px] lg:w-[840px] max-sm:w-[327px]"/>
      </div>
      <div className="mb-10">
        <PersonalInformationForm/>
      </div>
    </div>
  )
}

export default AccountSettingsPage