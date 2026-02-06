import React, { useState, useEffect, useRef } from "react";
import AccountWidget from "../../../components/auth/AccountWidget";
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
      try {
        if (
          ref.current &&
          !ref.current?.contains(event.target) &&
          !altRef.current.contains
        ) {
          setDropdown(false);
        }
      } catch (error) {}
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
          src={require("../../../images/hamburger.png")}
        />
        <Link to={"/"} className='flex flex-row gap-2 items-center'>
          {/* <img
            src={require("../../images/adrionicPFP.jpg")}
            alt='Logo'
            className='h-8 w-8 rounded-lg'
          /> */}
          <h1 className='text-base font-bold text-neutral-200 hover:opacity-80'>
            Adrionic{" "}
            <span className='px-1 text-xs bg-blue-700 rounded'>DOCS</span>
          </h1>
        </Link>
        <div className='ml-1 h-5 flex flex-row items-center gap-4 max-md:hidden'></div>
        <NavBarDropdown altRef={altRef} dropdown={dropdown} />
      </div>
      <div className='flex items-center'>
        <AccountWidget />
      </div>
    </div>
  );
}
