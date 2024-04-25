import { useEffect, useState } from "react";
import { Button } from "../index";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { toggleLikeVideo } from "../../service/like";
import { toggleSubscription } from "../../service/subscription";
import { MdOutlinePersonAdd, MdFolder } from "react-icons/md";
import { Link } from "react-router-dom";
function ShowVideo({
  _id,
  title,
  videoFile,
  views,
  createdBy,
  createdAt,
  like,
  isLikeByUser,
  isSubscribed,
  description,
}) {
  const [isLike, setIsLike] = useState(isLikeByUser);
  const [likeCount, setLikeCount] = useState(like);
  const [subcribe, setSubscribe] = useState(isSubscribed);
  const [isDiscription, setIsDiscription] = useState(false);
  useEffect(() => {
    setIsLike(isLikeByUser);
    setLikeCount(like);
    setSubscribe(isSubscribed);
  }, [like, isLikeByUser, isSubscribed]);
  const likeToggle = async () => {
    try {
      console.log(_id);
      const like = await toggleLikeVideo(_id);
      if (like) {
        setIsLike(!isLike);
        setLikeCount(isLike ? likeCount - 1 : likeCount + 1);
      }
      console.log(like);
    } catch (error) {
      console.log(error.message);
    }
  };
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
  const toggleSubscribe = async () => {
    try {
      const toggle = await toggleSubscription(_id);
      console.log(toggle);
      setSubscribe(!subcribe);
    } catch (error) {
      alert(error?.message);
    }
  };
  const { years, months, days, hours, minutes, seconds } =
    differenceTime(createdAt);
  console.log(like, likeCount);
  console.log(isLike);
  return (
    <div className=" space-y-4">
      <video className="w-full h-[37rem]  mb-4" controls={true}>
        <source src={videoFile} alt="video file" type="video/mp4" />
      </video>
      <div className="text-lg font-semibold border-2 rounded-xl p-4">
        <div className="flex justify-between items-start gap-4 mb-7 mt-2">
          <div className="space-y-4 ">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex gap-4">
              <h2>{views} views </h2>
              <h3 className="text-primary font-thin text-lg">
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
          </div>
          <div className="flex border-2 rounded-md px-2 gap-2">
            <Button
              className="shadow-none p-1"
              onClick={() => {
                likeToggle();
              }}
            >
              {isLike ? <AiFillLike /> : <AiOutlineLike className="text-xl" />}
            </Button>
            <p className="text-xl p-1">{likeCount ? likeCount : "0"}</p>
          </div>
          <Button className="px-4 py-1 rounded-sm bg-accent shadow-primary flex gap-4 items-center mr-5">
            <MdFolder />
            Save
          </Button>
        </div>
        <div className="flex justify-between pb-4 border-b-2">
          <Link
            to={`/channel/${createdBy?.userName}`}
            className="flex gap-4 items-center"
          >
            <img
              className="h-20 w-20 rounded-[100%] "
              src={createdBy?.avatar}
              alt="avatar"
            />
            <div className="flex flex-col items-start">
              <h1 className="text-xl">{createdBy?.fullName}</h1>
              <h3 className="text-lg ">
                {createdBy?.suscribersCount || "0"} Subscribers
              </h3>
            </div>
          </Link>
          <Button
            className="px-4 py-1 rounded-sm bg-accent shadow-primary flex gap-4 items-center mr-5 h-12 overflow-hidden"
            onClick={() => {
              toggleSubscribe();
            }}
          >
            <MdOutlinePersonAdd />
            {subcribe ? "Subscribed" : "subscribe"}
          </Button>
        </div>
        <p
          className={`my-5 text-start cursor-pointer ${
            isDiscription ? "" : "line-clamp-2"
          }`}
          onClick={() => {
            setIsDiscription(!isDiscription);
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default ShowVideo;
