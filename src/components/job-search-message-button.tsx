import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const JobSearchMessageButton = ({ className }: Props) => {
  return (
    <button className={cn(
      'w-[125px] h-12 bg-[#21212b] text-neutral3Color rounded-[10px] text-[15px] font-semibold hover:bg-greenButtonColor hover:text-neutralWhite transition-colors',
      className
    )}>
       Message 
    </button>
  )
}

export default JobSearchMessageButton