'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { TitleMotion } from '../variant';

const Hero = () => {
  return (
    <main id='home' className='relative overflow-hidden'>
      {/* Line Decoration */}
      <div className='absolute left-1/2 h-[70%] border border-neutral-800 md:h-full' />
      <div className='absolute left-1/4 hidden h-full border border-neutral-800 md:block' />

      {/* Block Decoration */}
      <div className='absolute bottom-[190px] left-0 z-30 grid grid-cols-3 md:bottom-0'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className={cn(
              `size-[34.5px] md:size-[46px]`,
              num % 2 === 0 ? 'bg-primary-400' : ''
            )}
          />
        ))}
      </div>

      <div className='mt-20'>
        {/* Line Decoration */}
        <div className='absolute left-3/4 h-[70%] border border-neutral-800 md:hidden' />

        {/* Hero Section */}
        <div className='flex flex-col'>
          {/* Content */}
          <TitleMotion className='z-30 flex flex-col gap-10 px-4 py-10 md:gap-[60px] md:px-[128px] md:pt-[141px] md:pb-[163px]'>
            <div className='flex flex-col gap-4 md:max-w-[807px]'>
              <div className='flex items-center gap-2'>
                <div className='border-neutral-25 h-[1px] w-[21px] border md:w-[114px]' />
                <p className='text-md-medium md:text-xl-medium text-neutral-25'>
                  Hi, I am Alfeus Rudyanta, a Frontend Developer
                </p>
              </div>
              <p className='display-lg-extrabold text-neutral-25 md:text-[80px] md:leading-[100%] md:font-extrabold'>
                BUILDING FAST &
                <span className='text-primary-200'> INTERACTIVE</span> WEB
                EXPERIENCES.
              </p>
              <p className='text-lg-medium md:text-xl-medium text-neutral-400'>
                Bridging creativity and functionality to deliver stunning,
                user-friendly web applications
              </p>
            </div>
            <Link href='#contact' className='md:max-w-[300px]'>
              <Button className='w-full'>HIRE ME</Button>
            </Link>
          </TitleMotion>
        </div>
      </div>

      {/* Profile */}
      <TitleMotion className='md:absolute md:top-0 md:right-0'>
        <div className='relative'>
          {/* Shadow Layer */}
          <div className='absolute bottom-0 left-0 z-10 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_-92.59%,#000000_88.93%)]' />
          {/* Half green background */}
          <div className='bg-primary-200 absolute bottom-0 left-1/2 h-full w-1/2' />
          {/* Image */}
          <Image
            alt='/profile-picture.png'
            src='/image/profile-picture.png'
            width={358}
            height={461}
            className='relative mx-auto mb-10 pr-3 mix-blend-luminosity grayscale md:mb-0 md:h-[872px] md:w-[658px] md:pr-8'
          />
          {/* Profile Content */}
          <div className='absolute inset-x-5 -bottom-10 z-20 flex flex-col gap-2 rounded-2xl border border-neutral-800 bg-black p-4 md:bottom-[84px] md:mx-auto md:max-w-[316px]'>
            <p className='display-xl-bold md:display-xl-bold text-neutral-25'>
              5.0
            </p>
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((num) => (
                <Image
                  key={num}
                  alt='star-icon'
                  src='/icon/star.svg'
                  width={24}
                  height={24}
                  className='size-8'
                />
              ))}
            </div>
            <p className='text-md-semibold md:text-xl-semibold text-neutral-25'>
              Many Client Trust with me
            </p>
          </div>
        </div>
      </TitleMotion>
    </main>
  );
};

export default Hero;
