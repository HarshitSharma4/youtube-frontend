import { useEffect, useState } from "react";
import { Loading, VideoCard } from "../components"
import { getWatchHistory } from "../service/user";

function History() {
  const [HistoryVideos, setHistoryVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWatchHistory().then((res) => {
      console.log(res.data.data.watchHistory);
      setHistoryVideos(res.data.data.watchHistory);
      setIsLoading(false);
    }).catch(()=>{setIsLoading(false)});
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-wrap justify-center  items-start md:justify-start gap-4 p-4 ">
    {HistoryVideos.map((item) => (
      <VideoCard key={item._id} {...item} createdBy={item.owner} />
    ))}
  </div>
  )
}

export default History
