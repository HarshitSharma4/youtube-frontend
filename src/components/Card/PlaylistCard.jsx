import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistCard = ({_id,name,owner,description,playlistVideos,createdAt}) => {
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
  const { years, months, days, hours, minutes, seconds } =
  differenceTime(createdAt);
  return (
   <Link className="h-56 w-96 relative aspect-video rounded-xl transition-all overflow-hidden hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)] shadow-secondary border-secondary border-2" to={`/playlist/${_id}`}>
      <div className="w-full h-full">
        <img src={playlistVideos?.length > 0 ? playlistVideos[0].thumbnail:"https://images.unsplash.com/photo-1571292098320-997aa03a5d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhaW4lMjBiYWNrZ3JvdW5kc3xlbnwwfHwwfHx8MA%3D%3D"} 
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-2xl bg-primary px-5 py-2">
        <div className='flex justify-between items-center'>
          <h1 className="line-clamp-1 w-[65%] text-start">{name}</h1>
          <p className="text-lg text-start">{playlistVideos?.length} video</p>
        </div>
        <div className='flex items-center gap-4 justify-start text-xl'>
          <h2 className="text-start line-clamp-1 max-w-[65%]">{description}</h2>
          <p className='text-lg flex items-center gap-1'><div className='h-2 w-2 overflow-hidden rounded-[100%] bg-text text-xs '>.</div>
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
        <h2 className="text-lg text-start">{owner?.userName}</h2>
      </div>
   </Link>
  )
}

export default PlaylistCard