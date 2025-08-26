'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import testimonialData from '@/app/constants/testimonial-data';
import { cn } from '@/lib/utils';

import { ContentMotion, TitleMotion } from '../variant';

const Testimonial = () => {
  const [itemPerPage, setItemPerPage] = useState<number>(3);

  useEffect(() => {
    const updateItem = () => {
      setItemPerPage(window.innerWidth < 768 ? 3 : 4);
    };

    updateItem();

    window.addEventListener('resize', updateItem);
    return () => window.removeEventListener('resize', updateItem);
  }, []);

  return (
    <div className='flex flex-col gap-6 px-4 py-10 md:gap-16 md:px-[128px] md:py-20'>
      {/* Title */}
      <TitleMotion className='flex flex-col gap-2 text-center'>
        <p className='text-md-medium text-primary-200 md:text-lg-medium'>
          TESTIMONIALS
        </p>
        <p className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold'>
          PEOPLE SAYS ABOUT ME
        </p>
      </TitleMotion>

      {/* Testimonial */}
      <Carousel opts={{ align: 'start' }}>
        <CarouselContent>
          {Array.from({
            length: Math.ceil(testimonialData.length / itemPerPage),
          }).map((_, pageIndex) => (
            <CarouselItem key={pageIndex} className='basis-full'>
              <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-x-6 md:gap-y-[35px]'>
                {testimonialData
                  .slice(
                    pageIndex * itemPerPage,
                    pageIndex * itemPerPage + itemPerPage
                  )
                  .map((data) => (
                    <TestimonialCard
                      key={data.id}
                      index={data.id}
                      companyLogo={data.companyLogo}
                      feedback={data.feedback}
                      name={data.name}
                      role={data.role}
                      starNumber={data.starNumber}
                    />
                  ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Prev / Next buttons */}
        <CarouselPrevious className='right-[calc(50%+8px)] bottom-0' />
        <CarouselNext className='bottom-0 left-[calc(50%+8px)]' />
      </Carousel>
    </div>
  );
};

export default Testimonial;

type TestimonialCard = {
  name: string;
  role: string;
  starNumber: number;
  companyLogo: string;
  feedback: string;
  className?: string;
  index: number;
};

const TestimonialCard: React.FC<TestimonialCard> = ({
  companyLogo,
  feedback,
  name,
  role,
  starNumber,
  className,
  index,
}) => {
  return (
    <ContentMotion
      index={index}
      className={cn(
        'flex flex-col gap-3 rounded-2xl border border-neutral-800 p-4 md:p-6',
        className
      )}
    >
      {/* Testimonial title */}
      <div className='flex items-center justify-between'>
        <div className='flex w-full flex-col gap-1'>
          <p className='text-lg-bold md:text-xl-bold text-neutral-25'>{name}</p>
          <p className='text-md-regular md:text-lg-medium text-neutral-400'>
            {role}
          </p>
        </div>

        <Image
          src={companyLogo}
          alt='company-logo'
          height={32}
          width={76}
          className='md:w-[118px]'
        />
      </div>

      {/* Star */}
      <div className='flex items-center'>
        {Array.from({ length: starNumber }).map((_, index) => (
          <Image
            key={index}
            alt='star-icon'
            src='/icon/star.svg'
            height={20}
            width={20}
          />
        ))}
      </div>

      {/* Feedback */}
      <p className='text-md-medium text-neutral-25'>{feedback}</p>
    </ContentMotion>
  );
};
