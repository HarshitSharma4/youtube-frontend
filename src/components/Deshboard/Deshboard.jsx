import { useEffect, useState } from "react";
import { getChannelStats } from "../../service/deshboard";
import { DeshboardVideos, Stats } from "../index";
const Deshboard = () => {
  const [stats, setStats] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getChannelStats().then((res) => {
      console.log(res);
      const userStats = [
        { name: "Total Views", total: res.data.data.totalViews },
        { name: "Total Subscribers", total: res.data.data.totalSubscribers },
        { name: "Total Likes", total: res.data.data.totalLikes },
      ];
      setStats(userStats);
    });
  },[]);

  return (<div className="px-5 py-7">
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 *:cursor-pointer">
      {stats.map((item) => (
        <Stats key={item.name} {...item} />
      ))}
    </div>
    <DeshboardVideos />
  </div>
  );
};

export default Deshboard;
