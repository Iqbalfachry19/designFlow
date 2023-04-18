import { BellIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

import Image from 'next/image';
function Header() {
  return (
    <div className="border p-2 border-[rgb(68,68,68)] w-full flex justify-between ">
      <div className="flex items-center space-x-2 p-1 bg-[#383838] rounded-lg w-80">
        <MagnifyingGlassIcon className="text-white w-7 h-7" />
        <input
          className="bg-[#383838] flex-1"
          placeholder="Search files, teams, or people"
        />
      </div>
      <div className="flex items-center space-x-2">
        <GlobeAltIcon className="text-white w-7 h-7" />
        <p className="text-white">Explore Comunity</p>
        <div className="flex items-center space-x-2 relative">
          <BellIcon className="text-white w-6 h-6" />
          <div className="absolute bg-red-500 w-2 h-2 rounded-full top-0 right-1  z-10" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 relative">
            <Image
              src="https://api.dicebear.com/6.x/initials/png?seed=i&radius=50&backgroundColor=FFCD29&textColor=000000"
              alt=""
              fill
            />
          </div>
          <ChevronDownIcon className="text-white h-3 w-3 " />
        </div>
      </div>
    </div>
  );
}

export default Header;
