'use client';

import { easeInOut, motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { experienceData } from '@/app/constants/experience-data';
import { cn } from '@/lib/utils';

import { ContentMotion, TitleMotion } from '../variant';

const Experience = () => {
  return (
    <div className='relative flex flex-col gap-6 px-4 py-10 md:gap-16 md:px-[128px] md:py-20'>
      <TitleMotion className='flex flex-col items-center justify-center gap-2 text-center'>
        <p className='text-md-medium text-primary-200 md:text-lg-medium'>
          EXPERIENCE
        </p>
        <p className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold'>
          PROFESIONAL WORK
        </p>
      </TitleMotion>

      <div className='relative flex flex-col gap-4 md:gap-0'>
        {experienceData.map((company) => {
          return (
            <div
              key={'company-' + company.id}
              className='static md:flex md:gap-16'
            >
              <ExperienceCard
                description={company.description}
                id={company.id}
                image={company.image}
                role={company.role}
                year={company.year}
                lastIndex={experienceData.length}
              />
            </div>
          );
        })}
      </div>

      {/* Block Decoration */}
      <div className='absolute right-0 -bottom-[81.55px] z-10 grid grid-cols-2 md:bottom-[0px]'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className={cn(
              `size-[34.5px] md:size-[46px]`,
              [2, 3, 6].includes(num) ? 'bg-primary-400' : ''
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;

type ExperienceCard = {
  id: number;
  year: string;
  role: string;
  description: string;
  image: string;
  lastIndex: number;
};

const ExperienceCard: React.FC<ExperienceCard> = ({
  description,
  id,
  image,
  role,
  year,
  lastIndex,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start({
        height: '100%',
        backgroundColor: '#252b37',
      });
    }
  }, [inView, control]);

  return (
    <ContentMotion
      index={id}
      ref={ref}
      className={cn(
        'relative flex flex-row items-center gap-4 md:gap-16',
        id % 2 === 0 && 'md:flex-row-reverse'
      )}
    >
      {/* Blank space */}
      <div className='hidden md:flex md:flex-1' />

      {/* Line */}
      {id < lastIndex && (
        <motion.div
          initial={{ height: 0, backgroundColor: '#92ff04' }}
          animate={control}
          transition={{ duration: 1, ease: easeInOut }}
          className='absolute top-1/2 left-5 z-10 h-[calc(50%+16px)] w-[1px] bg-neutral-800 md:left-1/2 md:h-1/2'
        />
      )}
      {!(id === 1) && (
        <div className='absolute top-0 left-5 h-[calc(50%+16px)] w-[1px] bg-neutral-800 md:left-1/2 md:h-1/2' />
      )}

      {/* Number */}
      <div className='flex flex-shrink-0 items-center justify-center'>
        <div className='text-sm-bold md:text-md-bold text-primary-200 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-black md:h-12 md:w-12'>
          {id}
        </div>
      </div>

      {/* Company detail */}
      <div className='flex flex-1'>
        <div className='flex flex-col gap-4 rounded-2xl border border-neutral-800 p-4 md:rounded-3xl md:p-6'>
          <div className='flex flex-col gap-1 md:flex-row md:justify-between md:gap-4'>
            <div className='flex flex-col gap-1'>
              <p className='text-sm-regular md:text-lg-medium text-neutral-400'>
                {year}
              </p>
              <p className='text-md-bold text-neutral-25 md:display-xs-bold'>
                {role}
              </p>
            </div>
            <Image
              src={image}
              alt='company-log'
              width={76}
              height={32}
              className='md:w-[114px]'
            />
          </div>
          <p className='text-sm-regular md:text-md-regular text-neutral-400'>
            {description}
          </p>
        </div>
      </div>
    </ContentMotion>
  );
};
