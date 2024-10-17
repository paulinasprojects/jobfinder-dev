import AppliedJobsCard from "@/components/applied-jobs-card"
import InterviewingCard from "@/components/interviewing-card"
import OffersReceivedCard from "@/components/offers-received-card"
import SavedJobsCard from "@/components/saved-jobs-card"

const HistoryPage = () => {
  return (
    <div className="mb-10">
      <div className="mt-10 mx-20 flex items-center justify-between max-sm:mx-[24px] max-sm:justify-evenly max-sm:gap-[79px]">
      <div>
        <h1 className="text-white text-3xl font-bold">History</h1>
      </div>
      <div>
        <button className="w-[150px] h-[48px] rounded-[10px] bg-greenButtonColor text-white text-[15px] font-semibold">Manage Job Post</button>
      </div>
      </div>
      <div className="xl:flex max-sm:flex xl:flex-row lg:grid lg:grid-cols-2 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 xl:gap-10 max-sm:gap-10 text-white mx-20 mt-10 max-sm:flex-col max-sm:mx-[40px]">
        <div>
          <AppliedJobsCard/>
        </div>
        <div>
          <SavedJobsCard/>
        </div>
        <div>
          <OffersReceivedCard/>
        </div>
        <div>
          <InterviewingCard/>
        </div>
      </div>
    </div>
  )
}

export default HistoryPage