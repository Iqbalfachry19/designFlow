"use client";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ClockIcon,
  DocumentIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Searchbar from "../Searchbar";
import Logo from "../Logo";
import Avatar from "../Avatar";
import { signOut, useSession } from "next-auth/react";
function Sidebar() {
  const [open, setOpen] = useState(false);
  const { data } = useSession();
  const clickHandler = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col h-screen items-center  justify-center text-white ">
      <div
        className={
          open
            ? "active flex items-center border-[#444] group hover:cursor-default  w-full [&.active]:bg-black hover:bg-black p-2 space-x-2 border-r"
            : "flex items-center border-[#444] group hover:cursor-default  w-full  [&.active]:bg-black hover:bg-black p-2 space-x-2 border-r"
        }
        onClick={clickHandler}
      >
        <Avatar withLogo />
      </div>
      {open && (
        <>
          <div className="absolute top-16 p-2 bg-[#222]">
            <p className="select-none">{data?.user?.email}</p>
            <div>
              <p className="select-none">{data?.user?.name}</p>
              <p onClick={() => signOut({ callbackUrl: "/" })}>Logout</p>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col w-full border-r h-screen border-[#444]">
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
        <div className="text-center bg-[#383838] rounded-[6px] m-2 p-2">
          <p className="text-sm">Ready to go beyond this free plan?</p>
          <p className="text-sm">Upgrade for premium features.</p>
          <button className="bg-blue-500 px-8 py-2 rounded-[6px] mt-2">
            View plans
          </button>
        </div>
        <hr className="border border-[#444] mt-2 bg" />
        <div className="p-2">
          <h1>Favorite files</h1>
          <p className="text-sm">
            Hover over any file and click the star to add it here
          </p>
        </div>
        <hr className="border border-[#444] mt-2 bg" />
        <div className="p-2 flex flex-col flex-grow">
          <h1>Teams</h1>
          <div className="flex items-center p-2 space-x-2">
            <div className="h-3 w-3 bg-yellow-400" />
            <p className="text-sm">a</p>
          </div>
          <div className="flex items-center p-2 space-x-2">
            <div className="h-3 w-3 bg-red-500" />
            <p className="text-sm">Iqbal Fachry&rsquo;s Team</p>
          </div>
          <div className="flex items-center p-2 space-x-2">
            <div className="h-3 w-3 bg-[#2c2c2c]" />
            <p className="text-sm">First Project</p>
          </div>
          <div className="flex items-center p-2">
            <p className="text-sm">+ Create new team</p>
          </div>
        </div>
        <div className="flex space-x-2 mt-2 p-2 ">
          <GlobeAltIcon className="text-white w-7 h-7" />
          <p className="text-white">Explore Comunity</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
