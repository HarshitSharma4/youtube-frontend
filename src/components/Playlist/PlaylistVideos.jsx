import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePlaylist, getplaylistById } from "../../service/Playlist";
import { PlaylistForm, VideoCard2 } from "../index";
import { FaPencil } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const PlaylistVideos = () => {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState();
  const [model, setModel] = useState(false);
  useEffect(() => {
    getplaylistById(playlistId).then((res) => {
      console.log("playlist by id->", res);
      setPlaylist(res?.data?.data);
    });
  }, [playlistId]);
  const differenceTime = (cteated) => {
    const createdDate = new Date(cteated);
    const currentDate = new Date();

    const timeDifference = currentDate - createdDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    return {
      years,
      months,
      days,
      hours: hours % 24,
      minutes: minutes % 60,
      seconds: seconds % 60,
    };
  };
  const { years, months, days, hours, minutes, seconds } = differenceTime(
    playlist?.createdAt
  );
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
  const navigate = useNavigate();
  const playlistDetete = () => {
    deletePlaylist(playlist?._id)
      .then(() => {
        notify("Playlist deleted success", "success");
        navigate("/");
      })
      .catch(() => {
        notify("Playlist delete failed", "error");
      });
  };
  const userId = useSelector((state) => state.auth.userData._id)
  const isOwner =( () =>{
    if(playlist)
     return playlist.owner.toString() === userId.toString() ? true:false;
    return false;
  })();
  return (
    <div className="flex items-start gap-7 p-7 h-full">
      <div className="bg-primary h-full basis-[30%] p-5 shrink-0 rounded-2xl">
        <div className="w-full aspect-video relative">
          <img
            src={
              playlist?.playlistVideos?.length > 0
                ? playlist?.playlistVideos[0].thumbnail
                : "https://images.unsplash.com/photo-1571292098320-997aa03a5d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhaW4lMjBiYWNrZ3JvdW5kc3xlbnwwfHwwfHx8MA%3D%3D"
            }
            className="h-full w-full object-cover"
          />
          <p className="text-lg text-start absolute bottom-3 right-3 bg-background px-3 py-2">
            {playlist?.playlistVideos?.length} video
          </p>
        </div>
        <div className="text-2xl py-4">
          <div className="flex justify-between items-center">
            <h1 className="w-[65%] text-start">{playlist?.name}</h1>
            {isOwner && <div className="flex gap-4 text-xl">
              <button
                className="px-3 py-2 rounded-lg text-accent bg-text hover:text-text hover:bg-accent"
                onClick={() => {
                  setModel(true);
                }}
              >
                <FaPencil />
              </button>
              {model && <PlaylistForm {...playlist} setModel={setModel} />}
              <button
                className="px-3 py-2 rounded-lg text-error bg-text hover:text-text hover:bg-error "
                onClick={() => {
                  playlistDetete();
                }}
              >
                <FaTrash />
              </button>
            </div>}
          </div>
          <div className="flex items-start gap-4 justify-between text-xl mt-5">
            <h2 className="text-start  max-w-[65%]">{playlist?.description}</h2>
            <p className="text-lg flex items-center justify-between gap-1">
              <div className="h-2 w-2 overflow-hidden rounded-[100%] bg-text text-xs ">
                .
              </div>
              <span>
                {years
                  ? `${years} years`
                  : months
                  ? `${months} months`
                  : days
                  ? `${days} days`
                  : hours
                  ? `${hours} hours`
                  : minutes
                  ? `${minutes} minites`
                  : seconds && `${seconds} seconds`}{" "}
              </span>
            </p>
          </div>
          <h2 className="text-lg text-start mt-4">
            {playlist?.creator?.fullName}
          </h2>
          <h2 className="text-lg text-start ">
            @{playlist?.creator?.userName}
          </h2>
        </div>
      </div>
      <div className="overflow-y-scroll flex flex-col gap-5">
        {playlist?.playlistVideos?.map((item) => (
          <VideoCard2
            key={item._id}
            {...item}
            playlistId={playlist?._id}
            isPlaylistVideo={true}
            setPlaylist={setPlaylist}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistVideos;
