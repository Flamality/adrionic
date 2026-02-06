import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../context/user";
import { AccountDropdown } from "./AccountDropdown";

export default function AccountWidget({ side = "right" }) {
  const ref = useRef();
  const absRef = useRef();
  const [loggedin, setLoggedin] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { user, isLoading, login } = useAuth();

  const getDiscordAvatar = (userId, avatarHash) => {
    return `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}.png`;
  };

  const toggleDropdown = () => {
    setDropdown(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setLoggedin(!!user);
  }, [user, isLoading]);
  return (
    <div className='relative'>
      {loggedin ? (
        <div
          className='flex flex-row gap-3 items-center relative w-48 h-12 px-2 rounded cursor-pointer hover:bg-zinc-800 max-md:w-fit max-md:hover:bg-transparent'
          ref={ref}
          onClick={toggleDropdown}
        >
          <img
            src={getDiscordAvatar(user?.id, user?.avatar)}
            alt={user?.username}
            className='h-10 w-10 rounded-full'
          />
          <div className='flex flex-col gap-0 max-md:hidden'>
            <p className='text-neutral-200 text-sm leading-tight font-semibold'>
              {user?.global_name}
            </p>
            <p className='text-neutral-400 text-xs leading-tight'>
              @{user?.username}
            </p>
          </div>
          {dropdown ? <AccountDropdown side={side} altRef={absRef} /> : <></>}
        </div>
      ) : (
        <button
          className='w-28 h-12 px-2 rounded cursor-pointer flex flex-row justify-center items-center gap-2 '
          onClick={login}
        >
          <img src={require("../../images/discord.png")} className='h-4' />
          <p className='text-indigo-500 font-semibold'>Login</p>
        </button>
      )}
    </div>
  );
}
