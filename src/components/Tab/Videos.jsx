import { useEffect, useState } from "react";
import VideoCard from "../Card/VideoCard";
import { Button, Empty } from "../index.js";

import AddVideo from "../../pages/AddVideo.jsx";
import { getChannelVideos } from "../../service/deshboard.js";
function Videos({ channelId, isUserChannel, className }) {
  const [videos, setVideos] = useState([]);
  const [addvideo, setAddVideo] = useState(false);
  console.log("user Channel", isUserChannel);
  useEffect(() => {
    getChannelVideos({ channelId }).then((res) => {
      console.log(res.data.data);
      setVideos(res.data.data);
    });
  }, [channelId]);
  if (!videos.length)
    return (
      <div className={`w-full relative ${className}`}>
        {isUserChannel && (
          <Button
            className="bg-accent shadow-primary text-lg px-2 py-2 absolute top-1 right-4"
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
    <div className="w-full relative mt-7 h-[calc(100vh-9.8rem)] overflow-y-auto">
      {isUserChannel && (
        <Button
          className="bg-accent shadow-primary text-lg px-2 py-2 absolute top-1 right-4"
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
        {videos.map((item, index) => (
          <VideoCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Videos;
