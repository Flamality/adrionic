import React from "react";
import NavBar from "../../components/core/NavBar";
import SubCount from "./components/SubCount";

export default function Youtube() {
  return (
    <div>
      <NavBar />
      <div className='w-full relative bg-gradient-to-br from-red-500 to-rose-900 pt-28 pb-44'>
        <SubCount />
        <div class='custom-shape-divider-bottom-1740094901'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z'
              class='shape-fill'
            ></path>
          </svg>
        </div>
      </div>
      <div className='relative'>
        <div className='w-full flex flex-col justify-evenly py-40 px-56 max-md:px-10 relative'>
          <h1 className='text-3xl font-bold text-neutral-200 mb-10'>Youtube</h1>
          <p className='text-neutral-300'>
            This page is currently under construction... Please check back
            later.
          </p>
        </div>
      </div>
    </div>
  );
}
