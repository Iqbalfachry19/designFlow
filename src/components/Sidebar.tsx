'use client';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ClockIcon, DocumentIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
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
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 11c0-1.657 1.343-3 3-3h5c1.657 0 3 1.343 3 3 0 1.043-.533 1.963-1.341 2.5.808.537 1.341 1.457 1.341 2.5 0 1.657-1.343 3-3 3-.768 0-1.47-.289-2-.764V21c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-1.044.533-1.962 1.341-2.5C10.533 17.962 10 17.044 10 16c0-1.043.533-1.963 1.341-2.5C10.533 12.963 10 12.043 10 11zm3 2c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2h2v4h-2zm2 1h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm0 5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-2zm3-5c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2 0-1.105-.895-2-2-2zm0-1c1.105 0 2-.895 2-2 0-1.105-.895-2-2-2h-2v4h2z"
            fillRule="evenodd"
            fillOpacity="1"
            fill="#fff"
            stroke="none"
          ></path>
        </svg>
        <div className="flex  flex-col">
          <span className="text-sm select-none">Iqbal Fachry</span>
          <span className="text-xs select-none">iqbal.fachry19@gmail.com</span>
        </div>
        <div className="pl-10">
          <ChevronDownIcon className="h-3 w-3 translate-y-0 duration-150  group-hover:translate-y-1 group-hover:duration-150 group-hover:ease-in" />
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
        <span className="flex items-center mt-2 px-4 py-2 space-x-2  bg-[#4A5878] ">
          <ClockIcon className="h-3 w-3 " />
          <span>Recents</span>
        </span>
        <span className="flex items-center px-4 py-2 space-x-2   ">
          <DocumentIcon className="h-3 w-3 " />
          <span>Drafts</span>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
