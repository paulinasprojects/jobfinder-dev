import PageHeading from '@/components/common/page-heading'
import LeftContainer from '@/components/left-container'
import RightContainer from '@/components/right-container'
import Search from '@/components/search'
import React from 'react'

const JobSearch = () => {
  return (
    <div className=''>
      <PageHeading
        title="Let's Find Your Dream Job"
        text='Wednesday, 13 July 2024'
      />
      <Search/>
      <div>
        <div className='flex gap-[77px] lg:gap-[50px]'>
          {/* Left */}
          <div className='ml-20 mt-[52px] max-sm:hidden'>
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