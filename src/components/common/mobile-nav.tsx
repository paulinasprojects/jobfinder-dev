import logo from '/public/Logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger><Menu className='text-neutralColor'/></SheetTrigger>
      <SheetContent side="left" className='bg-[#13131A] border-[#13131a]'>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Image src={logo} alt='logo'/>
            </Link>
          </SheetTitle>
          <SheetDescription>
            <div className='flex flex-col gap-8 mt-11'>
              <Link href="/" className='text-[20px] text-greenButtonColor font-bold hover:text-neutralColor'>Overview</Link>
              <Link href="/job-search" className='text-[20px] text-greenButtonColor font-bold hover:text-neutralColor'>Job Search</Link>
              <Link href="/talent" className='text-[20px] text-greenButtonColor font-bold hover:text-neutralColor'>Talent</Link>
              <Link href="/history" className='text-[20px] text-greenButtonColor font-bold hover:text-neutralColor'>History</Link>
              <Link href="/events" className='text-[20px] text-greenButtonColor font-bold hover:text-neutralColor'>Events</Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav