'use client';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ClockIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Searchbar from './Searchbar';
import Logo from './Logo';
function Sidebar() {
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col items-center justify-center text-white ">
      <div
        className={
          open
            ? 'active flex items-center border-[#444] group hover:cursor-default  [&.active]:bg-black hover:bg-black p-2 space-x-2 border'
            : 'flex items-center border-[#444] group hover:cursor-default  [&.active]:bg-black hover:bg-black p-2 space-x-2 border'
        }
        onClick={clickHandler}
      >
        <div className="flex  flex-col">
          <span className="text-sm select-none">Iqbal Fachry</span>
          <span className="text-xs select-none">iqbal.fachry19@gmail.com</span>
        </div>
        <div className="pl-10">
          <ChevronDownIcon
            className={
              open
                ? 'h-3 w-3  translate-y-1   '
                : 'h-3 w-3 translate-y-0 duration-150  group-hover:translate-y-1 group-hover:duration-150 group-hover:ease-in'
            }
          />
        </div>
      </div>
      {open && (
        <>
          <div className="absolute top-16 p-2 bg-[#222]">
            <p className="select-none">iqbal.fachry19@gmail.com</p>
            <div>
              <p className="select-none">Iqbal Fachry</p>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col w-full border h-screen border-[#444]">
        <Searchbar />
        <span className="flex items-center  px-4 py-2 space-x-2  bg-[#4A5878] ">
          <ClockIcon className="h-3 w-3 " />
          <span>Recents</span>
        </span>
        <hr className="border border-[#444] mt-2 bg" />
        <span className="flex items-center  py-2 space-x-2   ">
          <Logo />
          <span>Your teams</span>
        </span>
        <span className="flex items-center px-3 py-2 space-x-2   ">
          <DocumentIcon className="h-4 w-4 " />
          <span>Drafts</span>
        </span>
        <hr className="border border-[#444] mt-2 bg" />
      </div>
    </div>
  );
}

export default Sidebar;
