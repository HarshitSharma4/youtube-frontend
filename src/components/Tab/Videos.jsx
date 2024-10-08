import { useEffect, useState } from "react";
import VideoCard from "../Card/VideoCard";
import { Button, Empty, Loading } from "../index.js";

import AddVideo from "../../pages/AddVideo.jsx";
import { getAllVideos } from "../../service/video.js";
function Videos({ channelId, isUserChannel }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addvideo, setAddVideo] = useState(false);
  console.log("user Channel", isUserChannel);
  useEffect(() => {
    getAllVideos({ userId: channelId }).then((res) => {
      console.log(res.data.data);
      setVideos(res.data.data.docs);
      setIsLoading(false);
    }).catch(()=>{setIsLoading(false)});
  }, [channelId]);
  if (isLoading) return <Loading />;
  if (!videos.length)
    return (
      <div className={`w-full h-full relative  min-h-[calc(100vh-11.6rem)]`}>
        {isUserChannel && (
          <Button
            className="bg-accent shadow-primary text-lg px-2 py-2 absolute z-50 top-1 right-4"
            onClick={() => {
              setAddVideo(true);
            }}
          >
            +Add Video
          </Button>
        )}
        {addvideo && <AddVideo setAddVideo={setAddVideo} />}
        <Empty
          title="No videos uploaded"
          message=" This page has yet to upload a video. Search another page in order to
        find more videos."
        />
      </div>
    );
  return (
    <div className="w-full relative mt-7 min-h-[calc(100vh-11.6rem)] overflow-y-auto">
      {isUserChannel && (
        <Button
          className="bg-accent shadow-primary text-lg px-2 py-2 absolute z-50 top-1 right-4"
          onClick={() => {
            setAddVideo(true);
          }}
        >
          {" "}
          +Add Video
        </Button>
      )}
      {addvideo && <AddVideo setAddVideo={setAddVideo} />}
      <div className="grid grid-cols-4 gap-4 p-4 ">
        {videos.map((item) => (
          <VideoCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Videos;
