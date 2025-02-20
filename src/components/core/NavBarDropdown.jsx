import React from "react";
import { Link } from "react-router-dom";
import AccountWidget from "../auth/AccountWidget";
import { useAuth } from "../../context/user";

export default function NavBarDropdown({ dropdown, altRef }) {
  const { user } = useAuth();
  return (
    <div
      ref={altRef}
      className={`absolute h-screen top-full max-w-screen hidden max-md:flex flex-col items-center p-4 px-10 bg-zinc-900 z-50 ${
        dropdown ? "left-0" : "-left-full"
      } transition-all`}
    >
      <AccountWidget side='left' />
      <p className='text-neutral-400 text-sm capitalize'>{user?.username}</p>

      <div className='flex flex-col gap-2 w-full mt-8'>
        <p className='text-neutral-200 font-semibold'>Pages</p>
        <Link to={"/"} className='text-neutral-300'>
          Home
        </Link>
        <Link to={"/youtube"} className='text-neutral-300'>
          Youtube
        </Link>
        <Link to={"/discord"} className='text-neutral-300'>
          Discord
        </Link>
      </div>

      <div className='flex flex-col gap-2 w-full mt-8'>
        <p className='text-neutral-200 font-semibold'>Social Links</p>
        <Link
          to={"https://www.youtube.com/@Adrionic"}
          className='text-neutral-300'
        >
          Youtube channel
        </Link>
        <Link
          to={"https://discord.com/invite/9pdugyWmJy"}
          className='text-neutral-300'
        >
          Discord server
        </Link>
        <Link to={"/socials"} className='text-neutral-500'>
          View all...
        </Link>
      </div>
    </div>
  );
}
