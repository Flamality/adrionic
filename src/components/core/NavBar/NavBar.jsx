import React, { useEffect, useRef, useState } from "react";
import AccountWidget from "../../auth/AccountWidget";
import { Link } from "react-router-dom";
import NavBarDropdown from "../NavBarDropdown";

import styles from "./NavBar.module.css";

export default function NavBar({ transparent = false }) {
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
    <div
      className={
        `px-12 max-md:px-4 flex flex-row justify-center items-center bg-opacity-0 ${transparent ? "bg-transparent" : "bg-zinc-950"}  z-50 fixed ` +
        styles.container
      }
    >
      <div className='flex items-center gap-4 w-[33.33%]'>
        <img
          className='h-6 mt-px hidden max-md:block cursor-pointer opacity-60 hover:opacity-90 z-50'
          onClick={toggleDropdown}
          ref={ref}
          src={require("../../../images/hamburger.png")}
        />

        <div className='ml-1 h-5 flex flex-row items-center gap-4 max-md:hidden'>
          <Link
            to={"/youtube"}
            className='text-sm font-semibold text-neutral-300 hover:text-yellow-500 drop-shadow-lg'
          >
            Youtube
          </Link>
          <Link
            to={"/discord"}
            className='text-sm font-semibold text-neutral-300 hover:text-yellow-500 drop-shadow-lg'
          >
            Discord
          </Link>
          <Link
            to={"/socials"}
            className='text-sm font-semibold text-neutral-300 hover:text-yellow-500 drop-shadow-lg'
          >
            Socials
          </Link>
        </div>
        <NavBarDropdown altRef={altRef} dropdown={dropdown} />
      </div>
      <div className='flex items-center justify-center w-[33.34%]'>
        <Link to={"/"} className='flex flex-row gap-2 items-center'>
          <img
            src={require("../../../images/branding/adrionicbannernameonly.png")}
            alt='Adrionic Logo'
            className='h-24 object-cover object-center mt-3 hover: hover:brightness-150 hover:scale-105 transition-all duration-100'
          />
        </Link>
      </div>
      <div className='flex items-center w-[33.33%] justify-end'>
        <AccountWidget />
      </div>
    </div>
  );
}
