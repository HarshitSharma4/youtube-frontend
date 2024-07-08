import { useEffect, useState } from "react";
import { getPlaylistVideoStatus } from "../../service/Playlist";
import { FaPlus } from "react-icons/fa";
import { CheckBox, PlaylistForm } from "../index";
import { FaXmark } from "react-icons/fa6";
const PlaylistModel = ({ videoId, setModel }) => {
  const [playlistStatus, setPlaylistStatus] = useState([]);
  const [addPlaylist, setAddPlaylist] = useState(false);

  useEffect(() => {
    if (!addPlaylist) {
      getPlaylistVideoStatus({ videoId }).then((res) => {
        console.log(res);
        setPlaylistStatus(res.data.data);
        console.log("playlist statrrus", playlistStatus);
      });
    }
  }, [videoId, addPlaylist]);
  if (addPlaylist) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 grid place-items-center">
        <PlaylistForm setModel={setAddPlaylist} />
      </div>
    );
  }
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 grid place-items-center">
      <div className="rounded-xl border-2 w-80  bg-background text-text">
        <div className="flex justify-between item-center p-5 border-b-2">
          <h1 className="text-xl font-bold">Save Video to Playlist ...</h1>
          <FaXmark
            className="text-2xl"
            onClick={() => {
              setModel(false);
            }}
          />
        </div>
        <div className="overflow-y-scroll h-72 space-y-4 mt-4">
          {playlistStatus.map((item) => (
            <CheckBox key={item._id} {...item} videoId={videoId} />
          ))}
        </div>
        <div
          className="flex items-center justify-start gap-5 p-5 border-t-2 text-xl font-bold"
          onClick={() => {
            setAddPlaylist(true);
          }}
        >
          <FaPlus />
          Create new Playlist ...
        </div>
      </div>
    </div>
  );
};

export default PlaylistModel;
