import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideo } from "../service/video";
import { Comments, ShowVideo, Uploading } from "../components/index";
function Video() {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  useEffect(() => {
    if (videoId)
      getVideo(videoId).then((res) => {
        console.log(res);
        if (res?.data?.data) setVideo(res.data.data);
      });
  }, [videoId]);
  return (
    <div className="px-4 pb-4 pt-2 space-y-4">
      {video ? <ShowVideo {...video} /> : <Uploading />}
      {video ? <Comments videoId={videoId} /> : <Uploading />}
    </div>
  );
}

export default Video;
