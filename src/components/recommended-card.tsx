import { google,bexon, netflix, apple, invision } from '@/lib/images';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const RecomendedCard = () => {
  return (
    <div>
      <Card className='bg-[#1c1c24] border-[#1c1c24] w-[400px]'>
        <div>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex items-center gap-2.5 mt-5'>
              <Image
                src={google}
                alt='google'
                width={34}
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-[16px] font-semibold'>Product Design</span>
                <span className='text-neutralColor text-[14px]'>Google•California, USA</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-[14px] text-white'>$70-80
                  <span className='text-[14px] text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-[14px] text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex gap-2.5'>
              <Image
                src={bexon}
                alt='google'
                width={34}
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-[16px] font-semibold'>Head Of Marketing</span>
                <span className='text-neutralColor text-[14px]'>Bexon•Sylhet, BD</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-[14px] text-white'>$70-80
                  <span className='text-[14px] text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-[14px] text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex gap-2.5'>
              <Image
                src={netflix}
                alt='google'
                width={34}
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-[16px] font-semibold'>Lead UI Designer</span>
                <span className='text-neutralColor text-[14px]'>Google•California, USA</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-[14px] text-white'>$70-80
                  <span className='text-[14px] text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-[14px] text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex gap-2.5'>
              <Image
                src={apple}
                alt='google'
                width={34}
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-[16px] font-semibold'>Lead React Developer</span>
                <span className='text-neutralColor text-[14px]'>Apple•New York, USA</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-[14px] text-white'>$70-80
                  <span className='text-[14px] text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-[14px] text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
          <CardContent className='bg-[#21212b] m-5 rounded-[10px]'>
            <div className='flex gap-2.5'>
              <Image
                src={invision}
                alt='google'
                width={34}
              />
              <div className='text-white flex flex-col gap-1 mt-3.5'>
                <span className='text-[16px] font-semibold'>Frontend Developer</span>
                <span className='text-neutralColor text-[14px]'>Invision•California, USA</span>
              </div>
              <div className='flex flex-col text-white ml-auto gap-1 mt-3.5'>
                <span className='text-[14px] text-white'>$70-80
                  <span className='text-[14px] text-neutralColor ml-0.5'>/Hr</span>
                </span>
                <span className='text-[14px] text-neutralColor'>Full-Time</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default RecomendedCard