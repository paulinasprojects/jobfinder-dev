import Navbar from "@/components/common/navbar";


export default function AccountSettingLayout({
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
