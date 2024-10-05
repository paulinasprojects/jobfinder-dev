import { cn } from "@/lib/utils"

interface Props {
  className?: string
}

const JobSearchApplyNowButton = ({ className }: Props) => {
  return (
    <button className={cn(
      'w-[180px] h-12 bg-greenButtonColor text-white rounded-[10px] text-[15px] font-semibold max-sm:w-[139px] max-sm:h-[38px]',
      className
    )}>
       Apply Now 
    </button>
  )
}

export default JobSearchApplyNowButton