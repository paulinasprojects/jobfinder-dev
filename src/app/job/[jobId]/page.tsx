import PageHeading from "@/components/common/page-heading"
import JobDetailsCard from "@/components/job-details-card"
import Search from "@/components/search"
import SimilarJobsCard from "@/components/similar-jobs-card"

const JobIdPage = () => {
  return (
    <div>
       <PageHeading
        title="Let's Find Your Dream Job"
        text='Wednesday, 13 July 2024'
        className="max-sm:ml-[26px] md:ml-5 lg:ml-10"
      />
      <Search/>
      <div className="flex xl:flex-row gap-10 max-sm:flex-col md:flex-col lg:flex-col">
        {/* Left */}
        <div className="lg:ml-20 mt-[50px] max-sm:ml-0 md:ml-[0px] max-sm:flex max-sm:justify-center">
          <JobDetailsCard/>
        </div>
        {/* Right */}
        <div className="mt-[52px] lg:ml-10 xl:ml-0">
          <SimilarJobsCard/>
        </div>
      </div>
    </div>
  )
}

export default JobIdPage