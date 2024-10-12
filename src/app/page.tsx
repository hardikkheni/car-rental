import Image from 'next/image';
import heroCar1 from '@/assets/images/hero-car1.png';
import heroCar2 from '@/assets/images/hero-car2.png';
import { Button } from '@/components/ui/button';
import MainFilter from '@/components/main-filter';
import CarCard, { CarCardProps } from '@/components/car-card';
import car1 from '@/assets/images/cars/car1.png';
import car2 from '@/assets/images/cars/car2.png';
import car3 from '@/assets/images/cars/car3.png';
import car4 from '@/assets/images/cars/car4.png';

const cars: CarCardProps[] = [
  {
    info: {
      image: car1 as unknown as string,
      name: 'Koenigsegg',
      type: 'Sport',
      price: 99,
      seats: 2,
      transmission: 'Manual',
      fuelCap: '90L',
    },
    liked: true,
    discount: 0.05,
  },
  {
    info: {
      image: car2 as unknown as string,
      name: 'Nissan GT - R',
      type: 'Sport',
      price: 80,
      seats: 2,
      transmission: 'Manual',
      fuelCap: '80L',
    },
    liked: false,
  },
  {
    info: {
      image: car3 as unknown as string,
      name: 'Rolls - Royce',
      type: 'Sedan',
      price: 100,
      seats: 4,
      transmission: 'Manual',
      fuelCap: '70L',
    },
    liked: true,
    discount: 0.2,
  },
  {
    info: {
      image: car4 as unknown as string,
      name: 'Nissan GT - R',
      type: 'Sport',
      price: 80,
      seats: 2,
      transmission: 'Manual',
      fuelCap: '80L',
    },
    liked: false,
  },
];

export default function Home() {
  return (
    <div className="p-6 lg:px-12 lg:py-8">
      <div className="block lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="relative w-full">
          <Image src={heroCar1} alt="" className="h-[350px] w-full rounded-lg object-cover lg:h-full" />
          <div className="absolute left-0 top-0 flex w-[350px] flex-col gap-4 pl-8 pt-8">
            <div className="font-semibold text-primary-0 lg:text-3xl">The Best Platform for Car Rental</div>
            <div className="font-medium text-primary-0">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </div>
            <Button size={'lg'} className="mt-1 w-fit">
              Rental Car
            </Button>
          </div>
        </div>
        <div className="relative hidden w-full lg:block">
          <Image src={heroCar2} alt="" className="w-full" />
          <div className="absolute left-0 top-0 flex w-[350px] flex-col gap-4 pl-8 pt-8">
            <div className="text-3xl font-semibold text-primary-0">Easy way to rent a car at a low price</div>
            <div className="font-medium text-primary-0">
              Providing cheap car rental services and safe and comfortable facilities.
            </div>
            <Button size={'lg'} className="mt-1 w-fit bg-info-500">
              Rental Car
            </Button>
          </div>
        </div>
      </div>
      <MainFilter />
      <div className="mt-4 lg:mt-8">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-secondary-300 lg:text-base">Popular Car</div>
          <div className="text-xs font-semibold text-primary lg:text-base">View all</div>
        </div>
        <div className="mt-4 flex grid-cols-1 gap-5 overflow-x-auto md:grid md:overflow-hidden lg:mt-8 lg:grid-cols-4 lg:gap-8">
          {cars.map((car, key) => (
            <CarCard key={key} {...car} />
          ))}
        </div>
      </div>
      <div className="mt-4 lg:mt-8">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-secondary-300 lg:text-base">Recomandation Car</div>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-5 lg:mt-8 lg:grid-cols-4 lg:gap-8">
          {[...cars, ...cars, ...cars, ...cars].map((car, key) => (
            <CarCard key={key} {...car} />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="w-[100px]"></div>
          <div className="order-last text-xs font-semibold text-secondary-300 lg:text-base">120 cars</div>
          <Button className="mt-1 w-fit">Show more cars</Button>
        </div>
      </div>
    </div>
  );
}
