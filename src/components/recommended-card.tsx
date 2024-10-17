import Image from 'next/image';
import { recommendedCardData } from '@/data/data';
import { Card, CardContent } from './ui/card';

const RecomendedCard = () => {
  return (
    <div>
      <Card className='bg-cardColor border-cardColor max-sm:w-[400px]'>
        <div>
          {recommendedCardData.map((data) => (
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]' key={data.position}>
            <div className='flex items-center gap-2.5 mt-5'>
              <Image
                src={data.image}
                alt="company logo"
                width={34}
                height={34}
                className='mt-3'
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-md font-semibold'>{data.position}</span>
                <span className='text-neutralColor text-sm'>{data.location}</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-sm text-white'>{data.salaryHour}
                  <span className='text-sm text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-sm text-neutralColor'>{data.type}</span>
              </div>
            </div>
          </CardContent>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default RecomendedCard