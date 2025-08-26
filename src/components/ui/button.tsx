import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center items-center shrink-0 disabled:pointer-events-none disabled:opacity-50 cursor-pointer outline-none disabled:text-neutral-800',
  {
    variants: {
      variant: {
        default:
          'h-12 md:h-14 bg-primary-200 hover:shadow-[0px_4px_40px_0px_#91FF0266] rounded-full gap-2 p-2 font-bold text-sm md:text-md text-neutral-950',
        white:
          'bg-neutral-25 text-md-bold md:text-lg-bold rounded-full text-center text-neutral-950',
        carousel:
          'flex justify-center text-center rounded-full gap-2 border border-neutral-800 text-primary-200',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        carousel:
          'h-12 w-12 md:h-14 md:w-14 has-[>svg]:px-2 md:has-[>svg]:px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(
        'transition duration-200 ease-in-out active:scale-95',
        buttonVariants({ variant, size, className })
      )}
      {...props}
    />
  );
}

export { Button, buttonVariants };
