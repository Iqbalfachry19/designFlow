import { BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
type AvatarProps = {
  withLogo?: boolean;
};
function Avatar({ withLogo }: AvatarProps) {
  const { data } = useSession();
  return (
    <div
      className={
        withLogo ? "flex w-full justify-between" : "flex   justify-between"
      }
    >
      <div className="flex items-center space-x-2">
        <div className="h-7 w-7 relative">
          <Image
            src="https://api.dicebear.com/6.x/initials/png?seed=i&radius=50&backgroundColor=FFCD29&textColor=000000"
            alt=""
            fill
          />
        </div>
        {withLogo && (
          <>
            <p>{data?.user?.name}</p>
            <ChevronDownIcon className="text-white h-3 w-3 " />
          </>
        )}
      </div>
      {withLogo && (
        <>
          <div className="flex items-center space-x-2 relative">
            <BellIcon className="text-white w-6 h-6" />
            <div className="absolute bg-red-500 w-2 h-2 rounded-full top-0 right-1  z-10" />
          </div>
        </>
      )}
    </div>
  );
}

export default Avatar;
