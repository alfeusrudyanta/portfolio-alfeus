import { Variants, MotionProps, motion } from 'framer-motion';
import React, { HTMLAttributes } from 'react';

/* Title Variant */
const titleVariant: Variants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
};

type TitleMotionProps = MotionProps &
  HTMLAttributes<HTMLDivElement> & { children: React.ReactNode };

export const TitleMotion: React.FC<TitleMotionProps> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      variants={titleVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* Content Variant */
const contentVariant: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.1 * index, ease: 'easeInOut' },
  }),
};

type ContentMotionProps = MotionProps &
  HTMLAttributes<HTMLDivElement> & { children: React.ReactNode; index: number };

export const ContentMotion: React.FC<ContentMotionProps> = ({
  children,
  index,
  ...props
}) => {
  return (
    <motion.div
      custom={index}
      variants={contentVariant}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/* Button Container Variant */
export const buttonContainerVariant: Variants = {
  hidden: {},
  visible: {},
};

export const buttonVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};
