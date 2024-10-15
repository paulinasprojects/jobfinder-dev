import Image from 'next/image'
import { ChevronLeft, Plus } from 'lucide-react'
import { jobdetails, jobdetailsimage, mobileCover, companyFollower, companyFollowerThree, companyFollowerTwo, thirtyFour } from '@/lib/images'
import CompanyTabs from './company-tabs'
import ImageComponent from './image-component'


const CompanyDetailsCard = () => {
  return (
   <div>
     <div>
        <button className='max-sm:flex md:flex p-2.5 bg-cardColorTwo  items-center gap-1.5 rounded-[10px] text-neutralColor text-xxs font-medium'>
          <ChevronLeft width={18} height={18}/>
          Back
        </button>
      </div>
      <div className='mt-5'>
      <div>
        <ImageComponent
          coverImage={jobdetailsimage}
          mobileCoverImage={mobileCover}
          profileImage={jobdetails}
          className='ml-10 -mt-5'
        />
      </div>
      <div className='mt-8 xl:ml-10 flex flex-row xl:justify-between max-sm:justify-center max-sm:ml-0 max-sm:gap-10 max-sm:mb-5 lg:justify-around  items-center lg:ml-0'>
        <span className='text-white text-3xl font-bold'>UIHUT</span>
        <div className='flex'>
          <Image
            src={companyFollower}
            alt='company follower'
          />
          <Image
            src={companyFollowerTwo}
            alt='company follower'
            className='-ml-2.5'
          />
          <Image
            src={companyFollowerThree}
            alt='company follower'
            className='-ml-2.5'
          />
          <Image
            src={thirtyFour}
            alt='company follower'
            className='-ml-2.5'
          />
        </div>
      </div>
          <div className='flex xl:justify-between ml-10 lg:justify-evenly max-sm:flex-col'>
            <div className='flex flex-col mt-2.5 gap-2.5'>
              <span className='text-neutralColor text-md'>UIHUT Technologies LLC • Sylhet, BD</span>
              <span className='text-neutralColor text-md max-sm:text-xs'>Design Resources platform • 203,765 Followers</span>
            </div>
            <div className='mt-7'>
              <button className='bg-transparent w-[145px] h-[38px] border rounded-[10px] border-greenButtonColor text-greenButtonColor text-sm flex gap-1.5 items-center justify-center'>
                <Plus width={18} height={18}/>
                Follow
              </button>
            </div>
        </div>
            <div className='ml-10 mt-[70px] max-sm:mt-10 max-sm:ml-0'>
              <CompanyTabs/>
            </div>
      </div>
   </div>
  )
}

export default CompanyDetailsCard