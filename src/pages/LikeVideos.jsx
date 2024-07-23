import { useEffect, useState } from "react";
import { getLikeVideos } from "../service/like";
import { VideoCard } from "../components";

function LikeVideos() {
  const [likeVideo, setLikeVideo] = useState([]);
  useEffect(() => {
    getLikeVideos().then((res) => {
      console.log(res);
      setLikeVideo(res.data.data.docs);
    });
  }, []);
  return (
    <div className="flex flex-wrap justify-center  items-start md:justify-start gap-4 p-4 ">
      {likeVideo.map((item) => (
        <VideoCard key={item._id} {...item.likeVideos} />
      ))}
    </div>
  );
}

export default LikeVideos;
