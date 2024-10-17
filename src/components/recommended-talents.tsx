import RecommendedTalentCard from "./recommended-talent-card";

const RecommendedTalents = () => {
  return (
    <div className="mt-14">
      <div className="lg:ml-20 xl:ml-0 md:ml-5 max-sm:ml-10">
        <span className="text-white text-[22px] font-bold">Recomended Talent</span>
      </div>
      <div className="mt-5 max-sm:ml-5 lg:ml-20 xl:ml-0">
      <RecommendedTalentCard/>
      </div>
    </div>
  )
}

export default RecommendedTalents