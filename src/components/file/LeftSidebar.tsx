import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

type Props = {};

const LeftSidebar = (props: Props) => {
  return (
    <div className="w-60 z-20">
      <div className="border-b border-[#444] px-2 py-3  text-white flex items-center space-x-2">
        <MagnifyingGlassIcon className="w-4 h-4 " />
        <p className="text-xs">Layers</p>
        <p className="flex-1 text-xs">Asssets</p>
        <div className="flex items-center space-x-1">
          <p className="text-xs">Page 1</p>
          <ChevronDownIcon className="w-4 h-4 " />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
