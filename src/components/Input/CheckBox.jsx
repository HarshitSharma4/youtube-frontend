import { useState } from "react";
import {
  addVideoToPlaylist,
  removeVideoToPlaylist,
} from "../../service/Playlist";
import { toast } from "react-toastify";

const CheckBox = ({
  className,
  name,
  isVideoPresent,
  videoId,
  _id,
  children,
  ...props
}) => {
  const [videoStatus, setVideoStatus] = useState(isVideoPresent);
  const notify = (message, type) => {
    toast[type](message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const toglePlaylistStatus = () => {
    if (videoStatus) {
      removeVideoToPlaylist({ videoId: videoId, playlistId: _id })
        .then(() => {
          notify("Video removed to playlist success", "success");
          setVideoStatus(false);
        })
        .catch(() => {
          notify("Failed to remove video in playlist", "error");
          setVideoStatus(true);
        });
    } else {
      addVideoToPlaylist({ videoId: videoId, playlistId: _id })
        .then(() => {
          notify("Video add to playlist success", "success");
          setVideoStatus(true);
        })
        .catch(() => {
          notify("Failed to add video in playlist", "error");
          setVideoStatus(false);
        });
    }
  };
  return (
    <div className="w-full flex items-center gap-5 px-5 py-3">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={videoStatus}
        onChange={() => {
          toglePlaylistStatus();
        }}
        {...props}
      />
      <label className={` text-xl ml-5 ${className}`}>{name}</label>
    </div>
  );
};

export default CheckBox;
