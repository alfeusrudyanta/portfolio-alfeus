'use client';

import Image from 'next/image';
import React from 'react';

import faqData from '@/app/constants/faq-data';
import { cn } from '@/lib/utils';

import { ContentMotion, TitleMotion } from '../variant';

const Faq = () => {
  return (
    <div
      id='faq'
      className='flex flex-col gap-6 px-4 py-10 md:gap-16 md:px-[128px] md:py-20'
    >
      {/* Title */}
      <TitleMotion className='flex flex-col gap-2 text-center'>
        <p className='text-md-medium text-primary-200 md:text-lg-medium'>FAQ</p>
        <p className='display-md-bold text-neutral-25 md:display-2xl-extrabold'>
          FREQUENTLY ASKED QUESTIONS
        </p>
      </TitleMotion>

      {/* Q&A */}
      <div className='flex flex-col md:gap-10'>
        {faqData.map((_, index) => {
          if (index % 2 !== 0) return null;

          const left = faqData[index];
          const right = faqData[index + 1];

          return (
            <div
              className={cn(
                `flex flex-col md:mb-0 md:gap-10`,
                index - 2 <= 0 && 'mb-4'
              )}
              key={`faq-row-${index}`}
            >
              <div className='flex flex-col gap-4 md:w-full md:flex-row md:gap-10'>
                {/* Left column */}
                <ContentMotion
                  index={index}
                  className='flex flex-1 flex-col gap-4'
                >
                  <FaqCard answer={left.answer} question={left.question} />
                  <div className='border border-neutral-800 md:hidden' />
                </ContentMotion>

                {/* Middle divider */}
                <div className='hidden md:flex md:h-auto md:w-[1px] md:border md:border-neutral-800' />

                {/* Right column */}
                {right && (
                  <ContentMotion
                    index={index + 1}
                    className='flex flex-1 flex-col gap-4'
                  >
                    <FaqCard answer={right.answer} question={right.question} />
                    {index + 2 < faqData.length && (
                      <div className='border border-neutral-800 md:hidden' />
                    )}
                  </ContentMotion>
                )}
              </div>

              {index - 2 <= 0 && (
                <div className='md:w-full md:border md:border-neutral-800' />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;

type FaqData = {
  question: string;
  answer: string;
};

const FaqCard: React.FC<FaqData> = ({ answer, question }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2 md:gap-6'>
        <div className='flex items-start gap-3'>
          <Image
            src='/icon/star-light-icon.svg'
            alt='star-icon'
            width={24}
            height={24}
            className='md:h-8 md:w-8'
          />
          <p className='text-lg-bold text-neutral-25 md:display-xs-bold'>
            {question}
          </p>
        </div>

        <p className='text-sm-medium md:text-md-medium text-neutral-400'>
          {answer}
        </p>
      </div>
    </div>
  );
};
