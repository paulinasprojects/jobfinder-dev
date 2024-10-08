import CompanyDetailsCard from '@/components/company-details-card'
import SimilarCompanies from '@/components/similar-companies'

const CompanyIdPage = () => {
  return (
    <div>
    <div className='flex xl:flex-row lg:flex-col max-sm:flex-col  gap-10'>
      {/* left */}
     <div className='ml-20 max-sm:ml-10'>
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