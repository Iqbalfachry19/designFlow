import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';

function Searchbar() {
  return (
    <div className="flex items-center  space-x-2 p-2 m-2 bg-[#383838] rounded-[6px] focus-within:outline focus-within:outline-blue-400">
      <MagnifyingGlassIcon className="text-white w-4 h-4" />
      <input
        className="bg-[#383838] flex-1 outline-none text-sm caret-white"
        placeholder="Search files, teams, or people"
      />
    </div>
  );
}

export default Searchbar;
