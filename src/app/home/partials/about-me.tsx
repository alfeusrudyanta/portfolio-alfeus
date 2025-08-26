'use client';

import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

import { TitleMotion } from '../variant';

const AboutMe = () => {
  return (
    <TitleMotion
      id='about'
      className='relative flex flex-col px-4 pt-10 md:px-[128px] md:py-[120px]'
    >
      {/* Text Content */}
      <div className='z-10 mx-auto mb-10 flex flex-col gap-4 text-center md:mb-0 md:gap-16'>
        {/* Title */}
        <div className='mx-auto flex max-w-[872px] flex-col gap-4'>
          <p className='text-md-medium text-primary-200 md:text-lg-medium'>
            ABOUT ME
          </p>
          <div className='flex flex-col gap-1'>
            <p className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold'>
              CRAFTING SEAMLESS
            </p>
            <p className='display-md-extrabold text-primary-200 md:display-2xl-extrabold'>
              HIGH-PERFORMANCE WEB
              <span className='text-neutral-25'> EXPERIENCES</span>
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p className='text-md-medium md:text-xl-medium max-w-[996px] text-neutral-400'>
          I love turning designs into interactive, high-performance websites.
          With a keen eye for detail and a deep understanding of frontend
          technologies, I create smooth and visually appealing user experiences.
        </p>
      </div>

      {/* Block Decoration */}
      <div className='absolute bottom-[9.5px] left-0 z-10 grid grid-cols-2 md:bottom-[3px]'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className={cn(
              `size-[34.5px] md:size-[46px]`,
              [1, 4, 5].includes(num) ? 'bg-primary-400' : ''
            )}
          />
        ))}
      </div>

      {/* Image */}
      <div className='relative mx-auto h-[288px] w-full max-w-[430px] md:h-0 md:max-w-[1010px]'>
        <Image
          src='/image/about-me-image-1.png'
          alt='about-me-image-project-1'
          width={170}
          height={127}
          className='absolute bottom-[161px] left-[40px] md:bottom-[280px] md:-left-[20px]'
          style={{ width: 'clamp(10.63rem, 16.53vw, 14.88rem)' }}
        />
        <Image
          src='/image/about-me-image-2.png'
          alt='about-me-image-project-2'
          width={134}
          height={99}
          className='absolute right-[35px] bottom-[144px] md:bottom-[230px]'
          style={{ width: 'clamp(8.38rem, 17.36vw, 15.63rem)' }}
        />
        <Image
          src='/image/about-me-image-3.png'
          alt='about-me-image-project-3'
          width={132}
          height={100}
          className='absolute right-1/3 bottom-[24px] md:right-1/5 md:bottom-[80px]'
          style={{ width: 'clamp(8.28rem, 8.13vw, 7.31rem)' }}
        />
      </div>
    </TitleMotion>
  );
};

export default AboutMe;
