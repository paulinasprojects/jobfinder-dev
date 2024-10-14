"use client";

import { Bell, ChevronDown, Mail, Briefcase, Moon, Zap } from "lucide-react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils";
import { profile, logo } from "@/lib/images";
import MobileNav from "./mobile-nav";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const routes = [
    {
      href: "/",
      label: "Overview",
      active: pathname === "/"
    },
    {
      href: "/job-search",
      label: "Job Search",
      active: pathname.startsWith("/job")
    },
    {
      href: "/talent",
      label: "Talent",
      active: pathname.startsWith("/talent")
    },
    {
      href: "/history",
      label: "History",
      active: pathname === "/history"
    },
    {
      href: "/events",
      label: "Events",
      active: pathname === "/events"
    },
  ]


  return (
    <div className="flex items-center p-5 border-b border-b-cardColorTwo">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="hidden lg:flex ml-4"
        />
      </Link>
      <div className="hidden md:flex gap-7 items-center justify-center ml-auto">
        {routes.map((route) => (
        <Link key={route.href} href={route.href} className={cn(
          "text-greenButtonColor",
          route.active ? "border-b-2 border-greenButtonColor p-2" : "text-neutralColor"
        )}>{route.label}</Link>
        ))}
      </div>
      <div className="hidden max-sm:flex">
        <MobileNav/>
      </div>
      <div className="ml-auto flex items-center gap-11 mr-9 max-sm:gap-6 max-sm:mr-0">
        <button className="w-[99px] h-[34px] rounded-[10px] text-greenButtonColor bg-[#122224]" onClick={() => router.push("/add-job")}>Post Job</button>
        <Bell className="cursor-pointer text-neutralColor"/>
        <Mail className="cursor-pointer text-neutralColor"/>
        <div className="flex items-center gap-2">
        <Image
          src={profile}
          alt="profile"
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown className="text-neutralColor cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-cardColor border-none rounded-[16px] w-[280px] h-[467px] mr-[76px] max-sm:mr-[24px] text-white">
            <DropdownMenuItem className="focus:bg-transparent">
              <div className="flex items-center gap-[12px] mt-[16px] ml-[16px]">
                <Image
                  alt="profile image"
                  src={profile}
                  className="w-[34px] h-[34px]"
                />
                <div className="flex flex-col gap-1.5">
                  <span className="text-white text-[15px] font-bold">Thomas L. Fletcher</span>
                  <Link href="/account-settings" className="text-neutralColor text-[15px] font-semibold">Edit Profile</Link>
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
                  <span className="text-neutralColor text-[15px] font-semibold">My Jobs</span>
                </div>
                <div className="flex gap-[14px] items-center">
                  <IoDocumentTextOutline className="text-neutralColor w-[24px] h-[24px]"/>
                  <span className="text-neutralColor text-[15px] font-semibold">My Resume</span>
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
                <Link href="/account-settings" className="text-neutralColor text-[15px] font-semibold">Account settings</Link>
                <span className="text-neutralColor text-[15px] font-semibold">Log out</span>
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
        </div>
      </div>
    </div>
  )
}

export default Navbar