'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { skillsData, proficiencyData } from '@/app/constants/skills-data';

import { TitleMotion } from '../variant';

const Skills = () => {
  return (
    <div
      id='skill'
      className='flex flex-col justify-center gap-10 px-4 py-10 md:flex-row md:items-center md:gap-[58px] md:px-[128px] md:py-20'
    >
      <TitleMotion className='flex flex-col gap-6 md:max-w-[524px] md:gap-[58px]'>
        {/* Title */}
        <div className='flex flex-col gap-2'>
          <p className='text-md-medium text-primary-200 md:text-lg-medium'>
            SKILLS
          </p>
          <p className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold'>
            SKILLS THAT BRING IDEAS TO LIFE
          </p>
        </div>

        {/* Icon */}
        <div className='flex flex-col gap-6'>
          <div className='flex gap-6'>
            {skillsData.slice(0, 4).map((icon) => (
              <SkillsCard key={icon.label} label={icon.label} src={icon.src} />
            ))}
          </div>

          <div className='flex gap-6'>
            {skillsData.slice(4).map((icon) => (
              <SkillsCard key={icon.label} label={icon.label} src={icon.src} />
            ))}
          </div>
        </div>
      </TitleMotion>

      {/* Skills proficiency */}
      <TitleMotion className='flex w-full flex-col justify-between gap-4 md:max-w-[602px]'>
        {proficiencyData.map((skill) => (
          <ProficiencyCard
            key={skill.label}
            label={skill.label}
            percentage={skill.percentage}
          />
        ))}
      </TitleMotion>
    </div>
  );
};

export default Skills;

type Counter = {
  from: number;
  to: number;
  duration: number;
  suffix?: string;
};

const Counter: React.FC<Counter> = ({ duration, from, to, suffix = '' }) => {
  const [currentValue, setCurrentValue] = useState<number>(from);
  const control = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = from;
      const end = to;
      const frameRate = 60;
      const increment = (end - start) / (duration * frameRate);
      let currentFrame = 0;
      const totalFrame = duration * frameRate;

      const interval = setInterval(() => {
        start += increment;
        currentFrame++;
        if (currentFrame >= totalFrame) {
          start = end;
          clearInterval(interval);
        }
        setCurrentValue(Math.floor(start));
      }, 1000 / frameRate);

      control.start({ opacity: 1, transition: { duration: 0.5 } });

      return () => clearInterval(interval);
    }
  }, [control, duration, from, inView, to]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={control}
      className='text-sm-semibold md:text-xl-semibold min-w-auto text-right text-white'
    >
      {currentValue}
      {suffix}
    </motion.span>
  );
};

type SkillsCard = {
  label: string;
  src: string;
};

const SkillsCard: React.FC<SkillsCard> = ({ label, src }) => {
  return (
    <div className='flex h-12 w-12 items-center justify-center rounded-full border-[0.6px] border-neutral-800 md:h-16 md:w-16'>
      <Image
        alt={label}
        src={src}
        width={38.4}
        height={38.4}
        className='md:h-[51.2px] md:w-[51.2px]'
      />
    </div>
  );
};

type ProficiencyCard = {
  label: string;
  percentage: number;
};

const ProficiencyCard: React.FC<ProficiencyCard> = ({ label, percentage }) => {
  return (
    <div className='flex items-center gap-4 md:gap-6'>
      <div className='relative flex h-10 w-full items-center md:h-16'>
        <p className='text-sm-semibold md:text-lg-semibold text-neutral-25 z-20 ml-4'>
          {label}
        </p>
        <motion.div
          className='bg-primary-300 absolute z-10 h-full w-full rounded-[20px]'
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: `${percentage}%` }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            backgroundImage: `repeating-linear-gradient(
                  45deg,
                  rgba(255,255,255,0.2) 0,
                  rgba(255,255,255,0.2) 1px,
                  transparent 1px,
                  transparent 10px
                )`,
          }}
        />
        <div className='absolute top-1/2 h-[1px] w-full border border-neutral-800' />
      </div>
      <div className='w-full max-w-[43px] md:w-[49px]'>
        <Counter
          duration={0.8}
          from={0}
          to={percentage}
          key={label}
          suffix='%'
        />
      </div>
    </div>
  );
};
