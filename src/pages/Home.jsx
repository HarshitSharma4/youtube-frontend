import React, { useEffect, useState } from "react";
import { getAllVideos } from "../service/video";
import { VideoCard } from "../components/index.js";
function Home() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getAllVideos().then((res) => {
      console.log(res.data.data);
      setVideos(res.data.data.docs);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 p-4 ">
      {videos.map((item) => (
        <VideoCard key={item._id} {...item} />
      ))}
    </div>
  );
}

export default Home;
