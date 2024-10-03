import Image from 'next/image';
import { Ellipsis, Briefcase, Users, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface LatestJobCardProps {
  image: string | StaticImport;
  title: string;
  description: string;
  salary: string;
}

const LatestJobCard = ({ image, title, description, salary }: LatestJobCardProps) => {
  return (
    <div className=''>
      <Card className='w-[400px] bg-[#1c1c24] border-[#1c1c24]'>
        <CardContent>
          <div className='flex gap-[15px] mt-5'>
              <div className='bg-[#2c2c2c] w-[64px] h-[64px] rounded-[10px] flex items-center justify-center'>
                <Image src={image} alt='company' className='' width={48} height={48}/>
              </div>
            <div className='text-white flex flex-col'>
               <span className='text-lg'>{title}</span>
             <div className='flex gap-2 mt-3'>
              <span className='bg-[#2c2c2c] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>PHP</span>
              <span className='bg-[#2c2c2c] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>Laravel</span>
              <span className='bg-[#2c2c2c] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>CSS</span>
              <span className='bg-[#2c2c2c] text-neutralColor text-sm px-2 py-1 rounded-[5px]'>React</span>
             </div>
            </div>
            <div className='ml-auto'>
              <Ellipsis width={16} height={16} color='#92929D' className='cursor-pointer'/>
            </div>
          </div>
          <div className='mt-8'>
            <span className='text-neutralColor text-[16px]'>
              {description}
            </span>
          </div>
          <div className='flex gap-2 mt-3'>
            <span className='flex items-center gap-1.5 text-neutralColor bg-[#2c2c2c] text-sm px-2 py-1 rounded-[5px]'>
              <Briefcase color='#92929D' width={18} height={18} />
              Full Time
            </span>
            <span className='flex items-center gap-1.5 text-neutralColor bg-[#2c2c2c] text-sm px-2 py-1 rounded-[5px]'>
              <Users color='#92929D' width={18} height={18} />
              45 applied
            </span>
            <span className='flex items-center gap-1.5 text-neutralColor bg-[#2c2c2c] text-sm px-2 py-1 rounded-[5px]'>
              <Clock color='#92929D' width={18} height={18}/>
              3 days left
            </span>
          </div>
          <div className='mt-6 flex justify-between items-center'>
           <div>
           <span className='text-white text-lg'>${salary}
              <span className='text-[#696974] text-lg'>/month</span>
            </span>
           </div>
           <Button size="green" color='#FFF' className='text-white bg-greenButtonColor'>Apply Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LatestJobCard