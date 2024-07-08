import { useEffect, useState } from "react";
import { getUserPlaylists } from "../../service/Playlist";
import { PlaylistCard } from "../index";

function Playlist({channelId}) {
  const [playlists, setPlaylists] = useState([]);
  
  useEffect(() => {
   
      getUserPlaylists(channelId).then((res) => {
        setPlaylists(res?.data?.data);
        console.log(res);
      });
    
  }, [channelId]);
  return (
    <div className="grid grid-cols-3 gap-7 px-5 py-7 min-h-[calc(100vh-12rem)]">
      {playlists.map((item) => (
        <PlaylistCard key={item._id} {...item} />
      ))}
    </div>
  );
}

export default Playlist;
