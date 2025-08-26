'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import ErrorDialog from '@/components/ui/ErrorDialog';
import SuccessDialog from '@/components/ui/SuccessDialog';

import contactMeData from '@/app/constants/contact-me-data';
import { cn } from '@/lib/utils';

import { TitleMotion } from '../variant';

const ContactMe = () => {
  const [successOpen, setSuccessOpen] = useState<boolean>(false);
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      message: String(fd.get('message') || ''),
    };

    try {
      const res = await fetch('api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(await res.text());
      setErrorOpen(false);
      setSuccessOpen(true);
      form.reset();
    } catch (err: any) {
      setErrorOpen(true);
      console.error(err?.message || err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      id='contact'
      className='relative flex flex-col items-center md:flex-row md:justify-between md:gap-28 md:px-[128px] md:py-20'
    >
      {/* Block Decoration */}
      <div className='absolute top-3 left-0 z-30 grid grid-cols-3 md:top-0'>
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className={cn(
              `size-[34.5px] md:size-[46px]`,
              num % 2 === 1 ? 'bg-primary-400' : ''
            )}
          />
        ))}
      </div>
      <div className='absolute right-0 bottom-0 z-30 grid grid-cols-3'>
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

      {/* Dialog */}
      <SuccessDialog isOpen={successOpen} setIsOpen={setSuccessOpen} />
      <ErrorDialog
        isOpen={errorOpen}
        setIsOpen={setErrorOpen}
        onRetry={() => formRef.current?.requestSubmit()}
      />

      {/* Profile data */}
      <TitleMotion className='relative mx-[22px] mt-3 mb-10 md:mx-0 md:my-0 md:flex-[4.2]'>
        {/* Image */}
        <Image
          src='/image/profile-picture.png'
          alt='profile-picture'
          height={461}
          width={348}
          className='mx-auto w-[555px] min-w-[348px] mix-blend-luminosity grayscale md:w-[420px]'
        />

        {/* Shadow overlay */}
        <div className='absolute bottom-0 left-0 z-10 h-full w-full bg-[linear-gradient(180deg,rgba(0,0,0,0)_-92.59%,#000000_88.93%)]' />

        {/* Icon */}
        <div className='absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 flex-col gap-4 md:gap-6'>
          <div className='flex gap-4 md:gap-6'>
            {contactMeData.map((data) => (
              <div
                key={data.name}
                className='flex h-12 w-12 items-center justify-center rounded-full border border-neutral-800 p-2 md:h-16 md:w-16 md:p-3'
              >
                <Link href={data.link} target='_blank'>
                  <Image
                    src={data.imageUrl}
                    alt='icon-link'
                    height={28}
                    width={28}
                    className='h-auto w-auto'
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className='flex flex-col gap-1 text-center'>
            <p className='text-md-bold md:text-xl-bold text-white'>
              Alfeus Rudyanta
            </p>
            <div className='flex items-center justify-center gap-3'>
              <div className='bg-primary-200 size-3 rounded-full' />
              <p className='text-sm-semibold md:text-md-semibold text-neutral-400'>
                Available for Work
              </p>
            </div>
          </div>
        </div>
      </TitleMotion>

      {/* Form */}
      <TitleMotion className='flex flex-col gap-6 px-4 pt-10 pb-16 md:flex-[5.8] md:px-0 md:py-0'>
        {/* Title */}
        <div className='flex flex-col gap-2'>
          <p className='text-md-medium text-primary-200 md:text-lg-medium'>
            CONTACT
          </p>
          <p className='display-md-extrabold text-neutral-25 md:display-2xl-extrabold'>
            LET’S GET IN TOUCH
          </p>
        </div>

        {/* Form content */}
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className='flex flex-col gap-4 md:gap-6'
        >
          <div className='flex flex-col gap-2'>
            <p className='text-sm-semibold text-neutral-25 md:text-md-semibold'>
              Name
            </p>
            <input
              name='name'
              required
              className='text-md-regular text-neutral-25 h-12 gap-2 rounded-xl border border-neutral-800 px-4 py-2 md:h-14 md:rounded-2xl'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm-semibold text-neutral-25 md:text-md-semibold'>
              Email
            </p>
            <input
              name='email'
              required
              type='email'
              className='text-md-regular text-neutral-25 h-12 gap-2 rounded-xl border border-neutral-800 px-4 py-2 md:h-14 md:rounded-2xl'
            />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-sm-semibold text-neutral-25 md:text-md-semibold'>
              Message
            </p>
            <textarea
              name='message'
              required
              className='text-md-regular text-neutral-25 h-[120px] resize-none gap-2 rounded-xl border border-neutral-800 px-4 py-2 md:h-[180px] md:rounded-2xl'
            />
          </div>
          <Button type='submit' disabled={loading} className='z-50'>
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </TitleMotion>
    </div>
  );
};

export default ContactMe;
