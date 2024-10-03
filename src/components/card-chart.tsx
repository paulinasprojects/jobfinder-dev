import { Briefcase, Users, FileText, TrendingUp, TrendingDown } from 'lucide-react'
import JobCard from './common/jobs-card'
import { Chart } from './chart'

const CardChart = () => {
  return (
    <div>
      <div className='flex xl:flex-row gap-10 mt-10 ml-20 md:flex-col max-sm:flex-col max-sm:ml-10'>
        {/* Left */}
        <div className='grid grid-cols-20 md:gap-y-10 max-sm:gap-y-10 gap-x-10 max-sm:grid-cols-1'>
          <JobCard
            className='bg-[#C7F4C2]'
            icon={<Briefcase color='#C7F4C2'/>}
            title='2.345'
            description='Jobs views'
            percent='+15%'
            arrow={<TrendingUp width={20} height={20} color='#0BAB7C'/>}
          />
          <JobCard
            className='bg-purpleCard'
            icon={<Users color='#D7D0FF'/>}
            title='4.345'
            description='Jobs Applications'
            percent='+4%'
            arrow={<TrendingUp width={20} height={20} color='#0BAB7C'/>}
          />
          <JobCard
            className='bg-yellowCard'
            icon={<FileText color='#FDDD8C'/>}
            title='3.345'
            description='Posted Jobs'
            percent='-10%'
            arrow={<TrendingDown color='#FC5A5A' className='-rotate-[250deg]' height={20} width={20}/>}
          />
          <JobCard
            className='bg-pinkCard'
            icon={<FileText color='#FFBBD7'/>}
            title='50'
            description='Unread Message'
            percent='-10%'
            arrow={<TrendingDown color='#FC5A5A' className='-rotate-[250deg]' height={20} width={20}/>}
          />
        </div>
        {/* Right */}
        <div className='text-white'>
          <Chart/>
        </div>
      </div>
    </div>
  )
}

export default CardChart