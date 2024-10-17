import CompanyDetailsCard from '@/components/company-details-card'
import SimilarCompanies from '@/components/similar-companies'

const CompanyIdPage = () => {
  return (
    <div className='mb-10'>
    <div className='flex xl:flex-row md:flex-col lg:flex-col max-sm:flex-col  gap-10'>
      {/* left */}
     <div className='lg:ml-20 md:ml-[26px] max-sm:ml-10'>
      <CompanyDetailsCard/>
     </div>
      {/* Right */}
     <div>
      <SimilarCompanies/>
     </div>
    </div>
  </div>
  )
}

export default CompanyIdPage