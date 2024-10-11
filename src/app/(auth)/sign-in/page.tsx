
import SignInForm from '@/components/sign-in-form'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

const SignInPage = () => {
  return (
    <div>
      <Card className='w-[688px] max-sm:w-[410px] h-full bg-[#1c1c24] border-[#1C1C24] mx-auto max-sm:bg-transparent max-sm:border-none  rounded-[30px] lg:mt-[78px] max-sm:mt-[78px]'>
        <CardContent className='ml-[89px] max-sm:ml-[48px]'>
          <div>
            <div className="flex flex-col gap-[11px] mt-[49px] mb-[30px]">
              <h1 className="text-3xl text-white font-bold">Log In</h1>
              <span className="text-lg font-medium text-neutralColor">Find your next opportunity</span>
            </div>
            <div className="flex gap-5 max-sm:flex-col">
              <button className="text-white text-[15px] flex items-center justify-center gap-2.5 bg-greenButtonColor rounded-[10px] px-5 py-2 max-sm:w-[283px]">
                <FaGoogle className="w-[24px] h-[24px]"/>
                Sign in with Google
              </button>
              <button className="text-white text-[15px] flex items-center justify-center gap-2.5 bg-cardColorTwo rounded-[10px] px-5 py-2 max-sm:w-[283px]">
                <TiSocialLinkedinCircular className="w-[24px] h-[24px]"/>
                Sign in with Linkedin
              </button>
            </div>
            <div className="mt-[42px] flex items-center gap-5">
              <hr className="w-[158px] h-[1px] border-[#44444F] max-sm:w-[65px]" />
              <span className="text-neutral3Color text-[15px]">or Sign in with Email</span>
              <hr className="w-[158px] h-[1px] border-[#44444F] max-sm:w-[65px]" />
            </div>
            <div className='mt-[30px]'>
              <SignInForm/>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignInPage