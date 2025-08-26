import React from 'react';

const Footer = () => {
  return (
    <footer className='mx-auto flex h-16 w-full items-center justify-center border-t border-neutral-800 text-center md:h-20'>
      <div className='mx-auto flex w-full max-w-[1440px] items-center justify-center gap-2 p-2'>
        <p className='text-xs-regular md:text-md-regular text-neutral-400'>
          © 2025 Alfeus Rudyanta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
