import React, { useEffect, useState } from "react";

export default function InviteCard() {
  const [memberCount, setMemberCount] = useState(0);
  const [onlineCount, setOnlineCount] = useState(0);
  useEffect(() => {
    fetch("https://discord.com/api/invites/9pdugyWmJy?with_counts=true")
      .then((response) => response.json())
      .then((data) => {
        const totalMembers = data.approximate_member_count;
        const onlineMembers = data.approximate_presence_count;
        setMemberCount(totalMembers);
        setOnlineCount(onlineMembers);
      })
      .catch((error) => {
        console.error("Failed to fetch invite data:", error);
        setMemberCount(0);
        setOnlineCount(0);
      });
  });
  return (
    <div className='bg-zinc-900 rounded p-3 w-96 z-10 scale-90 sm:scale-100'>
      <p className='text-neutral-500 text-xs mt-1 mb-3 font-bold z-10'>
        YOU'VE BEEN INVITED TO JOIN A SERVER
      </p>
      <div className='flex flex-row z-10'>
        <img
          className='h-12 w-12 rounded-lg mr-4 z-10'
          alt='Onic Club icon'
          src={require("../../../images/branding/adrionicPFP.jpg")}
        />
        <div className='flex flex-col mr-auto z-10'>
          <p className='text-neutral-300 font-semibold z-10'>Onic Club</p>
          <div className='flex flex-row items-center gap-1 text-sm z-10'>
            <div className='h-[10px] w-[10px] rounded-full bg-green-700 z-10' />
            <p className='text-neutral-400 mr-1 z-10'>{onlineCount} Online</p>
            <div className='h-[10px] w-[10px] rounded-full bg-neutral-600 z-10' />
            <p className='text-neutral-400 z-10'>{memberCount} Members</p>
          </div>
        </div>
        <a
          href='https://discord.gg/9pdugyWmJy'
          target='_blank'
          className='px-5 py-2 h-fit bg-green-700 hover:bg-green-800 text-neutral-200 rounded-sm z-10'
        >
          Join
        </a>
      </div>
    </div>
  );
}
