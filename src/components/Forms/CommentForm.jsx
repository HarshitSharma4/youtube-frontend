import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Uploading } from "../index";

import { HiMiniXMark } from "react-icons/hi2";
import correct from "../../assets/correct.svg";
import { createComment, updateComment } from "../../service/comment";
function CommentForm({
  className = "",
  content,
  commentId,
  videoId,
  setModel,
  setComments,
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      content: content || "",
    },
  });
  const [uploading, setUploading] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState("");
  const registerComment = async (data) => {
    try {
      if (!content || !commentId) {
        console.log(data);
        setUploading(true);
        setWaiting(true);
        console.log(videoId);
        const comment = await createComment({ ...data, videoId: videoId });
        if (comment) {
          console.log(comment);
          setComments((prev) => [...prev, comment.data.data]);
          setWaiting(false);
        }
        reset();
      } else {
        console.log(data);
        setUploading(true);
        setWaiting(true);
        console.log(data);
        const comment = await updateComment({
          commentId: commentId,
          content: data.content,
        });
        if (comment) {
          console.log(comment);
          setComments(comment.data.data.content);
          setWaiting(false);
        }
        reset();
      }
    } catch (error) {
      setWaiting(false);
      setError(error?.message);
    }
  };
  return (
    <div
      className={`w-full my-4 border-2 pt-2 bg-background shadow-lg shadow-secondary md:rounded-lg  flex items-center flex-col relative ${className} ${
        setModel && "pt-5"
      }`}
    >
      {setModel && (
        <HiMiniXMark
          className="absolute top-2 right-2 text-secondary text-3xl font-extrabold"
          onClick={() => {
            setModel(false);
          }}
        />
      )}
      {!uploading && !waiting && (
        <form
          onSubmit={handleSubmit(registerComment)}
          className="w-full px-8 py-5 flex gap-4 flex-wrap items-center"
        >
          <Input
            placeholder="Write your Comment . . ."
            type="text"
            divClass="-translate-y-1 "
            {...register("content", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="text-base -translate-y-4 px-11 py-3 mt-5 font-medium bg-accent shadow-primary"
          >
            Comment
          </Button>
        </form>
      )}
      {uploading && waiting && (
        <>
          <Uploading />
        </>
      )}
      {uploading &&
        !waiting &&
        (error ? (
          <div className="w-full h-full flex flex-col justify-center items-center space-y-7">
            <h1 className="text-error text-xl">
              Error comment does not {content ? "update" : "publish"}: {error}
            </h1>
            <Button
              className="bg-error text-lg shadow-primary px-5 py-2 !mb-4"
              onClick={() => {
                setUploading(false);
                setWaiting(false);
                if (setModel) setModel(false);
              }}
            >
              Try Again
            </Button>
          </div>
        ) : (
          <>
            <div className="w-full h-full flex flex-col justify-center items-center space-y-7">
              <img src={correct} alt="SuccessFull" className="h-16 w-16" />
              <h1 className="text-2xl">
                Comment Successfully {content ? "update" : "publish"}
              </h1>
              <Button
                className="text-lg px-5 py-2 bg-success shadow-primary !mb-4"
                onClick={() => {
                  setUploading(false);
                  setWaiting(false);
                  if (setModel) setModel(false);
                }}
              >
                {" "}
                Done
              </Button>
            </div>
          </>
        ))}
    </div>
  );
}

export default CommentForm;
