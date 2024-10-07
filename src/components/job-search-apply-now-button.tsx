import { cn } from "@/lib/utils"

interface Props {
  className?: string;
  onClick?: () => void;
}

const JobSearchApplyNowButton = ({ className, onClick }: Props) => {
  return (
    <button className={cn(
      'w-[180px] h-12 bg-greenButtonColor text-white rounded-[10px] text-[15px] font-semibold max-sm:w-[139px] max-sm:h-[38px]',
      className
    )}
      onClick={onClick}
    >
       Apply Now 
    </button>
  )
}

export default JobSearchApplyNowButton