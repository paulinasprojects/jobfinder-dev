"use client";

import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  return (
    <div className=''>
      <Card className='w-[400px] bg-cardColor border-cardColor'>
        <CardContent>
          <div className='flex gap-[15px] mt-5'>
              <div className='bg-[#2c2c2c] w-[64px] h-[64px] rounded-[10px] flex items-center justify-center'>
                <Image src={image} alt='company' className='' width={48} height={48}/>
              </div>
            <div className='text-white flex flex-col'>
               <span className='text-lg'>{title}</span>
             <div className='flex gap-2 mt-3'>
              <span className='latest-job-tech-stack'>PHP</span>
              <span className='latest-job-tech-stack'>Laravel</span>
              <span className='latest-job-tech-stack'>CSS</span>
              <span className='latest-job-tech-stack'>React</span>
             </div>
            </div>
            <div className='ml-auto'>
              <Ellipsis width={16} height={16} color='#92929D' className='cursor-pointer'/>
            </div>
          </div>
          <div className='mt-8'>
            <span className='text-neutralColor text-md'>
              {description}
            </span>
          </div>
          <div className='flex gap-2 mt-3'>
            <span className='icon-flex'>
              <Briefcase color='#92929D' width={14} height={14} />
              Full Time
            </span>
            <span className='icon-flex'>
              <Users color='#92929D' width={14} height={14} />
              45 applied
            </span>
            <span className='icon-flex'>
              <Clock color='#92929D' width={14} height={14}/>
              3 days left
            </span>
          </div>
          <div className='mt-6 flex justify-between items-center'>
           <div>
           <span className='text-white text-lg'>${salary}
              <span className='text-[#696974] text-lg'>/month</span>
            </span>
           </div>
           <Button size="green" color='#FFF' className='text-white bg-greenButtonColor' onClick={() => router.push("/job/1/submit-your-application")}>Apply Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LatestJobCard