"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Bookmark, ChevronLeft, EllipsisVertical, Plus } from 'lucide-react'
import { jobdetailsimage, jobdetails, mobileCover, uihut } from '@/lib/images'
import { responsibilites, qualifications  } from '@/data/data';
import { Card, CardContent } from '@/components/ui/card';
import JobSearchApplyNowButton from '@/components/job-search-apply-now-button';
import JobSearchMessageButton from '@/components/job-search-message-button';
import GreenCircle from '@/components/ui/green-circle';

const JobDetailsCard = () => {
  const router = useRouter();

  return (
    <div className=''>
      <div>
        <button className='max-sm:hidden md:flex p-2.5 bg-cardColorTwo  items-center gap-1.5 rounded-[10px] text-neutralColor text-xxs font-medium' onClick={() => router.push("/job-search")}>
          <ChevronLeft width={18} height={18}/>
          Back
        </button>
      </div>
      <div className='mt-5'>
        <Card className='w-[860px] h-[1560px] max-sm:w-[327px] max-sm:h-[2314px] bg-cardColor border-cardColor rounded-[10px]'>
          <div className=''>
            <Image
              src={jobdetailsimage}
              alt='job details image'
              className='ml-5 mt-5 hidden lg:block'
            />
            <Image
              src={mobileCover}
              alt='mobile cover'
              className='block lg:hidden max-sm:ml-3.5 max-sm:mt-5'
            />
            <Image
              src={jobdetails}
              alt='job'
              className='ml-10 -mt-5'
            />
          </div>
          <CardContent>
            <div className='flex justify-between max-sm:flex-col max-sm:gap-4'>
              <div className='flex flex-col mt-8 ml-5 gap-1.5 max-sm:ml-0'>
                <span className='flex gap-[25px] items-center text-2xl font-bold text-white'>React Developer <Bookmark className='text-neutralColor'/></span>
                <span className='text-neutral3Color text-md'>UIHUT Technologies LLC • Sylhet, BD • 3 days ago</span>
              </div>
              <div className='flex items-center gap-3.5 max-sm:ml-0'>
                  <JobSearchApplyNowButton className='w-[119px] h-[44px]' onClick={() => router.push('/job/1/submit-your-application')}/>
                  <JobSearchMessageButton className='border border-white w-[99px] h-[44px]'/>
                  <EllipsisVertical className='cursor-pointer text-neutralColor'/>
              </div>
            </div>
            <div className='flex max-sm:grid max-sm:grid-cols-160 max-sm:gap-[30px] items-center justify-between px-3 py-4 mt-9 ml-10 bg-cardColorTwo  rounded-[20px] max-sm:ml-0'>
              <div className='text-white flex flex-col gap-1.5'>
                <span className='text-sm text-neutralColor max-sm:text-xxs'>Experience</span>
                <span className='text-md font-semibold max-sm:text-sm'>Minumum 1 Year</span>
              </div>
              <div className='flex flex-col text-white gap-1.5'>
                <span className='text-sm text-neutralColor max-sm:text-xxs'>Work Level</span>
                <span className='text-md font-semibold max-sm:text-sm'>Senior Level</span>
              </div>
              <div className='flex flex-col text-white gap-1.5'>
                <span className='text-sm text-neutralColor max-sm:text-xxs'>Employee Type</span>
                <span className='text-md font-semibold max-sm:text-sm'>Full Time Job</span>
              </div>
              <div className='flex flex-col text-white gap-1.5'>
                <span className='text-sm text-neutralColor max-sm:text-xxs'>Offer Salary</span>
                <span className='text-md font-semibold max-sm:text-sm'>$2150,0 / M</span>
              </div>
            </div>
            <div className='flex flex-col gap-2.5 mt-7 ml-10 max-sm:ml-0'>
              <span className='text-white text-lg font-bold max-sm:text-md'>About The Job</span>
              <span className='text-neutralWhite200 font-normal text-md max-sm:text-sm'>
                Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us. In this role, you would use various tech stacks, including Laravel, Node JS (Adonis JS), Vue JS, React JS, Nuxt JS, Redis, MySQL, MongoDB, and CSS. You will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.
              </span>
            </div>
            <div className='mt-7 ml-10 flex flex-col gap-3 max-sm:ml-0'>
              <span className='text-lg font-bold text-white max-sm:text-md'>Responsibilities</span>
              {responsibilites.map((data) => (
              <div className='flex items-center gap-2.5' key={data.id}>
                <GreenCircle/>
                <span className='text-neutralWhite200 text-md font-normal'>{data.responsibility}</span>
              </div>
              ))}
              {/*  */}
              <div className='mt-7 flex flex-col gap-3'>
                <span className='text-lg font-bold text-white'>Qualifications and Skill Sets</span>
                {qualifications.map((item) => (
                <div className='flex items-center gap-2.5' key={item.id}>
                  <GreenCircle/>
                  <span className='text-neutralWhite200 text-md font-normal'>{item.qualification}</span>
               </div>
                ))}
              </div>
            </div>
            <div className='mt-[60px] ml-10 flex flex-col gap-3 max-sm:ml-0'>
              <span className='text-lg font-bold text-white'>About The Company</span>
              <div className='flex items-center justify-between gap-5 cursor-pointer'  onClick={() => router.push('/company/1')}>
                <Image
                  src={uihut}
                  alt='company-logo'
                />
                <div className='flex flex-col mr-auto'>
                  <span className='text-white'>UI HUT</span>
                  <span className='text-neutral3Color'>203,765 Followers</span>
                </div>
                <button className='border border-greenButtonColor rounded-[10px] text-greenButtonColor flex items-center justify-center gap-1.5 p-1.5 text-xxs'><Plus width={18} height={18} className='cursor-pointer'/>Follow</button>
              </div>
              <div className='mt-7'>
                <span className='text-neutralWhite200'>UIHUT is a design and coding resources platform for designers, developers and entrepreneurs. We&apos;re building a digital marketplace to simplify the creation of websites, apps and software on any device. UIHUT is based in New York City and is privately funded by some of the industry&apos;s leading investors.</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default JobDetailsCard;