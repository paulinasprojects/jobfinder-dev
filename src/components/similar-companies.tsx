import SimilarCompanyCard from './similar-company-card'

const SimilarCompanies = () => {
  return (
    <div className=''>
       <div className="mt-[50px] max-sm:ml-6 xl:ml-0 lg:ml-10">
        <span className="text-[22px] text-white font-bold">Similar Companies</span>
      </div>
      <div className='xl:flex xl:flex-col lg:grid lg:grid-cols-2 ml-10 xl:ml-0 max-sm:ml-5'>
       <SimilarCompanyCard/>
      </div>
    </div>
  )
}

export default SimilarCompanies