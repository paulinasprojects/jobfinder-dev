"use client";

import Image from "next/image"
import Link from "next/link"
import { Bell, ChevronDown, Mail } from "lucide-react";
import logo from '/public/Logo.png';
import profile from '/public/profile.png';
import MobileNav from "./mobile-nav";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Overview",
      active: pathname === "/"
    },
    {
      href: "/job-search",
      label: "Job Search",
      active: pathname === "/job-search"
    },
    {
      href: "/talent",
      label: "Talent",
      active: pathname === "/talent"
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
    <div className="flex items-center p-5 ml-4">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          className="hidden lg:flex"
        />
      </Link>
      <div className="hidden md:flex gap-7 items-center justify-center ml-auto">
        {routes.map((route) => (
        <Link href={route.href} className={cn(
          "text-greenButtonColor",
          route.active ? "border-b-2 border-greenButtonColor p-2" : "text-neutralColor"
        )}>{route.label}</Link>
        ))}
      </div>
      <div className="hidden max-sm:flex">
        <MobileNav/>
      </div>
      <div className="ml-auto flex items-center gap-11 mr-9 max-sm:gap-6 max-sm:mr-0">
        <button className="w-[99px] h-[34px] rounded-[10px] text-greenButtonColor bg-[#122224]">Post Job</button>
        <Bell className="cursor-pointer" color="#92929D"/>
        <Mail className="cursor-pointer" color="#92929D"/>
        <div className="flex items-center gap-2">
        <Image
          src={profile}
          alt="profile"
        />
        <ChevronDown color="#92929d"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar