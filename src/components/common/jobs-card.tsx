import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface JobCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  percent: string;
  arrow: React.ReactNode;
  className?: string;
}


const JobCard = ({ icon, title, description, percent, arrow, className }: JobCardProps) => {
  return (
    <div className=''>
      <Card className={cn("'bg-[#C7F4C2] w-[290px] outline-none border-none'", className)}>
        <CardContent>
          <div className='flex flex-col'>
            <div className='bg-black w-10 h-10 rounded-full flex items-center justify-center mt-4'>
              {icon}
            </div>
            <span className='text-2xl font-bold mt-3.5'>{title}</span>
            <div className='flex gap-8 items-center justify-between'>
              <span className='text-md'>{description}</span>
              <div className='flex gap-1.5 items-center'>
              <span className='text-md'>{percent}</span>
                {arrow}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default JobCard