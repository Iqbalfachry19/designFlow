import { AdjustmentsVerticalIcon, EyeIcon, PlusIcon } from '@heroicons/react/24/outline';
import React from 'react';

function RightSidebar() {
  return (
    <div className="w-60 z-20">
      <div className="flex space-x-2 border-b border-[#444] text-sm text-white p-2">
        <p>Design</p>
        <p>Prototype</p>
      </div>
      <div className="text-white text-sm p-2 border-b border-[#444]">
        <p>Page</p>
        <div className="flex items-center justify-between ">
          <div className="flex items-center p-2 space-x-2">
            <div className="h-3 w-3 bg-[#1E1E1E]" />
            <p className="text-sm">1E1E1E</p>
            <p className="text-sm">100%</p>
          </div>

          <EyeIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="text-white text-sm p-2 border-b border-[#444]">
        <div className="flex items-center justify-between ">
          <p className="text-sm">Local variables</p>

          <AdjustmentsVerticalIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="text-white text-sm p-2 border-b border-[#444]">
        <div className="flex items-center justify-between ">
          <p className="text-sm">Local styles</p>

          <PlusIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="text-white text-sm p-2 border-b border-[#444]">
        <div className="flex items-center justify-between ">
          <p className="text-sm">Export</p>

          <PlusIcon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
