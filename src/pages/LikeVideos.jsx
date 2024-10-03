import { useEffect, useState } from "react";
import { getLikeVideos } from "../service/like";
import { Loading, VideoCard } from "../components";

function LikeVideos() {
  const [likeVideo, setLikeVideo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getLikeVideos().then((res) => {
      console.log(res);
      setLikeVideo(res.data.data.docs);
      setIsLoading(false);
    }).catch(()=>{setIsLoading(false)});
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-wrap justify-center  items-start md:justify-start gap-4 p-4 ">
      {likeVideo.map((item) => (
        <VideoCard key={item._id} {...item.likeVideos} />
      ))}
    </div>
  );
}

export default LikeVideos;
