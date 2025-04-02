"use client";

import Image from "next/image";
import { z } from "zod"
import { X } from 'lucide-react';
import imageicon from '/public/image-icon.png'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Departments, HiringManagers, JobFormType, JobFormLocation } from '@/lib/job-form-data';
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const addJobFormSchema = z.object({
  role: z.string().min(1, { message: "Role is required" }),
  jobDescription: z.string().min(1, { message: "Please fill the job description" }).max(2000, {message: "Maximum 2000 Words"}),
  experience: z.string().array().min(1, {message: "Experience is required"}),
  skillsSets: z.string().min(1, {message: "Skill Sets are required"}),
  salary: z.coerce.number().min(1, { message: "Salary is required" }),
  recruitmentPeriod: z.string().date(),
  recruitmentQuota: z.string().min(1, { message: "Recruitment Quota is required"}),
  department: z.nativeEnum(Departments),
  jobFormType : z.nativeEnum(JobFormType),
  hiringManagers : z.nativeEnum(HiringManagers),
  locations: z.nativeEnum(JobFormLocation),
})

const AddJobForm = () => {
  const form = useForm<z.infer<typeof addJobFormSchema>>({
    resolver: zodResolver(addJobFormSchema),
    defaultValues: {
      role: "",
      jobDescription: "",
      experience: [],
      skillsSets: "",
      salary: undefined,
      recruitmentQuota: "",
      recruitmentPeriod: "",
      department: undefined,
      jobFormType: undefined,
      hiringManagers: undefined,
      locations: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof addJobFormSchema>) => {
    console.log(values);
    form.reset();
  };


  return (  
    <div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="xl:ml-20 lg:ml-6 md:mx-5 lg:mr-5 mt-10 flex flex-col max-sm:mx-7">  
            <span className="text-neutralColor text-[15px] font-semibold">Add Header Image</span>
            <div className="mt-3.5 lg:w-[840px] md:w-[560px] h-[112px] max-sm:w-[370px] bg-cardColor rounded-[10px] outline-dotted outline-1 outline-white flex flex-col gap-1 items-center justify-center">
              <label htmlFor="inputField">
                <Image
                  src={imageicon}
                  alt="image"
                />
              </label>
                <span className="text-[#44444F] text-sm">Drop Your image here, or <span className='text-greenButtonColor'>browse</span></span>
                <span className="text-neutralColor text-xxs">Supports: JPG, JPEG200, PNG</span>
              <input type="file" title=" " style={{display: "none"}} id="inputField"/>
            </div>
            <div className="mt-10 flex flex-col ">
              <FormField
                control={form.control}
                name="role"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Role</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-cardColor lg:w-[840px] md:w-[560px] h-[48px] max-sm:w-[380px] rounded-[10px] text-neutralColor  border border-neutralColor focus-visible:border-greenButtonColor outline-none" placeholder="Senior User Experience Designer"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <div className="mt-[42px]">
              <FormField
                control={form.control}
                name="jobDescription"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Job Description</FormLabel>
                    <FormControl>
                    <Textarea {...field} className="resize-none lg:w-[840px] md:w-[560px] h-[190px] max-sm:w-[370px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <span className="text-neutralColor text-xxs font-medium">Maximum 2000 Words</span>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col max-sm:flex-col mt-[70px] gap-10">
            <FormField
                control={form.control}
                name="department"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Department</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="md:w-full lg:w-[400px] h-[48px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
                          <SelectValue placeholder="Select option"/>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Design">Design</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Developer">Developer</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Cto">CTO</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage/>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="hiringManagers"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Hiring Manager</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="md:w-full lg:w-[400px] h-[48px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
                      <SelectValue placeholder="Select option"/>
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Thomas Fletcher">Thomas Fletcher</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Paul Smith">Paul Smith</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="John Doe">John Doe</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="James Thomas">James Thomas</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="Jack Willson">Jack Willson</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex lg:flex-row md:flex-col max-sm:flex-col mt-[70px] gap-10">
            <FormField
                control={form.control}
                name="recruitmentPeriod"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Recruitment Period</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Select period" type='date' className="md:w-full lg:w-[400px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
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
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Job Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="md:w-full lg:w-[400px] h-[48px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
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
            <div className="flex lg:flex-row md:flex-col max-sm:flex-col mt-[70px] gap-10">
            <FormField
                control={form.control}
                name="recruitmentQuota"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Recruitment Quota</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Select period" className="md:w-full lg:w-[400px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="experience"
                render={({field}) => (
                  <FormItem>
                  <FormLabel className="text-neutralColor text-[15px] font-semibold">Experience in Years</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="5 Years" className="md:w-full lg:w-[400px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
                )}
              />
            </div>
            <div className="flex lg:flex-row md:flex-col  max-sm:flex-col mt-[70px] gap-10">
            <FormField
                control={form.control}
                name="salary"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Expected Salary</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter Salary" type='number' className="md:w-full lg:w-[400px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="locations"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-[15px] font-semibold">Locations</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="md:w-full lg:w-[400px] h-[48px] rounded-[12px] bg-cardColor text-neutralColor border border-neutralColor focus-visible:border-greenButtonColor outline-none">
                      <SelectValue placeholder="Choose Location"/>
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="New York, USA">New York, USA</SelectItem>
                        <SelectItem className="bg-cardColor border-none outline-none text-neutralColor" value="los Angeles, USA">Los Angeles, USA</SelectItem>
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
            <div className="mt-[70px]">
            <FormField
                control={form.control}
                name="skillsSets"
                render={({field}) => (
                  <FormItem>
                  <FormLabel className="text-neutralColor text-[15px] font-semibold">Skill Sets</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="e.g   figma, adobe xd, photoshop" type='number' className="md:w-full lg:w-[400px] h-[48px] rounded-[10px] bg-cardColor border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
                )}
              />
              <div className='flex gap-2 mt-2.5'>
                <span className='text-neutralColor text-sm bg-cardColor p-2 flex gap-1.5 items-center'>
                  Adobe xd
                  <X className='size-4 cursor-pointer'/>
                </span>
                <span className='text-neutralColor text-sm bg-cardColor p-2 flex gap-1.5 items-center'>
                  Figma
                  <X className='size-4 cursor-pointer'/>
                </span>
                <span className='text-neutralColor text-sm bg-cardColor p-2 flex gap-1.5 items-center'>
                  Sketch
                  <X className='size-4 cursor-pointer'/>
                </span>
              </div>
            </div>
            <div className='mt-10'>
              <button type='submit' className='text-white xl:w-[400px] md:w-full max-sm:w-full h-[48px] bg-greenButtonColor rounded-[10px]'>Publish This Job</button>
            </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AddJobForm