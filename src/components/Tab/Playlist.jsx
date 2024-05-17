import { useEffect, useState } from "react";
import { getUserPlaylists } from "../../service/Playlist";
import { useSelector } from "react-redux";
import { PlaylistCard } from "../index";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const userId = useSelector((state) => state.auth.userData._id);
  useEffect(() => {
   
      getUserPlaylists(userId).then((res) => {
        setPlaylists(res?.data?.data);
        console.log(res);
      });
    
  }, [userId]);
  return (
    <div className="grid grid-cols-3 gap-7 p-5">
      {playlists.map((item, key) => (
        <PlaylistCard key={key} {...item} />
      ))}
    </div>
  );
}

export default Playlist;
