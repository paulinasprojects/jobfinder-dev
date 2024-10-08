import PageHeading from '@/components/common/page-heading';
import LeftContainer from '@/components/left-container';
import TalentCard from '@/components/talent-card';
import TalentLeftContainer from '@/components/talent-left-container';
import TalentSearch from '@/components/talent-search';

const TalentPage = () => {
  return (
    <div>
      <PageHeading
        title="Let's Find You a Talent"
        text="Wednesday, 13 July 2024"
      />
      <TalentSearch/>
      <div className='mt-[60px]'>
        <div className='flex gap-[90px]'>
          {/* Left */}
         <div className='ml-20 max-sm:hidden'>
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