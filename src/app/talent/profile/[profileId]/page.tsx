import RecommendedTalents from '@/components/recommended-talents';
import TalentInformation from '@/components/talent-information';

const ProfileIdPage = () => {
  return (
    <div>
      <div className='flex gap-10 xl:flex-row lg:flex-col max-sm:flex-col'>
        {/* Left */}
        <div>
          <TalentInformation/>
        </div>
        {/* Right */}
        <div>
          <RecommendedTalents/>
        </div>
      </div>
    </div>
  )
}

export default ProfileIdPage