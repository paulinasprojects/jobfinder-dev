import type { Metadata } from "next";
import Navbar from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "JobIt - Job Finder App",
  description: "Generated by create next app",
};

export default function AddJobLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
       <Navbar/>
       {children}
    </div>
  );
}
