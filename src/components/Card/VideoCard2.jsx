import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import { addVideoToPlaylist, removeVideoToPlaylist } from "../../service/Playlist";
import { toast } from "react-toastify";
import PlaylistModel from "../Playlist/PlaylistModel";

const VideoCard2 = ({
  _id,
  thumbnail,
  title,
  duration,
  createdBy,
  views,
  description,
  createdAt,
  playlistId,
  isPlaylistVideo = false,
  setPlaylist,
}) => {
  console.log(_id);

  const [model, setModel] = useState(false);
  const [isOpttions, setIsOptions] = useState();
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
  const time = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    return {
      videoHoure: Math.round(hours % 24),
      videoMinute: Math.round(minutes % 60),
      videoSecond: Math.round(seconds % 60),
    };
  };
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
  const toggleVideo = ()=>{
      if(playlistId && isPlaylistVideo && setPlaylist){
        removeVideoToPlaylist({ videoId:_id, playlistId:playlistId }).then(()=>{

          setPlaylist((prev)=>{
            const newList = prev.playlistVideos.filter((item)=>item._id !== _id);
            return {...prev,playlistVideos:newList};
          })
          notify("Video removed to playlist success", "success");
        }).catch(()=>{
          notify("Failed to remove video in playlist", "error");
        });
      }else{
        setModel(true);
      }
  }
  const { years, months, days, hours, minutes, seconds } =
    differenceTime(createdAt);

  const { videoHoure, videoMinute, videoSecond } = time(duration);
  console.log(time(duration));
  return (
    <Link to={`/video/${_id}`} className="relative">
      {model &&  <PlaylistModel setModel={setModel} videoId={_id} />}
      <button
        className="pt-4 pl-7 pr-5 pb-7 rounded-lg text-2xl absolute top-0 right-0"
        onClick={(e) => {
          e.preventDefault();
          setIsOptions(!isOpttions);
        }}
      >
        <HiDotsVertical />
      </button>
      {isOpttions && (
        <div className="absolute top-14 right-3 *:rounded-xl rounded-xl p-0 border-2 bg-background">
          <div className="text-base font-semibold text-center px-3 py-1 hover:bg-primary"
           onClick={(e)=>{
               e.preventDefault();
               toggleVideo();
           }}
          >
            {!isPlaylistVideo || !playlistId
              ? "Add To Playlistt"
              : "Remove from playlist"}
          </div>
        </div>
      )}
      <div className="  hover:bg-primary cursor-pointer p-1 shadow-sm flex items-start justify-start gap-5 shadow-text rounded-lg border-2">
        <div className="relative  aspect-video basis-[45%] shrink-0 border-r-2 pr-2">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="h-full w-full rounded-lg hover:rounded-none object-cover"
          />
          <h1 className="bg-background absolute bottom-1 right-3 rounded-md  text-base py-1 px-2 font-bold">
            {videoHoure ? `${videoHoure}` : ""}
            {videoMinute > 9 ? `${videoMinute} :` : `0${videoMinute}:`}
            {videoSecond > 9 ? `${videoSecond}` : `0${videoSecond}`}
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 p-1 text-base basis-2/3">
          <h1 className="font-bold text-3xl line-clamp-1 text-start w-[80%]">
            {title}
          </h1>
          <h2 className="text-lg font-medium line-clamp-1 text-start">
            {description}
          </h2>

          <div className="flex">
            <img
              src={createdBy.avatar}
              alt="avatar"
              className="h-16 w-16 rounded-[100%]  shrink"
            />
            <div className="text-base *:text-start py-2 px-2 grow flex flex-col">
              <div className="flex justify-between ">
                <h3>{views} view</h3>
                <h3>
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
                  ago
                </h3>
              </div>
              <h2>@{createdBy?.userName}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard2;
