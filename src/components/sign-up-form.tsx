"use client";

import { z } from "zod"
import Link from "next/link";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const signUpFormSchema = z.object({
  firstName: z.string().min(1, {message: "First name is required"}),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().min(1, {message: "Email is required"}).email({ message: "Invalid email" }),
  password: z.string().min(1, {message: "Password is requred"}).min(8, {message: "Password must have at least 8 characters"}),
})

const SignUpForm = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof signUpFormSchema>) => {
    console.log(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex xl:flex-row max-sm:flex-col gap-7">
            <FormField
              control={form.control}
              name="firstName"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} className="w-[240px] max-sm:w-[283px] h-[52px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor" placeholder="First Name"/>
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
                  <FormControl>
                    <Input {...field} className="w-[240px] max-sm:w-[283px] h-[52px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor" placeholder="Last Name"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10 flex flex-col gap-10">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" {...field} className="w-[510px] h-[52px] max-sm:w-[283px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor" placeholder="Enter your email"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" {...field} className="w-[510px] h-[52px] max-sm:w-[283px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor" placeholder="Password"/>
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10">
            <button type="submit" className="bg-greenButtonColor text-white w-[510px] max-sm:w-[283px] h-[52px] rounded-[10px]">Sign Up</button>
          </div>
          <div className="mt-[30px] flex gap-2.5 items-center">
            <Checkbox className="w-[24px] h-[24px]"/>
            <label className="text-neutralColor text-[15px]">By continuing you accept our standard terms and conditions <br /> and our privecy policy</label>
          </div>
          <div className="mt-[30px] flex gap-2 items-center justify-center max-sm:justify-normal max-sm:ml-4">
            <span className="text-neutralColor text-[15px]">Already have an account?</span>
            <Link href="/sign-in" className="text-greenButtonColor hover:border-b hover:border-b-greenButtonColor">Login</Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignUpForm