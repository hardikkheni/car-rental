import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex w-fit h-fit items-center justify-center whitespace-nowrap rounded-sm font-semibold text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground active:bg-primary-700 disabled:opacity-40',
        error: 'bg-error text-error-foreground active:bg-error-700 disabled:opacity-40',
        success: 'bg-success text-success-foreground active:bg-success-700 disabled:opacity-40',
        warning: 'bg-warning text-warning-foreground active:bg-warning-700 disabled:opacity-40',
        outline:
          'border border-input bg-background border-secondary-300 text-secondary-400 hover:text-secondary-500 hover:border-secondary-400 active:border-secondary-500 active:bg-secondary-300 disabled:border-secondary-100',
        flat: 'text-secondary-400 hover:text-secondary-500 hover:bg-background active:text-secondary-500 active:bg-primary-100 focus:text-secondary-500 focus:bg-background focus:border focus:border-input focus:border-secondary-200 disabled:text-secondary-200',
      },
      size: {
        sm: 'px-4 py-[5px]',
        md: 'px-4 py-[9px]',
        lg: 'px-6 py-[13px] text-base',
      },
      icon: {
        true: 'flex gap-2 justify-between items-center',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      icon: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className, icon }))} ref={ref} {...props} />;
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
