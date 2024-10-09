"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import {  talencover, talencovermobile, talentimage, sketch, adobexd, figma, photoshop, illustrator, invisionTwo, googletwo, educationImage, portfolioImage, portfolioImageTwo, portfolioImageThree, portfolioImageFour } from '@/lib/images';
import { TalentInformationData } from '@/data/data';
import { Separator } from '@/components/ui/separator';
import SkillLevel from '@/components/skill-level';

const TalentInformation = () => {
  const router = useRouter();

  return (
    <div>
        <div className="ml-28 max-sm:ml-5">
        <button className="max-sm:hidden md:flex p-2.5 bg-cardColorTwo  items-center gap-1.5 rounded-[10px] text-neutralColor text-xxs font-medium" onClick={() => router.push("/talent")}>
          <ChevronLeft width={18} height={18}/>
          Back
        </button>
      </div>
      <div>
        <div className='ml-20 max-sm:ml-5'>
        <Image
            src={talencover}
            alt="job details image"
            className="ml-5 mt-5 hidden lg:block"
          />
          <Image
            src={talencovermobile}
            alt="mobile cover image"
            className="block lg:hidden max-sm:ml-10 max-sm:mt-5"
          />
          <Image
            src={talentimage}
            alt="company logo image"
            className="ml-10 -mt-5 max-sm:ml-16"
          />
        </div>
        {TalentInformationData.map((info) => (
          <div key={info.name}>
            <div className='flex xl:justify-between items-center lg:justify-normal lg:gap-10 xl:gap-0'>
              <div className='flex flex-col ml-[104px] mt-7 gap-2 max-sm:ml-20'>
                <span className='text-3xl text-white font-bold max-sm:text-xl'>{info.name}</span>
                <span className='text-neutralColor text-lg'>{info.position}</span>
                <span className='text-neutralColor text-sm'>{info.location} • {info.connection} Connections</span>
              </div>
              <div className='flex gap-[18px] mb-12 max-sm:hidden'>
                <button className='text-neutralColor bg-[#1C1C24] px-3 py-2 rounded-[10px] text-[15px] font-semibold'>Message</button>
                <button className='text-white bg-greenButtonColor px-3 py-2 rounded-[10px] text-[15px] font-semibold'>Connect</button>
              </div>
            </div>
            <div className='mt-8'>
              <Separator className='w-[792px] bg-[#21212B] ml-20 max-sm:ml-10 max-sm:w-[295px]'/>
            </div>
            <div className='flex gap-10 items-center mt-7 ml-[104px] max-sm:flex-col max-sm:justify-center max-sm:ml-10'>
              <div className='flex flex-col max-sm:items-center max-sm:justify-center'>
                <span className='text-neutralColor text-xxs font-medium'>Email Address</span>
                <span className='text-neutralColor text-xxs font-medium'>{info.email}</span>
              </div>
              <div className='flex flex-col max-sm:items-center max-sm:justify-center'>
                <span className='text-neutralColor text-xxs font-medium'>Home Address</span>
                <span className='text-neutralColor text-xxs font-medium'>{info.homeAddress}</span>
              </div>
              <div className='flex flex-col max-sm:items-center max-sm:justify-center'>
                <span className='text-neutralColor text-xxs font-medium'>Phone Number</span>
                <span className='text-neutralColor text-xxs font-medium'>{info.phoneNumber}</span>
              </div>
              <div className='flex flex-col max-sm:items-center max-sm:justify-center'>
                <span className='text-neutralColor text-xxs font-medium'>Portfolio Website</span>
                <span className='text-greenButtonColor text-xxs font-medium'>{info.portfolioWebsite}</span>
              </div>
            </div>
            <div className='mt-8'>
              <Separator className='w-[792px] bg-[#21212B] ml-20 max-sm:ml-10 max-sm:w-[295px]'/>
            </div>
            <div className='mt-7 flex flex-col gap-2.5 ml-[104px] max-sm:ml-5'>
              <span className='text-white'>Biography</span>
              <span className='text-[15px] text-neutral3Color'>I&apos;m a UX leader, design thinker, product designer, experience strategist, generative artist & human-loving introvert.&apos; <br /> Over the last decade, I&apos;ve collaborated with a diverse group of product teams including IBM, Walmart, AT&T and Visa <br /> to create insight led, human-centred products. I approach design and leadership with a focus on people, <br /> establishing empathy for both the people who make and the people who use the products I help bring to life. I&apos;m <br /> currently a Service Design Director and Senior Manager on the Digital Customer Experience team at TD Bank.</span>
            </div>
            <div className='mt-8'>
              <Separator className='w-[792px] bg-[#21212B] ml-20 max-sm:ml-10 max-sm:w-[295px]'/>
            </div>
            <div className='flex flex-col mt-7 ml-[104px] gap-2.5 max-sm:ml-5'>
              <span className='text-white text-md font-semibold'>Software Skills</span>
              <div className='flex gap-1.5'>
                <Image src={sketch} alt='sketch'/>
                <Image src={figma} alt='figma'/>
                <Image src={adobexd} alt='adobexd'/>
                <Image src={illustrator} alt='illustrator'/>
                <Image src={photoshop} alt='photoshop'/>
                <Image src={invisionTwo} alt='invision'/>
              </div>
            </div>
            <div className='mt-8'>
              <Separator className='w-[792px] bg-[#21212B] ml-20 max-sm:ml-10 max-sm:w-[295px]'/>
            </div>
            <div className='mt-7 ml-[104px] flex flex-col gap-2.5 max-sm:ml-5'>
              <span className='text-white text-md font-semibold'>Skill Level</span>
              <SkillLevel/>
            </div>
            <div className='mt-8'>
              <Separator className='w-[792px] bg-[#21212B] ml-20 max-sm:ml-10 max-sm:w-[295px]'/>
            </div>
            <div className='mt-7 ml-[104px] max-sm:ml-5'>
              <span className='text-white text-md font-semibold'>Job Experience</span>
            </div>
            <div className='flex items-center ml-[104px] max-sm:ml-5'>
              {info.experience.map((exp) => (
              <div key={exp.position} className='flex gap-[25px] mt-5 max-sm:flex-col'>
                <Image src={googletwo} alt='google'/>
                <div className='flex flex-col gap-1.5'>
                  <span className='text-white text-md font-medium'>{exp.position}</span>
                  <span className='text-neutralColor text-sm font-medium'>{exp.company} • {exp.companyAddress}</span>
                </div>
                <div className='ml-36 max-sm:ml-0'>
                  <span className='text-neutralColor text-sm font-medium'>{exp.duration}  </span>
                  <span className='text-white text-sm font-medium'>• {exp.durationInYears}</span>
                </div>
              </div>
              ))}
            </div>
              <div className='ml-[104px] mt-5 max-sm:ml-5'>
                <span className='text-[15px] max-sm:text-sm text-neutralColor font-normal'>
                Google User Experience (UX) is made up of multi-disciplinary teams of UX Designers, Researchers, Writers, Content  Strategists, Program Managers, and Engineers: we care deeply about the people who use our products. The UX  team plays an integral part in gathering insights about the needs, attitudes, emotions, and behaviors of people who  use our products to inspire and inform design. We collaborate closely with each other and with engineering and  product management to create industry-leading products that deliver value for the people who use them, and for  Google’s businesses.
                </span>
              </div>
              <div className='mt-8'>
              <Separator className='w-[792px] bg-[#21212B] ml-20 max-sm:ml-10 max-sm:w-[295px]'/>
            </div>
            <div className='mt-7 ml-[104px] max-sm:ml-5'>
              <span className='text-white text-md font-semibold'>Education</span>
            </div>
            {info.education.map((education) => (
              <div key={education.college} className='flex items-center gap-[25px] mt-7 ml-[104px] max-sm:ml-10 max-sm:gap-4'>
                <Image src={educationImage} alt='educaiton'/>
                <div className='flex flex-col gap-2'>
                <span className='text-white text-md font-medium'>{education.college}</span>
                <span className='text-neutralColor text-sm font-medium'>{education.collegeAddress}  • <br className='lg:hidden max-sm:block' /> {education.duration}</span>
                </div>
              </div>
            ))}
            <div className='ml-[104px] mt-5 max-sm:ml-5'>
              <span className='text-[15px] text-neutralColor font-normal'>I didn&apos;t know what he meant by “user experience” but it sounded interesting and I was intrigued. My dad&apos;s friend had  been working as a usability consultant since the early 90s and held a highly credentialed background in ergonomics  and human-computer interaction and had worked with top Fortune 500 tech companies throughout his high profile  career.</span>
            </div>
            <div className='mt-8'>
              <Separator className='w-[792px] bg-[#21212B] ml-20 max-sm:ml-10 max-sm:w-[295px]'/>
            </div>
            <div className='mt-7 ml-[104px] flex flex-col gap-5 max-sm:ml-5'>
              <span className='text-white text-md font-semibold'>Portfolio</span>
              <span className='text-neutral3Color text-[15px] font-normal'>After five years of designing digital products and experiences, I shifted my focus to research and strategy because I  wanted to facilitate greater impact through active empathy building and evidence-based decision making. I find my  purpose in understanding and representing human needs, from ensuring that participants are protected by ethical  research practices to prioritizing the end-user’s experience in design decisions. </span>
            </div>
            <div className='lg:flex gap-7 ml-[104px] mt-7 max-sm:ml-5 max-sm:grid max-sm:grid-cols-2'>
              <Image
                src={portfolioImage}
                alt='image'
              />
              <Image
                src={portfolioImageTwo}
                alt='image'
              />
              <Image
                src={portfolioImageThree}
                alt='image'
              />
              <Image
                src={portfolioImageFour}
                alt='image'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TalentInformation