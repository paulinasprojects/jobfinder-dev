import Image from "next/image";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { linkedin } from "@/lib/images";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const applicationSchema = z.object({
  firstName: z.string().min(1, {message: "First name is required"}),
  lastName: z.string().min(1, {message: "Last name is requred"}),
  phoneNumber: z.coerce.number().min(1, {message: "Phone number is required"}),
  country: z.string().min(1, {message: "Country is required"}),
  email: z.string().min(1, {message: "Email is requred"}).email({message: "Email is invalid"}),
  shortBio: z.string().min(1, {message: "Please fill the short bio"}),
})

const ApplicationForm = () => {
  const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: 0,
      country: "",
      email: "",
      shortBio: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof applicationSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-7 max-sm:flex-col">
      <div className="flex flex-col gap-[9px]">
        <label className="text-neutralColor text-sm" htmlFor="linkedin">Linkedin Profile</label>
        <button className="text-white text-sm w-[374px] h-[48px] bg-[#1275B1] rounded-[10px] flex items-center justify-start">
          <Image
            src={linkedin}
            alt="linkedin"
          />
          Apply With Linkedin
        </button>
        </div>
        <div className="flex flex-col gap-[9px]">
          <label htmlFor="inputField" className="text-neutralColor text-sm">Resume / CV*</label>
          <label htmlFor="inputField" className="w-[374px] h-[48px] rounded-[10px] text-neutralColor bg-[#21212B] flex items-center justify-start p-5 text-sm">Attach Resume / CV</label>
          <input required type="file" className="hidden" title=" " id="inputField" />
        </div>
      </div>
      <div className="mt-5 ml-10 mb-7">
        <Separator className="bg-[#21212B]"/>
      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex xl:flex-row max-sm:flex-col gap-7 ">
              <FormField
                control={form.control}
                name="firstName"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">First Name</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="First name" className="w-[374px] h-[46px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
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
                      <Input {...field} placeholder="Last name" className="w-[374px] h-[46px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex xl:flex-row max-sm:flex-col gap-7 mt-8">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Phone Number</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Phone" className="w-[374px] h-[46px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor" type="number"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Country</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Country" className="w-[374px] h-[46px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8">
            <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} placeholder="Your Email Address" className="w-[776px] h-[48px] max-sm:w-[327px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8">
            <FormField
                control={form.control}
                name="shortBio"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-neutralColor text-sm">Short Bio</FormLabel>
                    <FormControl>
                     <Textarea {...field} className="resize-none w-[778px] h-[96px] max-sm:w-[327px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor"/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-8 flex items-center gap-2">
              <Checkbox 
              />
              <label className='text-neutralColor text-sm'>I agree with terms & conditions</label>
            </div>
            <div className="mt-8 mb-8">
                <button type="submit" className="w-[778px] h-[52px] max-sm:w-[327px] rounded-[10px] bg-greenButtonColor text-white text-md">Submit Application</button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ApplicationForm