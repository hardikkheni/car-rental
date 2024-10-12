import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <div className="bg-background px-10">
      <div className="flex flex-col justify-between gap-16 pt-20 lg:flex-row">
        <div className="flex flex-col gap-4">
          <div className="text-3xl font-bold text-primary-500">MORENT</div>
          <div className="w-[300px] text-base font-medium text-[#131313]/60">
            Our vision is to provide convenience and help increase your sales business.
          </div>
        </div>
        <div className="mb-8 flex flex-wrap justify-between gap-4 lg:mb-0 lg:gap-12 lg:pr-24">
          <div>
            <div className="pb-4 text-[20px] font-semibold text-secondary-500">About</div>
            <div className="flex flex-col gap-6 py-4">
              <div className="text-base font-medium text-[#131313]/60">How it works</div>
              <div className="text-base font-medium text-[#131313]/60">Featured</div>
              <div className="text-base font-medium text-[#131313]/60">Partnership</div>
              <div className="text-base font-medium text-[#131313]/60">Bussiness Relation</div>
            </div>
          </div>

          <div className="md:order-last">
            <div className="pb-4 text-[20px] font-semibold text-secondary-500">Socials</div>
            <div className="flex flex-col gap-6 py-4">
              <div className="text-base font-medium text-[#131313]/60">Discord</div>
              <div className="text-base font-medium text-[#131313]/60">Instagram</div>
              <div className="text-base font-medium text-[#131313]/60">Twitter</div>
              <div className="text-base font-medium text-[#131313]/60">Facebook</div>
            </div>
          </div>
          <div>
            <div className="pb-4 text-[20px] font-semibold text-secondary-500">Community</div>
            <div className="flex flex-col gap-6 py-4">
              <div className="text-base font-medium text-[#131313]/60">Events</div>
              <div className="text-base font-medium text-[#131313]/60">Blog</div>
              <div className="text-base font-medium text-[#131313]/60">Podcast</div>
              <div className="text-base font-medium text-[#131313]/60">Invite a friend</div>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-wrap items-center justify-between gap-6 py-10 lg:gap-0">
        <div className="order-last text-sm font-semibold text-secondary-500 lg:order-first lg:text-base">
          ©2022 MORENT. All rights reserved
        </div>
        <div className="flex items-center justify-between gap-16">
          <div className="text-sm font-semibold text-secondary-500 lg:text-base">Privacy & Policy</div>
          <div className="text-sm font-semibold text-secondary-500 lg:text-base">Terms & Condition</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
