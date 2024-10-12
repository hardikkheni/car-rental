import { Fuel, Heart, LifeBuoy, Users } from 'lucide-react';
import { forwardRef } from 'react';
import { cn } from '../lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export interface CarCardProps extends React.HTMLAttributes<HTMLDivElement> {
  info: {
    image: string;
    name: string;
    type: string;
    price: number;
    seats: number;
    transmission: string;
    fuelCap: string;
  };
  discount?: number;
  liked: boolean;
}

const CarCard = forwardRef<HTMLDivElement, CarCardProps>(({ info, className, liked, discount, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={cn('flex flex-col rounded-md bg-background px-4 py-4 lg:px-6 lg:py-6', className)}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-[20px] font-bold text-secondary-500">{info.name}</div>
          <div className="text-sm font-bold text-secondary-300">{info.type}</div>
        </div>
        <div>
          <Heart
            size={24}
            className="cursor-pointer text-secondary-300"
            {...(liked ? { color: 'red', fill: 'red' } : {})}
          />
        </div>
      </div>
      <div className="px-6 py-16">
        <Image src={info.image} alt="" className="w-full rounded-lg object-contain" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-2">
          <Fuel size={24} className="text-secondary-300" />{' '}
          <span className="text-xs font-medium text-secondary-300 lg:text-sm">{info.fuelCap}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <LifeBuoy size={24} className="text-secondary-300" />{' '}
          <span className="text-xs font-medium text-secondary-300 lg:text-sm">{info.transmission}</span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Users size={24} className="text-secondary-300" />{' '}
          <span className="text-nowrap text-xs font-medium text-secondary-300 lg:text-sm">{info.seats} People</span>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between lg:mt-8">
        <div>
          <div className="font-bold text-secondary-300 md:text-sm">
            <span className="text-[20px] text-secondary-500">
              ${(!!discount ? info.price - info.price * discount : info.price).toFixed(2)}/
            </span>{' '}
            day
          </div>
          {!!discount && (
            <div className="text-xs font-bold text-secondary-300 line-through md:text-sm">${info.price.toFixed(2)}</div>
          )}
        </div>
        <Button>Rent Now</Button>
      </div>
    </div>
  );
});

CarCard.displayName = 'CarCard';
export default CarCard;
