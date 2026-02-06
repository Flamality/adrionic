import React from "react";
import NavBar from "../../components/core/NavBar/NavBar";
import InviteCard from "./components/InviteCard";

export default function Discord() {
  return (
    <div className='relative min-h-screen bg-zinc-950 overflow-hidden'>
      <NavBar transparent={true} />
      <div
        className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[240vh] h-[240vh] rounded-full'
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.4) 0%, rgba(79,70,229,0) 60%)",
          filter: "blur(80px)",
        }}
      ></div>
      <div
        className='absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[200vh] h-[200vh] rounded-full'
        style={{
          background:
            "radial-gradient(circle, rgba(67,56,202,0.3) 0%, rgba(67,56,202,0) 70%)",
          filter: "blur(60px)",
        }}
      ></div>
      <div className='h-screen text-neutral-200 w-full flex flex-col justify-center items-center'>
        <p className='text-5xl z-10 font-extrabold sm:text-6xl md:text-7xl'>
          ONIC CLUB
        </p>
        <p className='text-xl z-10 font-bold sm:text-2xl md:text-3xl'>
          The official Adrionic discord
        </p>
      </div>
      <div className='flex flex-col justifty-center items-center my-10 w-full'>
        <InviteCard />
        <img
          src={require("../../images/arrow.png")}
          className='-rotate-45 ml-64 h-32 -mt-1 invert opacity-50 z-20'
        />
        <p className='text-xs text-neutral-400 mt-4 sm:text-sm'>
          Join our Discord server and get involved in our community!
        </p>
      </div>
    </div>
  );
}
