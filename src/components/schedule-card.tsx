"use client";

import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from '@/lib/constants';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { googlemeet } from '@/lib/images';
import { scheduleCardData } from '@/data/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ScheduleCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      variants={containerVariants}
    >
      <Card className='bg-cardColor border-cardColor max-sm:w-[400px]'>
       <CardHeader>
        <CardTitle className='text-white'>Schedule</CardTitle>
       </CardHeader>
       {scheduleCardData.map((data) => (
        <motion.div key={data.date} variants={itemVariants}>
        <CardContent className='bg-[#13131a] m-5 rounded-[10px]'>
          <div className='flex gap-[15px]'>
            <div className='bg-cardColor w-[55px] h-[55px] rounded-[10px] flex items-center justify-center mt-5'>
              <div className='text-white flex flex-col'>
                <span className='text-lg font-bold'>{data.date}</span>
                <span className='text-sm text-neutralColor'>{data.day}</span>
              </div>
            </div>
            <div className='text-white mt-5'>
              <span className='text-md font-semibold'>{data.taskTitle}</span>
              <span className='flex items-center gap-1.5 mt-1.5 text-sm text-neutralColor'>
                <Clock width={15} height={15} color='#92929D'/>
                {data.time}
                <span className='flex gap-1.5 text-sm text-neutralColor'>
                  <Image src={googlemeet}  alt='google-meet-icon'/>
                  Google Meet
                </span>
              </span>
            </div>
          </div>
        </CardContent>
        </motion.div>
       ))}
       <div className='flex items-center justify-center mb-5'>
        <button className='text-neutralColor text-sm bg-[#13131A] w-[360px] h-[44px] rounded-[10px] hover:bg-greenButtonColor hover:text-neutralWhite transition-colors'>See Full Schedule</button>
       </div>
      </Card>
    </motion.div>
  )
}

export default ScheduleCard