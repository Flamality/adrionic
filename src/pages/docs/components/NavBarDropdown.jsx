import React from "react";
import { Link } from "react-router-dom";
import AccountWidget from "../../../components/auth/AccountWidget";
import { useAuth } from "../../../context/user";
import List from "./List";

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
        <List />
      </div>
    </div>
  );
}
