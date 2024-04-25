import React, { useEffect, useState } from "react";
import { getWatchHistory } from "../service/user";
import { VideoCard } from "../components";

function Watchlater() {
  const [watchlaterVideo, setWatchlaterVideo] = useState([]);
  useEffect(() => {
    getWatchHistory().then((res) => {
      console.log(res.data.data.watchHistory);
      setWatchlaterVideo(res.data.data.watchHistory);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 p-4 ">
      {watchlaterVideo.map((item, index) => (
        <VideoCard key={index} {...item} createdBy={item.owner} />
      ))}
    </div>
  );
}

export default Watchlater;
