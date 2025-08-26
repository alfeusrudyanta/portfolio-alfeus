'use client';

import { Monitor } from 'lucide-react';
import React from 'react';

import serviceData from '@/app/constants/service-data';

import { ContentMotion, TitleMotion } from '../variant';

const Service = () => {
  return (
    <main className='flex flex-col gap-6 px-4 py-10 md:gap-16 md:p-[129px]'>
      <TitleMotion className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div className='flex w-full max-w-[509px] flex-col gap-2'>
          <p className='text-md-medium md:text-lg-medium text-primary-200'>
            SERVICE
          </p>
          <p className='display-md-extrabold md:display-2xl-extrabold text-neutral-25'>
            MY SERVICE EXPERTISE
          </p>
        </div>
        <p className='text-md-medium md:text-lg-medium w-full text-neutral-400 md:max-w-[504px] md:text-left'>
          Creating modern, intuitive, and visually consistent web experiences
          that align with industry trends and user expectations.
        </p>
      </TitleMotion>

      <div className='flex flex-col gap-6 md:flex-row md:items-stretch md:gap-10'>
        {serviceData.map((data, index) => (
          <ServiceCard
            key={data.label}
            label={data.label}
            description={data.description}
            index={index}
            title={data.title}
          />
        ))}
      </div>
    </main>
  );
};

export default Service;

type ServiceCard = {
  label: string;
  title: string;
  description: string;
  index: number;
};

const ServiceCard: React.FC<ServiceCard> = ({
  description,
  label,
  title,
  index,
}) => {
  return (
    <ContentMotion index={index} className='flex flex-col gap-3 md:gap-6'>
      <p className='text-md-semibold md:text-xl-semibold text-neutral-400'>
        {label}
      </p>
      <div className='w-full border border-neutral-800' />
      <Monitor height={32} width={32} className='text-primary-200' />
      <p className='text-xl-semibold md:display-sm-semibold text-neutral-25'>
        {title}
      </p>
      <p className='text-md-regular md:text-xl-regular text-neutral-400'>
        {description}
      </p>
    </ContentMotion>
  );
};
