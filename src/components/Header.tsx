import { BellIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

import Image from 'next/image';

function Header() {
  return (
    <div className="border p-2 border-[rgb(68,68,68)] w-full flex justify-between ">
      <div className="flex items-center ml-2">
        <p className="text-white">Recents</p>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-blue-500 p-2 rounded-[6px] text-white">
          + Design file
        </button>
        <button className="bg-purple-500 p-2 rounded-[6px] text-white">
          + FigJam board
        </button>
        <button className="border broder-white p-2 rounded-[6px] text-white">
          Import
        </button>
      </div>
    </div>
  );
}

export default Header;
