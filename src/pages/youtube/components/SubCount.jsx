import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function SubCount() {
  const [subs, setSubs] = useState(0);
  const prevSubs = useRef(0); // To keep track of the previous count
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) =>
    Math.floor(value).toLocaleString("en-US")
  );

  useEffect(() => {
    const CHANNEL_ID = "UCwkFrWvPdVA3O0zHCeALiMA";
    // const CHANNEL_ID = "UCX6OQ3DkcsbYNE6H8uQQuVA";
    const API_KEY = "AIzaSyDrnkfhuV42lUr7q17XEk77QV-isqdkyQE";

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );
        const data = await res.json();
        setSubs(Number(data.items[0].statistics.subscriberCount));
      } catch (error) {
        console.error("Failed to fetch subscriber count:", error);
      }
    };

    fetchData();

    // Uncomment to auto-refresh every 5 seconds:
    // const interval = setInterval(fetchData, 5000);
    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const difference = Math.abs(subs - prevSubs.current);
    const duration = Math.min(3, 0.5 + difference / 1000);

    animate(count, subs, { duration, ease: "easeOut" });

    prevSubs.current = subs;
  }, [subs]);

  return (
    <div className='flex flex-col items-center w-full gap-2'>
      <p className='text-3xl text-neutral-200 font-bold'>SUBSCRIBER COUNT</p>
      <motion.p className='text-7xl text-neutral-100 font-extrabold tracking-widest'>
        {rounded}
      </motion.p>
      <p className='text-sm text-neutral-300 font-semibold'>
        Count rounded due to YouTube API
      </p>
    </div>
  );
}
