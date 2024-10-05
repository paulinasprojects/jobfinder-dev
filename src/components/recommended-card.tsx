import { google,bexon, netflix, apple, invision } from '@/lib/images';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const RecomendedCard = () => {
  return (
    <div>
      <Card className='bg-cardColor border-cardColor w-[400px]'>
        <div>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex items-center gap-2.5 mt-5'>
              <Image
                src={google}
                alt='google'
                width={34}
                className='mt-3'
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-md font-semibold'>Product Design</span>
                <span className='text-neutralColor text-sm'>Google•California, USA</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-sm text-white'>$70-80
                  <span className='text-sm text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-sm text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex gap-2.5'>
              <Image
                src={bexon}
                alt='google'
                width={34}
                className='mt-3'
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-md font-semibold'>Head Of Marketing</span>
                <span className='text-neutralColor text-sm'>Bexon•Sylhet, BD</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-sm text-white'>$70-80
                  <span className='text-sm text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-sm text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex gap-2.5'>
              <Image
                src={netflix}
                alt='google'
                width={34}
                className='mt-3'
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-md font-semibold'>Lead UI Designer</span>
                <span className='text-neutralColor text-sm'>Google•California, USA</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-sm text-white'>$70-80
                  <span className='text-sm text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-sm text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex gap-2.5'>
              <Image
                src={apple}
                alt='google'
                width={34}
                className='mt-3'
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-md font-semibold'>Lead React Developer</span>
                <span className='text-neutralColor text-sm'>Apple•New York, USA</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-sm text-white'>$70-80
                  <span className='text-sm text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-sm text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex gap-2.5'>
              <Image
                src={invision}
                alt='google'
                width={34}
                className='mt-3'
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-md font-semibold'>Frontend Developer</span>
                <span className='text-neutralColor text-sm'>Invision•California, USA</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-sm text-white'>$70-80
                  <span className='text-sm text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-sm text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default RecomendedCard