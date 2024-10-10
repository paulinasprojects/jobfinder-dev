
interface Props {
  title: string;
  jobNumber: number;
}

const JobHistoryTitlteCard = ({title, jobNumber}: Props) => {
  return (
    <div className="p-2 bg-cardColorTwo rounded-[10px] mt-[13px] border border-[#44444F]">
      <div className="flex gap-1.5 items-center justify-center">
        <span className="text-white">{title}</span>
        <span className="text-neutralColor">{jobNumber}</span>
      </div>
    </div>
  )
}

export default JobHistoryTitlteCard