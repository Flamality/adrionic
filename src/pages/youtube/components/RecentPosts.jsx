import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RecentPosts() {
  const [videos, setVideos] = useState([]);
  const [views, setViews] = useState({});

  useEffect(() => {
    const CHANNEL_ID = "UCwkFrWvPdVA3O0zHCeALiMA";
    const API_KEY = "AIzaSyDrnkfhuV42lUr7q17XEk77QV-isqdkyQE";

    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=5`
        );
        const data = await res.json();
        setVideos(data.items);
        fetchViews(data.items);
      } catch (error) {
        console.error("Failed to fetch recent videos:", error);
      }
    };

    const fetchViews = async (videos) => {
      try {
        const videoIds = videos.map((video) => video.id.videoId).join(",");
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${API_KEY}`
        );
        const data = await res.json();
        const viewData = {};
        data.items.forEach((video) => {
          viewData[video.id] = video.statistics.viewCount;
        });
        setViews(viewData);
      } catch (error) {
        console.error("Failed to fetch view counts:", error);
      }
    };

    fetchVideos();
  }, []);

  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const secondsAgo = Math.floor((now - date) / 1000);

    if (secondsAgo < 60) return "just now";
    const minutes = Math.floor(secondsAgo / 60);
    if (minutes < 60) return `${minutes} min ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? "s" : ""} ago`;
    const years = Math.floor(days / 365);
    return `${years} year${years > 1 ? "s" : ""} ago`;
  };

  const formatViews = (count) => {
    if (count >= 1_000_000) return (count / 1_000_000).toFixed(1) + "M";
    if (count >= 1_000) return (count / 1_000).toFixed(1) + "K";
    return count;
  };

  return (
    <div className='flex flex-col items-center w-full gap-6 mt-10'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {videos?.map((video) => (
          <motion.a
            key={video.id.videoId}
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target='_blank'
            rel='noopener noreferrer'
            className='flex flex-col items-center rounded-lg transition-all'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className='rounded-lg w-full shadow-md'
            />
            <p className='text-sm w-full text-neutral-300 mt-2 mb-1 font-semibold line-clamp-2'>
              {video.snippet.title}
            </p>
            <p className='text-xs w-full text-neutral-400'>
              {views[video.id.videoId]
                ? `${formatViews(Number(views[video.id.videoId]))} views`
                : "Loading views..."}
              {" • "} {timeAgo(video.snippet.publishedAt)}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
