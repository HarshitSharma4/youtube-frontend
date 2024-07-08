import { useEffect, useState } from "react";
import { getLikeVideos } from "../service/like";
import { VideoCard } from "../components";

function LikeVideos() {
  const [likeVideo, setLikeVideo] = useState([]);
  useEffect(() => {
    getLikeVideos().then((res) => {
      console.log(res);
      setLikeVideo(res.data.data);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 p-4 ">
      {likeVideo.map((item) => (
        <VideoCard key={item._id} {...item.likeVideos} />
      ))}
    </div>
  );
}

export default LikeVideos;
