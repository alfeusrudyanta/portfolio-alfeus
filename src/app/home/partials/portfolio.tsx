'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/button';

import portfolioData from '@/app/constants/portfolio';

import {
  buttonContainerVariant,
  buttonVariant,
  ContentMotion,
  TitleMotion,
} from '../variant';

const Portfolio = () => {
  return (
    <div
      id='projects'
      className='flex flex-col gap-6 px-4 py-[50px] md:gap-16 md:px-[128px] md:py-20'
    >
      {/* Title */}
      <TitleMotion className='flex flex-col items-center justify-center gap-2 text-center'>
        <p className='text-md-medium text-primary-200 md:text-lg-medium'>
          PORTFOLIO
        </p>
        <p className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold'>
          SELECTED WORK
        </p>
      </TitleMotion>

      {/* Portfolio List */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-5 md:gap-y-12'>
        {portfolioData.map((data) => (
          <PortfolioCard
            key={data.id}
            index={data.id}
            description={data.description}
            image={data.image}
            link={data.link}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

type PortfolioCard = {
  image: string;
  title: string;
  description: string;
  link: string;
  index: number;
};

const PortfolioCard: React.FC<PortfolioCard> = ({
  description,
  image,
  link,
  title,
  index,
}) => {
  return (
    <Link href={link} target='_blank'>
      <ContentMotion index={index} className='flex flex-col gap-3'>
        <motion.div
          variants={buttonContainerVariant}
          initial='hidden'
          whileHover='visible'
          className='group relative w-auto overflow-hidden rounded-3xl'
        >
          <Image
            src={image}
            alt='work-image'
            height={361}
            width={270}
            className='w-full transform object-cover transition-transform duration-500 ease-out group-hover:scale-105'
          />
          <motion.div
            variants={buttonVariant}
            className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'
          >
            <Button
              className='h-20 w-20 md:h-[100px] md:w-[100px]'
              variant={'white'}
            >
              VISIT
            </Button>
          </motion.div>
        </motion.div>
        <p className='text-xl-bold text-neutral-25 md:display-xs-bold'>
          {title}
        </p>
        <p className='text-sm-regular md:text-md-regular text-neutral-400'>
          {description}
        </p>
      </ContentMotion>
    </Link>
  );
};
