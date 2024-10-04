import { ChevronDown, BookmarkMinus } from 'lucide-react';
import { uihut, microsoft, slack, behance, invision } from '@/lib/images';
import { Card, CardContent } from '@/components/ui/card';
import JobSearchApplyNowButton from './job-search-apply-now-button';
import JobSearchMessageButton from './job-search-message-button';
import Image from 'next/image';

const JobSearchCard = () => {
  return (
    <div className='text-white max-sm:ml-14'>
      <div className='mt-[59px] flex items-center justify-between mb-8'>
        <div className='flex gap-2'>
          <span>Showing</span>
          <span>125 Jobs</span>
        </div>
          <div className='flex gap-2'>
            <span>Sort by</span>
            <span className='flex'>Relevance <ChevronDown/></span>
          </div>
      </div>
      <div className='flex flex-col gap-[22px]'>
        <Card className=' bg-[#1c1c24] border-[#1c1c24] max-sm:w-[327px]'>
          <CardContent>
            <div className='flex mt-5 justify-between'>
              <div className='flex gap-5'>
                <div className='flex items-center justify-center bg-[#21212b] w-[64px] h-[64px] rounded-[10px]'>
                  <Image
                    src={uihut}
                    alt='uihut'
                  />
                </div>
                  <div className='flex flex-col gap-1.5'>
                    <span className='text-white text-lg font-bold max-sm:text-[16px]'>Passionate Programmer</span>
                    <span className='text-neutral3Color text-sm max-sm:text-[13px]'>UIHUT Technologies LLC • Sylhet, BD • 3 days ago</span>
                  </div>
              </div>
              <div>
                <button className='hidden lg:flex items-center justify-center gap-2 text-neutralColor bg-[#21212b] rounded-[10px] w-[101px] h-[34px] text-sm font-semibold'>Save job <BookmarkMinus color='#92929d' width={19} height={19} className=''/></button>
              </div>
            </div>
            <div className='mt-5'>
              <span className='text-white text-sm max-sm:text-[13px]'>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical <br /> challenges and learn and incorporate new technologies into their skillset to join our team and grow with us.</span>
            </div>
            <div className='flex gap-2 mt-5'>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>PHP</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>Laravel</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>CSS</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>React</span>
             </div>
             <div className='flex justify-between items-center mt-8 max-sm:flex-col max-sm:gap-4'>
              <div className='flex gap-8'>
                <span className='text-white text-lg max-sm:text-[16px] max-sm:whitespace-nowrap'>$15k-20k
                  <span className='text-neutral3Color ml-2'>/month</span>
                </span>
                <span className='text-white text-lg max-sm:text-[16px] max-sm:whitespace-nowrap'>54
                  <span className='text-neutral3Color ml-2'>People Applied</span>
                </span>
              </div>
              <div className='flex items-center gap-5'>
                <JobSearchMessageButton/>
                <JobSearchApplyNowButton/>
              </div>
             </div>
          </CardContent>
        </Card>
        <Card className=' bg-[#1c1c24] border-[#1c1c24] max-sm:w-[327px]'>
          <CardContent>
            <div className='flex mt-5 justify-between'>
              <div className='flex gap-5'>
                <div className='flex items-center justify-center bg-[#21212b] w-[64px] h-[64px] rounded-[10px]'>
                  <Image
                    src={uihut}
                    alt='uihut'
                  />
                </div>
                  <div className='flex flex-col gap-1.5'>
                    <span className='text-white text-lg font-bold max-sm:text-[16px]'>Passionate Programmer</span>
                    <span className='text-neutral3Color text-sm max-sm:text-[13px]'>UIHUT Technologies LLC • Sylhet, BD • 3 days ago</span>
                  </div>
              </div>
              <div>
                <button className='hidden lg:flex items-center justify-center gap-2 text-neutralColor bg-[#21212b] rounded-[10px] w-[101px] h-[34px] text-sm font-semibold'>Save job <BookmarkMinus color='#92929d' width={19} height={19} className=''/></button>
              </div>
            </div>
            <div className='mt-5'>
              <span className='text-white text-sm max-sm:text-[13px]'>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical <br /> challenges and learn and incorporate new technologies into their skillset to join our team and grow with us.</span>
            </div>
            <div className='flex gap-2 mt-5'>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>PHP</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>Laravel</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>CSS</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>React</span>
             </div>
             <div className='flex justify-between items-center mt-8 max-sm:flex-col max-sm:gap-4'>
              <div className='flex gap-8'>
                <span className='text-white text-lg max-sm:text-[16px] max-sm:whitespace-nowrap'>$15k-20k
                  <span className='text-neutral3Color ml-2'>/month</span>
                </span>
                <span className='text-white text-lg max-sm:text-[16px] max-sm:whitespace-nowrap'>54
                  <span className='text-neutral3Color ml-2'>People Applied</span>
                </span>
              </div>
              <div className='flex items-center gap-5'>
                <JobSearchMessageButton/>
                <JobSearchApplyNowButton/>
              </div>
             </div>
          </CardContent>
        </Card>
        <Card className=' bg-[#1c1c24] border-[#1c1c24] max-sm:w-[327px]'>
          <CardContent>
            <div className='flex mt-5 justify-between'>
              <div className='flex gap-5'>
                <div className='flex items-center justify-center bg-[#21212b] w-[64px] h-[64px] rounded-[10px]'>
                  <Image
                    src={uihut}
                    alt='uihut'
                  />
                </div>
                  <div className='flex flex-col gap-1.5'>
                    <span className='text-white text-lg font-bold max-sm:text-[16px]'>Passionate Programmer</span>
                    <span className='text-neutral3Color text-sm max-sm:text-[13px]'>UIHUT Technologies LLC • Sylhet, BD • 3 days ago</span>
                  </div>
              </div>
              <div>
                <button className='hidden lg:flex items-center justify-center gap-2 text-neutralColor bg-[#21212b] rounded-[10px] w-[101px] h-[34px] text-sm font-semibold'>Save job <BookmarkMinus color='#92929d' width={19} height={19} className=''/></button>
              </div>
            </div>
            <div className='mt-5'>
              <span className='text-white text-sm max-sm:text-[13px]'>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical <br /> challenges and learn and incorporate new technologies into their skillset to join our team and grow with us.</span>
            </div>
            <div className='flex gap-2 mt-5'>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>PHP</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>Laravel</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>CSS</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>React</span>
             </div>
             <div className='flex justify-between items-center mt-8 max-sm:flex-col max-sm:gap-4'>
              <div className='flex gap-8'>
                <span className='text-white text-lg max-sm:text-[16px] max-sm:whitespace-nowrap'>$15k-20k
                  <span className='text-neutral3Color ml-2'>/month</span>
                </span>
                <span className='text-white text-lg max-sm:text-[16px] max-sm:whitespace-nowrap'>54
                  <span className='text-neutral3Color ml-2'>People Applied</span>
                </span>
              </div>
              <div className='flex items-center gap-5'>
                <JobSearchMessageButton/>
                <JobSearchApplyNowButton/>
              </div>
             </div>
          </CardContent>
        </Card>
        <Card className=' bg-[#1c1c24] border-[#1c1c24] max-sm:w-[327px]'>
          <CardContent>
            <div className='flex mt-5 justify-between'>
              <div className='flex gap-5'>
                <div className='flex items-center justify-center bg-[#21212b] w-[64px] h-[64px] rounded-[10px]'>
                  <Image
                    src={uihut}
                    alt='uihut'
                  />
                </div>
                  <div className='flex flex-col gap-1.5'>
                    <span className='text-white text-lg font-bold max-sm:text-[16px]'>Passionate Programmer</span>
                    <span className='text-neutral3Color text-sm max-sm:text-[13px]'>UIHUT Technologies LLC • Sylhet, BD • 3 days ago</span>
                  </div>
              </div>
              <div>
                <button className='hidden lg:flex items-center justify-center gap-2 text-neutralColor bg-[#21212b] rounded-[10px] w-[101px] h-[34px] text-sm font-semibold'>Save job <BookmarkMinus color='#92929d' width={19} height={19} className=''/></button>
              </div>
            </div>
            <div className='mt-5'>
              <span className='text-white text-sm max-sm:text-[13px]'>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical <br /> challenges and learn and incorporate new technologies into their skillset to join our team and grow with us.</span>
            </div>
            <div className='flex gap-2 mt-5'>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>PHP</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>Laravel</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>CSS</span>
              <span className='bg-[#21212b] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>React</span>
             </div>
             <div className='flex justify-between items-center mt-8 max-sm:flex-col max-sm:gap-4'>
              <div className='flex gap-8'>
                <span className='text-white text-lg max-sm:text-[16px] max-sm:whitespace-nowrap'>$15k-20k
                  <span className='text-neutral3Color ml-2'>/month</span>
                </span>
                <span className='text-white text-lg max-sm:text-[16px] max-sm:whitespace-nowrap'>54
                  <span className='text-neutral3Color ml-2'>People Applied</span>
                </span>
              </div>
              <div className='flex items-center gap-5'>
                <JobSearchMessageButton/>
                <JobSearchApplyNowButton/>
              </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default JobSearchCard