'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import whyChooseMeData from '@/app/constants/why-choose-me-data';
import { cn } from '@/lib/utils';

import { ContentMotion, TitleMotion } from '../variant';

const WhyChooseMe = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 px-4 py-10 md:gap-12 md:px-[120px] md:py-20'>
      {/* Title */}
      <TitleMotion className='flex flex-col gap-2 text-center'>
        <p className='text-md-medium text-primary-200 md:text-lg-medium'>
          WORKING
        </p>
        <p className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold'>
          WHY CHOOSE ME?
        </p>
      </TitleMotion>

      <div className='flex w-full flex-col items-center justify-center gap-12 md:flex-row md:gap-20'>
        {whyChooseMeData.map((profile, index) => (
          <WhyChooseMeCard
            key={index}
            index={index}
            benefit={profile.benefit}
            imgAlt={profile.imgAlt}
            imgSrc={profile.imgSrc}
            title={profile.title}
          />
        ))}
      </div>

      <Link href='#contact' className='w-full max-w-[360px] md:max-w-[240px]'>
        <TitleMotion>
          <Button className='w-full'>HIRE ME</Button>
        </TitleMotion>
      </Link>
    </div>
  );
};

export default WhyChooseMe;

type WhyChooseMeCard = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  benefit: string[];
  index: number;
};

const WhyChooseMeCard: React.FC<WhyChooseMeCard> = ({
  benefit,
  imgAlt,
  imgSrc,
  title,
  index,
}) => {
  return (
    <TitleMotion className='flex w-full flex-1 flex-col gap-6 md:max-w-[560px] md:gap-8'>
      <p className='text-xl-bold text-neutral-25 md:display-sm-bold text-center'>
        {title}
      </p>
      <div className='mx-auto flex h-[60px] w-[60px] justify-center overflow-hidden rounded-full border border-none md:h-20 md:w-20'>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={60}
          height={60}
          className='object-cover md:h-20 md:w-20'
        />
      </div>
      <div className='flex flex-col gap-6 md:gap-8'>
        {benefit.map((benefit, benefitIndex) => (
          <ContentMotion
            index={benefitIndex}
            key={'benefit' + benefitIndex}
            className='flex w-full flex-col gap-6 md:gap-8'
          >
            <div className='flex items-center gap-3'>
              <Image
                alt='star'
                src={
                  index === 0
                    ? '/icon/star-light-icon.svg'
                    : '/icon/star-dark-icon.svg'
                }
                width={24}
                height={24}
                className='md:h-8 md:w-8'
              />
              <p className='text-md-bold text-neutral-25 md:text-md-bold'>
                {benefit}
              </p>
            </div>

            {(benefitIndex < benefit.length - 1 ||
              (index === 0 && benefitIndex === 5)) && (
              <div
                className={cn(
                  'border border-neutral-800',
                  benefitIndex === 5 && 'md:hidden'
                )}
              />
            )}
          </ContentMotion>
        ))}
      </div>
    </TitleMotion>
  );
};
