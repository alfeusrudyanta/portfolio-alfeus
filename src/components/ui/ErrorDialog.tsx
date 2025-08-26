import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Button } from './button';

type SuccessDialogProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  onRetry?: () => void;
};

const SuccessDialog: React.FC<SuccessDialogProps> = ({
  isOpen,
  setIsOpen,
  onRetry,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='flex max-w-[479px] flex-col gap-6 rounded-2xl border border-neutral-800 bg-black px-6 pt-20 pb-6 md:px-8 md:pb-8'>
        {/* Header */}
        <DialogHeader className='absolute -top-[50px] left-1/2 -translate-x-1/2 md:-top-[70px]'>
          <Image
            src='/icon/contact-email-sent.svg'
            alt='email-sent-icon'
            height={110}
            width={120}
            className='md:h-[136px] md:w-[148px]'
          />
        </DialogHeader>

        {/* Content */}
        <div className='flex flex-col gap-2 text-center'>
          <DialogTitle className='text-lg-bold md:text-xl-bold text-neutral-25'>
            Message not sent!
          </DialogTitle>
          <p className='text-sm-regular md:text-md-regular text-neutral-400'>
            Something went wrong on our end. Please try again in a moment
          </p>
        </div>

        <Button onClick={() => (onRetry ? onRetry() : setIsOpen(false))}>
          TRY AGAIN
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
