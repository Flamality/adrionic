import React, { useEffect, useRef, useState } from "react";
import AccountWidget from "../auth/AccountWidget";
import { Link } from "react-router-dom";
import NavBarDropdown from "./NavBarDropdown";

export default function NavBar() {
  const ref = useRef();
  const altRef = useRef();
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !altRef.current.contains
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='h-14 px-12 max-md:px-4 flex flex-row justify-between items-center border-b-2 border-zinc-700 bg-zinc-900 z-50 absolute w-full'>
      <div className='flex items-center gap-4'>
        <img
          className='h-6 mt-px hidden max-md:block cursor-pointer opacity-60 hover:opacity-90'
          onClick={toggleDropdown}
          ref={ref}
          src={require("../../images/hamburger.png")}
        />
        <Link to={"/"} className='flex flex-row gap-2 items-center'>
          {/* <img
            src={require("../../images/adrionicPFP.jpg")}
            alt='Logo'
            className='h-8 w-8 rounded-lg'
          /> */}
          <h1 className='text-xl font-bold text-neutral-200'>Adrionic</h1>
        </Link>
        <div className='ml-1 h-5 flex flex-row items-center gap-4 max-md:hidden'>
          <div className='h-full w-px bg-neutral-400' />
          <Link to={"/youtube"} className='text-sm text-neutral-300'>
            Youtube
          </Link>
          <Link to={"/discord"} className='text-sm text-neutral-300'>
            Discord
          </Link>
          <Link to={"/socials"} className='text-sm text-neutral-300'>
            Socials
          </Link>
        </div>
        <NavBarDropdown altRef={altRef} dropdown={dropdown} />
      </div>
      <div className='flex items-center'>
        <AccountWidget />
      </div>
    </div>
  );
}
