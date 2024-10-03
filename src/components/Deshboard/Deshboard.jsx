import { useEffect, useState } from "react";
import { getChannelStats, getChannelVideos } from "../../service/deshboard";
import { DeshboardVideos, Loading, Stats } from "../index";
const Deshboard = () => {
  const [stats, setStats] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getChannelStats().then((res) => {
      console.log(res);
      const userStats = [
        { name: "Total Views", total: res.data.data.totalViews },
        { name: "Total Subscribers", total: res.data.data.totalSubscribers },
        { name: "Total Likes", total: res.data.data.totalLikes },
      ];
      setStats(userStats);
      getChannelVideos().then((res) => {
        console.log("videos,", res.data.data);
        setVideos(res.data.data.docs);
      });
      setIsLoading(false);
    });
  },[]);
 
  if (isLoading) return <Loading />;
 

  return (<div className="px-5 py-7">
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 *:cursor-pointer">
      {stats.map((item) => (
        <Stats key={item.name} {...item} />
      ))}
    </div>
   {videos?.length && <DeshboardVideos videos={videos} setVideos={setVideos} />}
  </div>
  );
};

export default Deshboard;
