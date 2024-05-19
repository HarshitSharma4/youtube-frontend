import { useEffect, useState } from "react";
import { VideoCard } from "../components"
import { getWatchHistory } from "../service/user";

function History() {
  const [HistoryVideos, setHistoryVideos] = useState([]);
  useEffect(() => {
    getWatchHistory().then((res) => {
      console.log(res.data.data.watchHistory);
      setHistoryVideos(res.data.data.watchHistory);
    });
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 p-4 ">
    {HistoryVideos.map((item, index) => (
      <VideoCard key={index} {...item} createdBy={item.owner} />
    ))}
  </div>
  )
}

export default History
