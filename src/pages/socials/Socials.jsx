import React from "react";
import NavBar from "../../components/core/NavBar/NavBar";
import {
  FaDiscord,
  FaInstagram,
  FaShirt,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { PiLinktreeLogo } from "react-icons/pi";

export default function Socials() {
  return (
    <div>
      <NavBar />
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <h1 className='text-4xl text-cyan-600 font-black mb-12'>Socials</h1>
        <div className='w-2/3 flex flex-row justify-center items-center gap-8 flex-wrap'>
          <a
            href='https://www.instagram.com/adrionicgame/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='h-12 w-12 text-neutral-100' />
          </a>
          <a
            href='https://www.youtube.com/@adrionicgame'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaYoutube className='h-12 w-12 text-neutral-100' />
          </a>
          <a
            href='https://twitter.com/adrionic'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter className='h-12 w-12 text-neutral-100' />
          </a>
          <a href='/discord' target='_self' rel='noopener noreferrer'>
            <FaDiscord className='h-12 w-12 text-neutral-100' />
          </a>
          <a
            href='https://adrionic-merch.printify.me/products'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaShirt className='h-12 w-12 text-neutral-100' />
          </a>
          <a
            href='https://www.tiktok.com/@adrionicgame'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTiktok className='h-12 w-12 text-neutral-100' />
          </a>
          <a
            href='https://linktr.ee/adrionic'
            target='_blank'
            rel='noopener noreferrer'
          >
            <PiLinktreeLogo className='h-12 w-12 text-neutral-100' />
          </a>
        </div>
      </div>
    </div>
  );
}
