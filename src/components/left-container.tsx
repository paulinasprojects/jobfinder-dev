import CreateJobAlertCard from './create-job-alert-card'
import ChecboxCard from './checkbox-card' 
import ExperienceLevelChecbox from './experience-level-checkbox'
import SalaryRangeCard from './salary-range-card'
import ClosedChecboxMenu from './closed-checkbox-menu'

const LeftContainer = () => {
  return (
    <div className='flex flex-col gap-5'>
      <CreateJobAlertCard/>
      <div className='flex flex-col gap-7'>
        <ChecboxCard
        title='Type Of Employment'
      />
      <ExperienceLevelChecbox
        title='Experience Level'
      />
      <SalaryRangeCard
        title='Salary Range'
      />
      <ClosedChecboxMenu
        title='Location'
      />
      <ClosedChecboxMenu
        title='Language'
      />
      <ClosedChecboxMenu
        title='Facility'
      />
      </div>
    </div>
  )
}

export default LeftContainer