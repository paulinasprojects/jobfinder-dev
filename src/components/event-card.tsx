import Image, { StaticImageData } from 'next/image';
import { Card, CardContent } from './ui/card';
import { companyFollower, companyFollowerThree, companyFollowerTwo, thirtyFour } from '@/lib/images';

interface EventCardProps {
  image: string | StaticImageData;
  title: string;
  eventBy: string;
  time: string;
  dateMonth: string;
  dateDay: string;
}

const EventCard = ({ image, title, eventBy, time, dateMonth, dateDay }: EventCardProps) => {
  return (
    <div>
      <Card className=' bg-cardColorTwo border-cardColorTwo rounded-[10px] cursor-pointer'>
        <CardContent className=''>
          <div className='mt-4'>
            <Image
              src={image}
              alt='event image'
              className='w-[258px] h-[158px] max-sm:w-[320px] md:w-full'
            />
          </div>
          <div className='flex items-center justify-between mt-3.5'>
            <div className='flex flex-col gap-0.5'>
            <span className='text-white text-md font-semibold'>{title}</span>
            <span className='text-[12px] text-neutral3Color font-medium'>Event By: {eventBy}</span>
            <span className='text-neutralColor text-[12px] font-normal'>{time}</span>
            </div>
            <div className='flex flex-col items-center gap-0.5 max-sm:mr-5'>
              <span className='uppercase text-neutralColor text-sm font-medium'>{dateMonth}</span>
              <span className='text-greenButtonColor text-lg font-semibold'>{dateDay}</span>
            </div>
          </div>
          <div className='flex mt-5 items-center'>
          <Image
            src={companyFollower}
            alt='company follower'
            className='w-[24px] h-[24px]'
          />
          <Image
            src={companyFollowerTwo}
            alt='company follower'
            className='-ml-2.5 w-[24px] h-[24px]'
          />
          <Image
            src={companyFollowerThree}
            alt='company follower'
            className='-ml-2.5 w-[24px] h-[24px]'
          />
          <Image
            src={thirtyFour}
            alt='company follower'
            className='-ml-2.5 w-[24px] h-[24px]'
          />
          <span className='ml-2 text-[12px] text-neutralColor'>Interested</span>
        </div>
        <div className='mt-5 flex items-center'>
          <button className='text-greenButtonColor bg-[#1b2a2d] w-[258px] max-sm:w-[370px] h-[48px] rounded-[10px] text-[15px] font-semibold hover:bg-greenButtonColor hover:text-neutralWhite'>Attend</button>
        </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default EventCard