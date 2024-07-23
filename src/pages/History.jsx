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
    <div className="flex flex-wrap justify-center  items-start md:justify-start gap-4 p-4 ">
    {HistoryVideos.map((item) => (
      <VideoCard key={item._id} {...item} createdBy={item.owner} />
    ))}
  </div>
  )
}

export default History
