import React, { useEffect, useState } from "react";
import { getAllVideos } from "../service/video";
import { Loading, VideoCard } from "../components/index.js";
function Home() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllVideos().then((res) => {
      console.log(res.data.data);
      setVideos(res.data.data.docs);
      setIsLoading(false)
    }).catch(()=>{setIsLoading(false);});
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-wrap justify-center  items-start md:justify-start gap-4 p-4 ">
      {videos.map((item) => (
        <VideoCard key={item._id} {...item} />
      ))}
    </div>
  );
}

export default Home;
