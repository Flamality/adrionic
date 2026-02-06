import React from "react";
import NavBar from "../../components/core/NavBar/NavBar";
import SubCount from "./components/SubCount";
import RecentPosts from "./components/RecentPosts";

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
          <p className='text-3xl text-neutral-200 font-bold'>Schedule</p>
          <p className='text-xl text-neutral-300 font-semibold mt-4'>Videos</p>
          <p className='text-base text-neutral-400 font-normal'>
            1-2 videos released weekly at 4pm EST
          </p>
          <p className='text-xl text-neutral-300 font-semibold mt-4'>
            Live streams
          </p>
          <p className='text-base text-neutral-400 font-normal'>
            Live every friday from 10pm - 12AM EST
          </p>
          <p className='text-3xl text-neutral-200 font-bold mt-16'>
            Recent Videos
          </p>
          <RecentPosts />
        </div>
        <div className='w-full py-48 px-10 bg-rose-600 flex items-center justify-center'>
          <a
            href='https://youtube.com/@adrionic'
            target='_blank'
            className='text-rose-600 bg-neutral-100 hover:bg-neutral-800 transition-all py-3 px-12 rounded-full text-3xl font-extrabold'
          >
            SUBSCRIBE
          </a>
        </div>
      </div>
    </div>
  );
}
