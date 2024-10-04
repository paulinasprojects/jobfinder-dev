
interface PageHeadingProps {
  title: string;
  text: string;
}

const PageHeading = ({title, text}: PageHeadingProps) => {
  return (
    <div className="flex flex-col gap-[14px] mt-[50px] ml-[80px]">
      <h1 className="text-[32px] font-bold text-neutralWhite max-sm:text-[22px]">{title}</h1>
      <span className="text-neutralColor font-medium text-[20px]">{text}</span>
    </div>
  )
}

export default PageHeading