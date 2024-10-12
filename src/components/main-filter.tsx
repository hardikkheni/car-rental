'use client';

import { ArrowUpDown, ChevronDownIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const MainFilter: React.FC = () => {
  return (
    <div className="mt-4 flex flex-col items-center justify-between lg:flex-row lg:gap-8">
      <div className="flex flex-1 flex-col rounded-md bg-background px-4 py-2 lg:px-16 lg:py-8">
        <div className="font-semibold text-secondary-500">
          <input type="radio" className="mr-2 border-2 border-input bg-primary-500" checked onChange={() => {}} />
          Pick-up
        </div>
        <div className="my-2 flex items-center justify-between space-x-4">
          <div className="flex flex-col">
            <span className="font-bold text-secondary-500">Locations</span>
            <div className="flex items-center">
              <span className="text-xs font-medium text-secondary-300">Select your city</span>
              <ChevronDownIcon />
            </div>
          </div>
          <Separator orientation="vertical" className="h-12" />
          <div className="flex flex-col">
            <span className="font-bold text-secondary-500">Date</span>
            <div className="flex items-center">
              <span className="text-xs font-medium text-secondary-300">Select your date</span>
              <ChevronDownIcon />
            </div>
          </div>
          <Separator orientation="vertical" className="h-12" />
          <div className="flex flex-col">
            <span className="font-bold text-secondary-500">Time</span>
            <div className="flex items-center">
              <span className="text-xs font-medium text-secondary-300">Select your time</span>
              <ChevronDownIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 mb-[-10px] mt-[-10px] flex-none">
        <Button size={'lg'} className="rounded-lg px-4">
          <ArrowUpDown size={16} />
        </Button>
      </div>
      <div className="flex flex-1 flex-col rounded-md bg-background px-4 py-2 lg:px-16 lg:py-8">
        <div className="font-semibold text-secondary-500">
          <input type="radio" className="mr-2 border-2 border-input bg-primary-500" checked onChange={() => {}} />
          Drop-off
        </div>
        <div className="my-2 flex items-center justify-between space-x-4">
          <div className="flex flex-col">
            <span className="font-bold text-secondary-500">Locations</span>
            <div className="flex items-center">
              <span className="text-xs font-medium text-secondary-300">Select your city</span>
              <ChevronDownIcon />
            </div>
          </div>
          <Separator orientation="vertical" className="h-12" />
          <div className="flex flex-col">
            <span className="font-bold text-secondary-500">Date</span>
            <div className="flex items-center">
              <span className="text-xs font-medium text-secondary-300">Select your date</span>
              <ChevronDownIcon />
            </div>
          </div>
          <Separator orientation="vertical" className="h-12" />
          <div className="flex flex-col">
            <span className="font-bold text-secondary-500">Time</span>
            <div className="flex items-center">
              <span className="text-xs font-medium text-secondary-300">Select your time</span>
              <ChevronDownIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFilter;
