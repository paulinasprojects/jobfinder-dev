import RecommendedTalents from '@/components/recommended-talents';
import TalentInformation from '@/components/talent-information';

const ProfileIdPage = () => {
  return (
    <div className='mb-10'>
      <div className='flex gap-10 xl:flex-row md:flex-col lg:flex-col max-sm:flex-col'>
        {/* Left */}
        <div>
          <TalentInformation/>
        </div>
        {/* Right */}
        <div className='lg:mr-10'>
          <RecommendedTalents/>
        </div>
      </div>
    </div>
  )
}

export default ProfileIdPage