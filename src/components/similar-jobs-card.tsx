import SimilarJobCard from './similar-job-card'

const SimilarJobsCard = () => {
  return (
    <div className=''>
      <div className='mb-6 max-sm:text-center lg:text-center xl:text-start md:mt-5 lg:mt-0 md:ml-10 lg:ml-0'>
        <span className='text-white text-lg font-bold'>Similar Jobs</span>
      </div>
      <div className='xl:flex xl:flex-col gap-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 lg:ml-0 max-sm:mx-5 xl:ml-0'>
        <SimilarJobCard/>
      </div>
    </div>
  )
}

export default SimilarJobsCard