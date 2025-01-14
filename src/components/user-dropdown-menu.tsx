import { Briefcase, ChevronDown, Moon, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { profile } from "@/lib/images";
import { IoDocumentTextOutline } from "react-icons/io5"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const UserDropdownMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
      <ChevronDown className="text-neutralColor cursor-pointer" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-cardColor border-none rounded-[16px] pb-4 lg:mr-[76px] md:mr-[24px] max-sm:mr-[24px] text-white">
      <DropdownMenuItem className="focus:bg-transparent">
        <div className="flex items-center gap-[12px] mt-[16px] ml-[16px]">
          <Image
            alt="profile image"
            src={profile}
            className="w-[34px] h-[34px]"
          />
          <div className="flex flex-col gap-1.5">
            <span className="text-white text-[15px] font-bold">Thomas L. Fletcher</span>
            <Link href="/account-settings" className="text-neutralColor text-[15px] font-semibold hover:text-greenButtonColor">Edit Profile</Link>
          </div>
          <ChevronDown className="mb-2 text-neutralColor"/>
        </div>
      </DropdownMenuItem>
      <div className="mt-[12px] mb-[12px]">
      <DropdownMenuSeparator className="bg-[#44444F] w-[248px] ml-4"/>
      </div>
      <DropdownMenuItem className="focus:bg-transparent">
        <div className="flex flex-col gap-[24px] ml-[16px]">
          <div className="flex gap-[14px] items-center">
            <Briefcase className="text-neutralColor"/>
            <Link href="#" className="text-neutralColor text-[15px] font-semibold hover:text-greenButtonColor">My Jobs</Link>
          </div>
          <div className="flex gap-[14px] items-center">
            <IoDocumentTextOutline className="text-neutralColor w-[24px] h-[24px]"/>
            <Link href="#" className="text-neutralColor text-[15px] font-semibold hover:text-greenButtonColor">My Resume</Link>
          </div>
          <div className="flex gap-[14px] items-center">
            <Moon className="text-neutralColor"/>
            <span className="text-neutralColor text-[15px] font-semibold">Dark Mode</span>
          </div>
        </div>
      </DropdownMenuItem>
      <div className="mt-[12px] mb-[12px]">
      <DropdownMenuSeparator className="bg-[#44444F] w-[248px] ml-4"/>
      </div>
      <DropdownMenuItem  className="focus:bg-transparent">
        <div className="flex flex-col gap gap-[30px] ml-[16px]">
          <Link href="/account-settings" className="text-neutralColor text-[15px] font-semibold hover:text-greenButtonColor">Account settings</Link>
          <Link href="#" className="text-neutralColor text-[15px] font-semibold hover:text-greenButtonColor w-full">Log out</Link>
        </div>
      </DropdownMenuItem>
      <div className="mt-[20px] mb-[12px]">
      <DropdownMenuSeparator className="bg-[#44444F] w-[248px] ml-4"/>
      </div>
      <DropdownMenuItem  className="focus:bg-transparent">
        <div className="ml-[16px] flex items-center gap-[12px] mt-[12px]">
          <Zap className="text-neutralColor"/>
          <span className="text-greenButtonColor text-[15px] font-bold">Upgrade to Pro</span>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default UserDropdownMenu