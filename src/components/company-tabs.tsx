import Image from "next/image";
import dynamic from "next/dynamic";
import { aboutImage, aboutImagetwo, aboutImagefour, aboutImagethree } from "@/lib/images";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";

const Map = dynamic(() => import("@/components/map"), {
  ssr: false,
})


const CompanyTabs = () => {
  return (
    <div className="">
      <Tabs defaultValue="about">
        <TabsList className="grid grid-cols-170 max-sm:grid-cols-45 max-sm:gap-4">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="locations">Locations</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="mt-[50px] max-sm:mt-[80px]">
          <Card className="w-[816px] h-full max-sm:w-[350px] bg-cardColor border-cardColorTwo">
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
      </Tabs>
    </div>
  )
}

export default CompanyTabs