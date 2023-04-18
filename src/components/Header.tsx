import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';

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
      <div className="flex items-center">
        <p className="text-white">Explore Comunity</p>
      </div>
    </div>
  );
}

export default Header;
