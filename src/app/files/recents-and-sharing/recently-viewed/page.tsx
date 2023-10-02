import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Recently viewed - DesignFlow",
  description: "Generated by create next app",
};
function page() {
  return (
    <div className={`text-white overflow-hidden ${inter.className}`}>
      <div className="p-4 space-x-2 flex justify-between items-center  ">
        <div className="flex ">
          <div>
            <p className="bg-[#383838] p-2 rounded-[6px]">Recently viewed</p>
          </div>
          <div>
            <p className="text-gray-200 p-2 rounded-[6px]">Shared files</p>
          </div>
          <div>
            <p className="text-gray-200 p-2 rounded-[6px]">Shared projects</p>
          </div>
        </div>
        <div className="p-4 flex space-x-2">
          <div className="flex items-center space-x-2">
            <p>All organizations </p>
            <ChevronDownIcon className="text-white h-3 w-3 " />
          </div>
          <div className="flex items-center space-x-2">
            <p>All files </p>
            <ChevronDownIcon className="text-white h-3 w-3 " />
          </div>
          <div className="flex items-center space-x-2">
            <p>Last viewed</p>
            <ChevronDownIcon className="text-white h-3 w-3 " />
          </div>
        </div>
      </div>
      <div className="h-screen overflow-auto scrollbar-hide  scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 ">
        <div className="grid-cols-3 grid mb-52 m-4 items-center gap-10 justify-center">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <Link href="/file/a" key={index} className="h-44  w-40">
                <div className="w-80 h-44 rounded-lg bg-[#E5E5E5] "></div>
                <p>heroicons</p>
                <p className="text-xs">In Drafts · Edited 1 hour ago</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default page;
