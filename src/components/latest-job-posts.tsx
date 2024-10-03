import { ChevronDown } from "lucide-react";
import uihut from '/public/uihut.png';
import microsoft from '/public/microsoft.png';
import airbnb from '/public/airbnb.svg';
import slack from '/public/slack.png';
import LatestJobCard from "./latest-jobs-card";
import RecomendedCard from "./recommended-card";
import Schedule from "./schedule";
import CompaniesCard from "./companies-card";


const LatestJobPosts = () => {
  return (
    <div>
      <div className="flex xl:flex-row gap-10 mt-[63px] ml-20 md:flex-col max-sm:flex-col max-sm:ml-4">
        {/* Left */}
        <div>
          <div className="flex justify-between xl:justify-between items-center xl:min-w-[840px] md:min-w-[350px] md:justify-around">
            <h4 className="text-[22px] font-bold text-white">Latest Job Posts</h4>
              <span className="text-neutral3Color flex gap-2.5 items-center">See All <ChevronDown color="#808191"/></span>
          </div>
          <div className="mt-8 grid grid-cols-40 gap-10 max-sm:grid-cols-1">
           <LatestJobCard
            title="React Developer"
            description=" Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
            image={uihut}
            salary="15k-20k"

           />
           <LatestJobCard
            title="Web Developer"
            description="Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
            image={microsoft}
            salary="15k-20k"
           />
           <LatestJobCard
            title="Junior UI Designer"
            description="Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
            image={airbnb}
            salary="15k-20k"
           />
           <LatestJobCard
            title="UX Researcher"
            description="Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and grow with us."
            image={slack}
            salary="15k-20k"
           />
          </div>
            <div className="mt-[92px] grid grid-cols-30 gap-9 max-sm:grid-cols-2">
              <CompaniesCard/>
              <CompaniesCard/>
              <CompaniesCard/>
            </div>
        </div>
      {/* Right */}
      <div className="mr-20">
        <div className="flex xl:min-w-[400px] items-center justify-between">
          <h4 className="text-[22px] font-bold text-white">Recomended For You</h4>
            <span className="text-neutral3Color flex gap-2.5 items-center">See All <ChevronDown color="#808191"/></span>
        </div>
        <div className="flex xl:flex-col md:gap-11 max-sm:flex-col">
        <div className="mt-8">
          <RecomendedCard/>
        </div>
        <div className="md:mt-8 max-sm:mt-8">
          <Schedule/>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default LatestJobPosts