import PageHeading from '@/components/common/page-heading';
import TalentCard from '@/components/talent-card';
import TalentLeftContainer from '@/components/talent-left-container';
import TalentSearch from '@/components/talent-search';

const TalentPage = () => {
  return (
    <div className='mb-10'>
      <PageHeading
        title="Let's Find You a Talent"
        text="Wednesday, 13 July 2024"
         className='max-sm:ml-[26px] lg:ml-10 md:ml-[30px]'
      />
      <TalentSearch/>
      <div className='mt-[60px]'>
        <div className='flex gap-[90px]'>
          {/* Left */}
         <div className='xl:ml-20 lg:ml-10 max-sm:hidden md:hidden lg:block'>
         <TalentLeftContainer/>
         </div>
         {/* Rigth */}
         <div>
          <TalentCard/>
         </div>
        </div>
      </div>
    </div>
  )
}

export default TalentPage