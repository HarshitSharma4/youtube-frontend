import React, { useEffect, useState } from "react";
import { getUserPlaylists } from "../../service/Playlist";

function Playlist() {
  const [userPlaylist, setUserPlaylist] = useState([]);
  const userId = "6606cea715ca1540def03d15";
  useEffect(() => {
    getUserPlaylists(userId).then((res) => {
      if (res?.data?.data) console.log("empty");
      console.log("playlist->", res);
    });
  }, []);
  return <div></div>;
}

export default Playlist;
