import React, { forwardRef } from "react";
import { useAuth } from "../../context/user";

export const AccountDropdown = forwardRef(({ ref, side }) => {
  const { user, logout } = useAuth();
  return (
    <div
      ref={ref}
      className={`absolute -bottom-12 flex flex-row justify-between py-2 px-4 bg-zinc-950 rounded h-12 w-56 overflow-hidden ${
        side == "right" ? "-right-2" : "-left-2"
      }`}
    >
      <div className='flex flex-col'>
        <p className='text-neutral-400 text-xs'>Logged in as</p>
        <p className='text-neutral-300 text-xs font-semibold'>
          {user?.username}
        </p>
      </div>
      <button onClick={logout} className='w-fit h-full text-red-800'>
        Logout
      </button>
    </div>
  );
});
