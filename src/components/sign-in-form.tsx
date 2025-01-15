"use client";

import { z } from "zod"
import Link from "next/link";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";

const signInFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required"}),
})



const SignInForm = () => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof signInFormSchema>) => {
    console.log(values);
  }


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-7">
            <FormField
              control={form.control}
              name="email"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} type="email" className="w-[510px] h-[52px] max-sm:w-[283px] rounded-[10px] bg-transparent border border-neutralColor focus-visible:border-greenButtonColor outline-none text-neutralColor" placeholder="Your Email Address"/>
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
            <button type="submit" className="bg-greenButtonColor text-white w-[510px] max-sm:w-[283px] h-[52px] rounded-[10px] hover:bg-transparent hover:text-greenButtonColor hover:border-[1.5px] hover:border-greenButtonColor">Sign In</button>
          </div>
          <div className="mt-[30px] flex gap-2 items-center justify-center max-sm:justify-normal max-sm:ml-4">
            <span className="text-neutralColor text-[15px]">Don&apos;t have an account?</span>
            <Link href="/sign-up" className="text-greenButtonColor hover:border-b hover:border-b-greenButtonColor">Register</Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default SignInForm