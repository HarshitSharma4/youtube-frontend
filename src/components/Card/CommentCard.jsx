import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { Button, CommentForm } from "../index";
import { toggleLikeComment } from "../../service/like";
import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { deleteComment } from "../../service/comment";
function CommentCard({
  content,
  userDetail,
  isLikeByUser,
  like,
  _id,
  createdAt,
  setComments,
  isUserComment,
  comments = [],
}) {
  console.log(isUserComment);
  const [isLike, setIsLike] = useState(isLikeByUser);
  const [likeCount, setLikeCount] = useState(like);
  const [commentContent, setcommentContent] = useState(content);
  const [updateComment, setUpadateComment] = useState(false);
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

  const likeToggle = async () => {
    try {
      const like = await toggleLikeComment(_id);
      if (like) {
        setIsLike(!isLike);
        setLikeCount(isLike ? likeCount - 1 : likeCount + 1);
      }
      console.log(like);
    } catch (error) {
      console.log(error.message);
    }
  };
  const { years, months, days, hours, minutes, seconds } =
    differenceTime(createdAt);
  const deleteContent = async (commentId) => {
    try {
      const comment = await deleteComment({ commentId });
      console.log(comment);
      if (comment) {
        const newComent = comments.filter((item) => item._id !== commentId);
        console.log(newComent);
        setComments(newComent);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-1 px-3  flex gap-3 text-xl border-2 rounded-lg my-5 py-4 relative">
      {updateComment && (
        <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center z-50">
          <CommentForm
            content={content}
            commentId={_id}
            setModel={setUpadateComment}
            setcommentContent={setcommentContent}
          />
        </div>
      )}
      {isUserComment && (
        <div className="text-3xl border-2  absolute top-3 right-5 z-10 flex items-end justify-center  rounded-lg overflow-hidden">
          <FaPencilAlt
            className="px-2 py-2  border-r-2 border-text text-secondary hover:bg-secondary hover:text-text"
            onClick={() => {
              setUpadateComment(true);
            }}
          />
          <MdOutlineDeleteOutline
            className="px-2 py-1 text-error hover:bg-error hover:text-text"
            onClick={() => {
              deleteContent(_id);
            }}
          />
        </div>
      )}
      <img
        src={userDetail.avatar}
        alt="user avatar"
        className="h-16 w-16 hidden md:block border-2 rounded-[100%] overflow-hidden object-cover"
      />
      <div className="text-start pl-5 ">
        <div className="flex gap-7">
          <h1 className="font-semibold">{userDetail.fullName}</h1>
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
        <h3 className="font-extrabold ">{commentContent}</h3>
        <div className="flex gap-5">
          <Button
            className="shadow-none"
            onClick={() => {
              likeToggle();
            }}
          >
            {isLike ? <AiFillLike /> : <AiOutlineLike className="text-2xl" />}
          </Button>
          <p>{likeCount}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
