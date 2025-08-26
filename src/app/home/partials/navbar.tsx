'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import {
  SheetTitle,
  SheetContent,
  SheetHeader,
  Sheet,
  SheetTrigger,
} from '@/components/ui/sheet';

import navigationData from '@/app/constants/navbar-data';

const Navbar: React.FC = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth > 768) {
        setIsOpen(false);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='fixed inset-x-0 z-50 mx-auto flex h-20 w-full items-center border-b border-neutral-800 bg-black/60'>
      <div className='custom-container flex w-full items-center'>
        <div className='mx-auto flex w-full items-center justify-between gap-8 px-4 md:px-32'>
          <Link href='#home' className='group flex items-center gap-2'>
            <div className='group-hover:border-primary-200 w-6 border border-white md:w-10' />
            <p className='text-primary-200 text-md-bold md:text-xl-bold w-full whitespace-nowrap'>
              Alfeus Rudyanta.
            </p>
          </Link>
          <ul className='hidden gap-8 md:flex'>
            {navigationData.map((item) => (
              <Link key={item.label} href={item.href}>
                <li className='text-md-regular hover:text-primary-200 hidden cursor-pointer text-white md:inline'>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Image
                src='/icon/menu-bar.svg'
                alt='menu-bar'
                height={24}
                width={24}
                className='text-md-regular inline cursor-pointer text-white md:hidden'
              />
            </SheetTrigger>

            <SheetContent side='right' className='bg-black'>
              <SheetHeader className='border-b border-white'>
                <SheetTitle>
                  <Link
                    href='#home'
                    className='group flex h-20 w-full items-center gap-2 px-4'
                  >
                    <div className='group-hover:border-primary-200 w-6 border border-white md:w-10' />
                    <p className='text-primary-200 text-md-bold md:text-xl-bold w-full cursor-pointer whitespace-nowrap'>
                      Alfeus Rudyanta.
                    </p>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <ul className='flex flex-col gap-4 px-4'>
                {navigationData.map((item) => (
                  <Link key={item.label} href={item.href}>
                    <li className='text-md-regular hover:text-primary-200 cursor-pointer text-white'>
                      {item.label}
                    </li>
                  </Link>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
