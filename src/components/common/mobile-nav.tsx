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
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger><Menu color="#92929D"/></SheetTrigger>
      <SheetContent side="left" className='bg-[#13131A]'>
        <SheetHeader>
          <SheetTitle>
            <Link href="/">
              <Image src={logo} alt='logo'/>
            </Link>
          </SheetTitle>
          <SheetDescription>
            <div className='flex flex-col gap-8 mt-11'>
              <Link href="/" className='text-[20px] text-greenButtonColor font-bold'>Overview</Link>
              <Link href="/" className='text-[20px] text-greenButtonColor font-bold'>Job Search</Link>
              <Link href="/" className='text-[20px] text-greenButtonColor font-bold'>Talent</Link>
              <Link href="/" className='text-[20px] text-greenButtonColor font-bold'>History</Link>
              <Link href="/" className='text-[20px] text-greenButtonColor font-bold'>Events</Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav