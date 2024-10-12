import { Bell, Heart, SearchIcon, Settings, Settings2 } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-background px-12 py-7">
      <div className="flex flex-1 items-center gap-16">
        <div className="text-primary-500 flex-none text-3xl font-bold">MORENT</div>
        <div className="border-input hidden w-1/3 items-center justify-between rounded-full border ring-offset-background lg:flex">
          <SearchIcon className="text-secondary-300 bg-transparent pl-4" size={48} />
          <input
            placeholder="Search something here"
            className="text-secondary-400 h-11 w-full px-2 font-medium focus:outline-none"
          />
          <Settings2 className="text-secondary-300 bg-transparent pr-4" size={48} />
        </div>
      </div>
      <div className="flex flex-none items-center justify-center gap-5">
        <Heart className="text-secondary-300 hidden rounded-full border bg-transparent p-2 lg:inline-flex" size={36} />
        <Bell className="text-secondary-300 hidden rounded-full border bg-transparent p-2 lg:inline-flex" size={36} />
        <Settings
          className="text-secondary-300 hidden rounded-full border bg-transparent p-2 lg:inline-flex"
          size={36}
        />
        <Avatar className="rounded-full border">
          <AvatarFallback>UA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
