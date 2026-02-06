import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/user";

export default function Board() {
  const { user, isLoading, login, getBoard, postToBoard } = useAuth();
  const [message, setMessage] = useState("");
  const [board, setBoard] = useState(null);
  useEffect(() => {
    // if (!user || isLoading) {
    //   return;
    // }
    const retriveBoard = async () => {
      const b = await getBoard();
      setBoard(b);
    };
    retriveBoard();
  }, [user, isLoading]);
  const post = async () => {
    if (message.trim() == "") return;
    if (!user || isLoading) return;
    await postToBoard(message);
    setMessage("");
    const retriveBoard = async () => {
      const b = await getBoard();
      setBoard(b);
    };
    retriveBoard();
  };
  return (
    <div className='w-full'>
      <div className='w-full bg-zinc-700 p-4 rounded-t-lg'>
        {user ? (
          <div className='flex flex-col gap-4'>
            <input
              type='text'
              placeholder='Type your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='bg-transparent focus:outline-none text-neutral-300'
            />
            <button
              onClick={post}
              className='text-neutral-200 text-left font-semibold hover:text-sky-300 transition-all'
            >
              Post to wall
            </button>
          </div>
        ) : (
          <div>
            <p className='text-neutral-200 text-center text-lg'>
              Please login to post to the wall
            </p>
            <button
              onClick={() => login()}
              className='text-neutral-200 text-center w-full mt-4 font-semibold hover:text-sky-300 transition-all'
            >
              Login with discord
            </button>
          </div>
        )}
      </div>
      <hr className='border-neutral-500' />
      <div className='w-full bg-zinc-700 rounded-b-lg overflow-clip cursor-default'>
        {board?.map((b) => (
          <div
            key={b.id}
            className='border-b border-zinc-600 p-4 hover:bg-zinc-600 last:border-none pb-3'
          >
            <p className='text-neutral-200 font-medium'>{b?.displayname}</p>
            <p className='text-neutral-400 text-sm'>@{b?.username}</p>
            <p className='text-neutral-300 text-sm mt-1'>{b?.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
