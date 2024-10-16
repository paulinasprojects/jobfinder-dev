"use client";

import Image from "next/image";
import { z } from "zod";
import { Plus, CloudUpload } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { adobexd, figma, illustrator, invisionTwo, photoshop, portfolioImage, portfolioImageFour, portfolioImageThree, portfolioImageTwo, sketch } from "@/lib/images";
import { JobFormLocation, JobFormType, skillLevelData, companyNames, DegreesData } from "@/lib/job-form-data";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";


const personalInfoSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is requred" }),
  role: z.string().min(1, { message: "Role is required" }),
  bio: z.string().min(1, {message: "Please fill your bio"}),
  skillLevel: z.nativeEnum(skillLevelData),
  companyNames: z.nativeEnum(companyNames),
  jobTitle: z.string().min(1, { message: "Job Title is required" }),
  jobFormType : z.nativeEnum(JobFormType),
  locations: z.nativeEnum(JobFormLocation),
  startDate: z.string().date(),
  endYear: z.coerce.number().min(1,{ message: "End year is required"}),
  description: z.string().min(1, { message: "Description is required" }).max(500, { message: "Max 2000 characters" }),
  university: z.string().min(1, { message: "University is required" }),
  degree: z.nativeEnum(DegreesData),
  fieldOfStudy: z.string().min(1, { message: "Field of study is required" }),
  universityStartDate: z.string().date(),
  unversityEndYear: z.coerce.number().min(1, { message: "End year is required"}),
  universityDescription: z.string().min(1, { message: "University Description is requred" }).max(500, { message: "Max 2000 characters" }),
})

const PersonalInformationForm = () => {
  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      role: "",
      bio: "",
      skillLevel: undefined,
      jobTitle: "",
      jobFormType: undefined,
      locations: undefined,
      companyNames: undefined,
      startDate: "",
      endYear: undefined,
      description: "",
      university: "",
      degree: undefined,
      fieldOfStudy: "",
      universityStartDate: "",
      unversityEndYear: undefined,
      universityDescription: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof personalInfoSchema>) => {
    console.log(values);
    form.reset();
  }


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex xl:flex-row lg:items-center lg:justify-normal lg:ml-[26px] xl:ml-0 xl:justify-center max-sm:flex-col  gap-10 max-sm:ml-[24px]">
          <FormField
                control={form.control}
                name="firstName"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="First name" className="max-sm:w-[327px] xl:w-[565px] lg:w-[400px] h-[46px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Last name" className="max-sm:w-[327px] xl:w-[565px] lg:w-[400px] h-[46px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          </div>
            <FormField
              control={form.control}
              name="role"
              render={({field}) => (
                <FormItem className="lg:ml-[26px] max-sm:ml-[26px] xl:ml-[135px] flex flex-col mt-[32px]">
                  <FormLabel className="text-neutralColor text-sm">Role</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Senior Designer" className="max-sm:w-[327px] xl:w-[1170px] lg:w-[840px] h-[48px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="bio"
                render={({field}) => (
                  <FormItem className="lg:ml-[26px] max-sm:ml-[26px] xl:ml-[135px] flex flex-col mt-[32px]">
                    <FormLabel className="text-neutralColor text-sm">Biography</FormLabel>
                    <FormControl>
                     <Textarea {...field} className="resize-none xl:w-[1170px] lg:w-[840px] h-[190px] max-sm:w-[327px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          <div className="mt-14 mb-8 flex items-center justify-center">
            <Separator className="bg-[#21212B] xl:w-[1170px] max-sm:w-[327px] lg:w-[840px]"/>
          </div>
          <div className="flex flex-row lg:items-center xl:justify-between lg:justify-normal max-sm:ml-[24px] max-sm:mr-[24px] xl:mr-[135px] xl:ml-[135px] lg:ml-[26px] max-sm:flex-col gap-10">
          <FormField
                control={form.control}
                name="skillLevel"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Skill Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="xl:w-[565px] lg:w-[400px] h-[48px] max-sm:w-[327px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
                          <SelectValue placeholder="Senior Designer"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Intern">Intern</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Junior">Junior</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Mid">Mid</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Senior">Senior</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="CTO">CTO</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <div className="flex flex-col">
                <span className="text-neutralColor text-[15px] font-semibold">Software Skills</span>
                <span className="flex gap-2 text-greenButtonColor text-[15px] mt-2.5">
                  <Plus className="cursor-pointer"/>
                  Add your Skills
                </span>
                <div className="flex gap-2.5 mt-2">
                <Image src={sketch} alt='sketch'/>
                <Image src={figma} alt='figma'/>
                <Image src={adobexd} alt='adobexd'/>
                <Image src={illustrator} alt='illustrator'/>
                <Image src={photoshop} alt='photoshop'/>
                <Image src={invisionTwo} alt='invision'/>
                </div>
              </div>
          </div>
          <div className="mt-14 mb-8 flex items-center justify-center">
            <Separator className="bg-[#21212B] xl:w-[1170px] lg:w-[840px] max-sm:w-[327px]"/>
          </div>
          <div className="flex xl:flex-row xl:items-center xl:justify-center lg:justify-normal max-sm:flex-col max-sm:ml-[24px] xl:ml-0 lg:ml-[26px] max-sm:mr-[24px] gap-10">
          <FormField
                control={form.control}
                name="jobTitle"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Job Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Co-Founder" className="max-sm:w-[327px] xl:w-[565px] lg:w-[400px] h-[46px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="jobFormType"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Employment Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="xl:w-[565px] lg:w-[400px] max-sm:w-[327px] h-[48px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
                          <SelectValue placeholder="Full Time"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Full Time">Full Time</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Part Time">Part Time</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Internship">Internship</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Remote">Remote</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Freelance">Freelance</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Contract">Contract</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          </div>
          <div className="flex xl:flex-row xl:items-center xl:justify-center lg:justify-normal max-sm:flex-col max-sm:ml-[24px] lg:ml-[26px] xl:ml-0 max-sm:mr-[24px] gap-10 mt-[30px]">
          <FormField
                control={form.control}
                name="companyNames"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Company Name</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="xl:w-[565px] lg:w-[400px] max-sm:w-[327px] h-[48px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
                          <SelectValue placeholder="UIHUT LLC"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="UIHUT LLC">UIHUT LLC</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Google LLC">Google LLC</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Microsoft Corporation">Microsoft Corporation</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Slack LLC">Slack LLC</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage/>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="locations"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Location</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="xl:w-[565px] lg:w-[400px] max-sm:w-[327px] h-[48px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
                          <SelectValue placeholder="New York"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                      <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="New York, USA">New York, USA</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Los Angeles, USA">Los Angeles, USA</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="San Francisco, USA">San Francisco, USA</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Boston, USA">Boston, USA</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Ottawa, Canada">Ottawa, Canada</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          </div>
          <div className="mt-[30px] flex items-center gap-2 ml-[134px] max-sm:ml-[24px]">
          <Checkbox
          />
          <label className='text-neutralColor text-sm font-semibold'>I am currently working in this role</label>
          </div>
          <div className="flex xl:flex-row xl:items-center xl:justify-center lg:justify-normal max-sm:flex-col max-sm:ml-[24px] lg:ml-[26px] xl:ml-0 max-sm:mr-[24px] gap-10 mt-[30px]">
          <FormField
                control={form.control}
                name="startDate"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Start Date</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Select period" type='date' className="xl:w-[565px] lg:w-[400px] max-sm:w-[327px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
             <FormField
                control={form.control}
                name="endYear"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Year Ended</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="2021" type='number' className="xl:w-[565px] lg:w-[400px] max-sm:w-[327px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          </div>
          <div className="mt-[30px] flex xl:items-center xl:justify-center max-sm:ml-[24px] lg:ml-[26px] xl:ml-0">
          <FormField
                control={form.control}
                name="description"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Description</FormLabel>
                    <FormControl>
                     <Textarea {...field} className="resize-none xl:w-[1170px] lg:w-[840px] h-[112px] max-sm:w-[327px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          </div>
          <div className="mt-[30px] xl:ml-[135px] max-sm:ml-[26px] lg:ml-[26px]">
            <span className="flex items-center gap-2 text-greenButtonColor text-[15px] font-semibold">
              <Plus className="cursor-pointer size-5"/>
              Add Experience
            </span>
          </div>
          <div className="mt-14 mb-8 flex items-center justify-center">
            <Separator className="bg-[#21212B] xl:w-[1170px] lg:w-[840px] max-sm:w-[327px]"/>
          </div>
          <div className="mt-[30px] xl:ml-[135px] lg:ml-[26px] mb-[22px] max-sm:ml-[24px]">
            <span className="text-white text-lg font-bold">Education</span>
          </div>
          <div className="flex xl:flex-row xl:items-center xl:justify-center lg:justify-normal lg:ml-[26px] xl:ml-0 max-sm:flex-col gap-10 max-sm:ml-[24px]">
          <FormField
                control={form.control}
                name="university"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">University</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Harvard University" className="max-sm:w-[327px] xl:w-[565px] lg:w-[400px] h-[46px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="degree"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Degree</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="xl:w-[565px] lg:w-[400px] max-sm:w-[327px] h-[48px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
                          <SelectValue placeholder="Bachelor Degree"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                      <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Associate Degree">Associate Degree</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Bachelor Degree">Bachelor Degree</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Masters Degree">Masters Degree</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Graduate Degree">Graduate Degree</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          </div>
          <div className="mt-[30px] xl:ml-[135px] max-sm:ml-[24px] lg:ml-[26px]">
          <FormField
              control={form.control}
              name="fieldOfStudy"
              render={({field}) => (
                <FormItem>
                  <FormLabel className="text-neutralColor text-sm">Field Of Study</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Computer Science" className="max-sm:w-[327px] lg:w-[400px] xl:w-[1170px] h-[48px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="flex xl:flex-row xl:items-center xl:justify-center lg:justify-normal max-sm:flex-col max-sm:ml-[24px] lg:ml-[26px] xl:ml-0 max-sm:mr-[24px] gap-10 mt-[30px]">
          <FormField
                control={form.control}
                name="universityStartDate"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Start Date</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Select period" type='date' className="xl:w-[565px] lg:w-[400px] max-sm:w-[327px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
             <FormField
                control={form.control}
                name="unversityEndYear"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Year Graduated</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="2021" type='number' className="xl:w-[565px] lg:w-[400px] max-sm:w-[327px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          </div>
          <div className="mt-[30px] flex xl:items-center xl:justify-center max-sm:ml-[24px] xl:ml-0 lg:ml-[26px]">
          <FormField
                control={form.control}
                name="universityDescription"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Description</FormLabel>
                    <FormControl>
                     <Textarea {...field} className="resize-none xl:w-[1170px] lg:w-[840px] h-[112px] max-sm:w-[327px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
          </div>
          <div className="mt-[30px] xl:ml-[135px] lg:ml-[40px] max-sm:ml-[24px]">
            <span className="flex items-center gap-2 text-greenButtonColor text-[15px] font-semibold">
              <Plus className="cursor-pointer size-5"/>
              Add Education
            </span>
          </div>
          <div className="mt-[30px] xl:ml-[135px] flex flex-col gap-5 max-sm:ml-[24px] lg:ml-[26px] mb-10">
          <span className="text-white text-lg font-bold">Portfolio projects</span>
          <span className="text-neutralColor xl:text-[15px] lg:text-sm  font-normal max-sm:text-[10px]">
            After five years of designing digital products and experiences, I shifted my focus to research and strategy because I wanted to facilitate greater impact through active <br /> empathy building and evidence-based decision making. I find my purpose in understanding and representing human needs, from ensuring that participants are <br /> protected by ethical research practices to prioritizing the end-user’s experience in design decisions. 
          </span>
          <div className='xl:flex gap-7 lg:flex  max-sm:grid max-sm:grid-cols-111'>
            <div className="w-[167px] h-[125px] max-sm:w-[92px] max-sm:h-[69px] bg-cardColor rounded-[10px] outline-dotted outline-1 outline-white flex flex-col gap-1 items-center justify-center">
            <label htmlFor="inputField">
               <CloudUpload className="size-6 text-neutralColor max-sm:size-3"/>
              </label>
              <input type="file" title=" " style={{display: "none"}} id="inputField"/>
              <span className="text-neutralColor text-sm max-sm:text-[8px]">Add Your Protfolio</span>
            </div>
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
          <div className="flex lg:items-center lg:justify-center max-sm:ml-[24px]">
            <Button type="submit" className="bg-greenButtonColor text-white max-sm:w-[370px] w-[565px] h-[48px]">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default PersonalInformationForm