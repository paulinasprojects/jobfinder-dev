import { cn } from "@/lib/utils";

interface PageHeadingProps {
  title: string;
  text: string;
  className?: string;
}

const PageHeading = ({title, text, className}: PageHeadingProps) => {
  return (
    <div className={cn("flex flex-col gap-[14px] mt-[50px] xl:ml-20", className)}>
      <h1 className="text-[32px] font-bold text-neutralWhite">{title}</h1>
      <span className="text-neutralColor font-medium text-[20px]">{text}</span>
    </div>
  )
}

export default PageHeading