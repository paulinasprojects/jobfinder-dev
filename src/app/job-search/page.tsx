import PageHeading from '@/components/common/page-heading'
import LeftContainer from '@/components/left-container'
import RightContainer from '@/components/right-container'
import Search from '@/components/search'

const JobSearch = () => {
  return (
    <div className=''>
      <PageHeading
        title="Let's Find Your Dream Job"
        text='Wednesday, 13 July 2024'
        className='max-sm:ml-[26px] lg:ml-[26px]'
      />
      <Search/>
      <div>
        <div className='flex gap-[77px] lg:gap-[50px]'>
          {/* Left */}
          <div className='xl:ml-20 mt-[52px] max-sm:hidden lg:ml-[26px]'>
            <LeftContainer/>
          </div>
          {/* Right */}
          <div>
            <RightContainer/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobSearch