"use client";

import { Bell, ChevronDown, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils";
import { profile, logo } from "@/lib/images";
import MobileNav from "./mobile-nav";

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
        <ChevronDown className="text-neutralColor cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Navbar