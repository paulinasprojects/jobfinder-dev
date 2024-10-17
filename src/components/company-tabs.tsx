import Image from "next/image";
import dynamic from "next/dynamic";
import { aboutImage, aboutImagetwo, aboutImagefour, aboutImagethree, uihut } from "@/lib/images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Search, Bell, Ellipsis } from "lucide-react";
import { Button } from "./ui/button";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
})


const CompanyTabs = () => {
  return (
    <div className="">
      <Tabs defaultValue="about">
        <TabsList className="lg:grid lg:grid-cols-170 md:grid md:grid-cols-50 md:items-center md:justify-center  max-sm:grid-cols-45 max-sm:gap-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="lg:mt-[50px] md:mt-[80px] max-sm:mt-[80px]">
          <Card className="lg:w-[816px] md:w-[700px] h-full max-sm:w-[350px] bg-cardColor border-cardColorTwo">
           <CardContent>
           <div>
              <div className="mt-5 ml-5 flex flex-col gap-2.5">
                <span className="text-white text-lg font-bold">Overview</span>
                <span className="text-neutralColor text-md">UI HUT is a design resources platform for UX/UI designers, developers, and founders. Our high-quality <br /> design resources will help you to speed up the design process. Founded by a team of product designers <br /> with years of experience in UX design and front-end development, UI HUT’s goal is to provide the best available open source freebies for your projects.</span>
              </div>
              <div className="flex items-center gap-[22px] ml-5 mt-[14px] max-sm:gap-2.5">
                <Image
                  src={aboutImage}
                  alt="about"
                  className="rounded-[10px] max-sm:w-[60px] max-sm:h-[60px]"
                />
                <Image
                  src={aboutImagetwo}
                  alt="about"
                  className="max-sm:w-[60px] max-sm:h-[60px]"
                />
                <Image
                  src={aboutImagethree}
                  alt="about"
                  className=" max-sm:w-[60px] max-sm:h-[60px]"
                />
                <Image
                  src={aboutImagefour}
                  alt="about"
                  className=" max-sm:w-[60px] max-sm:h-[60px]"
                />
              </div>
              <div className="mt-10 ml-5 flex flex-col gap-2.5">
                <span className="text-white text-lg font-bold">Industry</span>
                <span className="text-neutralColor text-md">Design & Code Resources Platform</span>
              </div>
              <div className="mt-10 ml-5 flex flex-col gap-2.5">
                <span className="text-white text-lg font-bold">Website</span>
                <span className="text-neutralColor text-md">https://www.uihut.com/</span>
              </div>
              <div className="mt-10 ml-5 flex flex-col gap-2.5">
                <span className="text-white text-lg font-bold">Company Size</span>
                <span className="text-neutralColor text-md">1,000-4,000 Employees</span>
              </div>
              <div className="mt-10 ml-5 flex flex-col gap-2.5">
                <span className="text-white text-lg font-bold">Headquarters</span>
                <span className="text-neutralColor text-md">New York, USA</span>
              </div>
              <div className="mt-10 ml-5 flex flex-col gap-2.5">
                <span className="text-white text-lg font-bold">Specialties</span>
                <span className="text-neutralColor text-md">Product Design, Web design, Web app, HTML Template, Code App, Mobile App, UI KIT, Illustration, 3D Illustrations etc.</span>
              </div>
              <div className="mt-10 ml-5 flex flex-col gap-2.5">
                <span className="text-white text-lg font-bold">Locations</span>
                <span className="text-neutralColor text-md">Interact within the map to explore all locations</span>
              </div>
              <div className="mt-10 flex items-center justify-center">
                <Map/>
              </div>
            </div>
           </CardContent>
          </Card>
        </TabsContent>
        {/*  */}
        <TabsContent value="jobs" className="mt-[50px] max-sm:mt-[80px]">
          <Card className="w-[816px] h-full max-sm:w-[350px] bg-cardColor border-cardColorTwo">
            <CardContent>
              <div>
              <div className="flex justify-between items-center max-sm:flex-col">
                <div className="mt-5 relative">
                  <input type="text" placeholder="Search Job title or Keyword" className="w-[440px] max-sm:w-[200px] h-[58px] rounded-[16px] text-neutralColor text-sm bg-cardColorTwo pl-10" />
                  <Search className="text-neutralColor absolute top-5 left-3" width={18} height={18}/>
                  <Button className="bg-greenButtonColor ml-5">Search</Button>
                </div>
                <div className="mt-5">
                  <button className="flex items-center justify-center gap-[12px] text-neutralColor text-xxs border border-neutralColor rounded-[10px] w-[165px] h-[42px]">
                    <Bell className="text-neutralColor" width={16} height={17}/>
                    Create Job Alert
                  </button>
                </div>
              </div>
                <div className="mt-10 mb-5">
                  <span className="text-white text-lg font-bold">Recently Posted Job</span>
                </div>
                <div className="grid grid-cols-15 gap-[30px] max-sm:grid-cols-17">
                <div className="bg-cardColorTwo  h-[259px] rounded-[10px]">
                  <div className="flex items-center ml-5">
                    <Image
                      src={uihut}
                      alt="uihut"
                      className="mt-5"
                    />
                    <div className="flex flex-col items-center mt-5 ml-5">
                      <span className="text-white text-lg font-semibold">Junior UI Designer</span>
                      <div className='flex gap-2'>
                        <span className='tech-stack'>PHP</span>
                        <span className='tech-stack'>Laravel</span>
                        <span className='tech-stack'>CSS</span>
                    </div>
                    </div>
                    <Ellipsis className="text-neutralColor ml-auto mr-5"/>
                  </div>
                  <div className="mt-[22px] lg:ml-5">
                    <span className="text-neutralColor text-md font-normal max-sm:text-sm">Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.</span>
                  </div>
                  <div className="mt-7 flex justify-between items-center max-sm:mt-5">
                    <span className="ml-5 text-white">$15k-20k <span className="text-neutralColor">/month</span></span>
                    <button className="text-greenButtonColor mr-5 rounded-[10px] w-[103px] h-[40px] bg-[#1f2f33]">Apply now</button>
                  </div>
                </div>
                <div className="bg-cardColorTwo  h-[259px] rounded-[10px]">
                  <div className="flex items-center ml-5">
                    <Image
                      src={uihut}
                      alt="uihut"
                      className="mt-5"
                    />
                    <div className="flex flex-col items-center mt-5 ml-5">
                      <span className="text-white text-lg font-semibold">Junior UI Designer</span>
                      <div className='flex gap-2'>
                        <span className='tech-stack'>PHP</span>
                        <span className='tech-stack'>Laravel</span>
                        <span className='tech-stack'>CSS</span>
                    </div>
                    </div>
                    <Ellipsis className="text-neutralColor ml-auto mr-5"/>
                  </div>
                  <div className="mt-[22px] lg:ml-5">
                    <span className="text-neutralColor text-md font-normal max-sm:text-sm">Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.</span>
                  </div>
                  <div className="mt-7 flex justify-between items-center max-sm:mt-5">
                    <span className="ml-5 text-white">$15k-20k <span className="text-neutralColor">/month</span></span>
                    <button className="text-greenButtonColor mr-5 rounded-[10px] w-[103px] h-[40px] bg-[#1f2f33]">Apply now</button>
                  </div>
                </div>
                <div className="bg-cardColorTwo  h-[259px] rounded-[10px]">
                  <div className="flex items-center ml-5">
                    <Image
                      src={uihut}
                      alt="uihut"
                      className="mt-5"
                    />
                    <div className="flex flex-col items-center mt-5 ml-5">
                      <span className="text-white text-lg font-semibold">Junior UI Designer</span>
                      <div className='flex gap-2'>
                        <span className='tech-stack'>PHP</span>
                        <span className='tech-stack'>Laravel</span>
                        <span className='tech-stack'>CSS</span>
                    </div>
                    </div>
                    <Ellipsis className="text-neutralColor ml-auto mr-5"/>
                  </div>
                  <div className="mt-[22px] lg:ml-5">
                    <span className="text-neutralColor text-md font-normal max-sm:text-sm">Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.</span>
                  </div>
                  <div className="mt-7 flex justify-between items-center max-sm:mt-5">
                    <span className="ml-5 text-white">$15k-20k <span className="text-neutralColor">/month</span></span>
                    <button className="text-greenButtonColor mr-5 rounded-[10px] w-[103px] h-[40px] bg-[#1f2f33]">Apply now</button>
                  </div>
                </div>
                <div className="bg-cardColorTwo  h-[259px] rounded-[10px]">
                  <div className="flex items-center ml-5">
                    <Image
                      src={uihut}
                      alt="uihut"
                      className="mt-5"
                    />
                    <div className="flex flex-col items-center mt-5 ml-5">
                      <span className="text-white text-lg font-semibold">Junior UI Designer</span>
                      <div className='flex gap-2'>
                        <span className='tech-stack'>PHP</span>
                        <span className='tech-stack'>Laravel</span>
                        <span className='tech-stack'>CSS</span>
                    </div>
                    </div>
                    <Ellipsis className="text-neutralColor ml-auto mr-5"/>
                  </div>
                  <div className="mt-[22px] lg:ml-5">
                    <span className="text-neutralColor text-md font-normal max-sm:text-sm">Here at UIHUT, we are a passionate, fun-loving, growing team. We are looking for passionate programmers who want to solve.</span>
                  </div>
                  <div className="mt-7 flex justify-between items-center max-sm:mt-5">
                    <span className="ml-5 text-white">$15k-20k <span className="text-neutralColor">/month</span></span>
                    <button className="text-greenButtonColor mr-5 rounded-[10px] w-[103px] h-[40px] bg-[#1f2f33]">Apply now</button>
                  </div>
                </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CompanyTabs