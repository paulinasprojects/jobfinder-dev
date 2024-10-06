import React from 'react'
import SimilarJobCard from './similar-job-card'

const SimilarJobsCard = () => {
  return (
    <div className=''>
      <div className='mb-6 max-sm:text-center lg:text-center xl:text-start'>
        <span className='text-white text-lg font-bold'>Similar Jobs</span>
      </div>
      <div className='xl:flex xl:flex-col gap-4 lg:grid lg:grid-cols-2 lg:ml-10 max-sm:ml-5'>
        <SimilarJobCard/>
      </div>
    </div>
  )
}

export default SimilarJobsCard