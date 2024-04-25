import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Uploading } from "../index";
import { createTweet, updateTweet } from "../../service/tweets";
import { HiMiniXMark } from "react-icons/hi2";
import correct from "../../assets/correct.svg";
function TweetForm({
  className = "",
  setModel,
  content,
  tweetId,
  setTweetContent,
}) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      content: content || "",
    },
  });
  const [uploading, setUploading] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState("");
  const registerTweet = async (data) => {
    try {
      if (!content || !tweetId) {
        console.log(data);
        setUploading(true);
        setWaiting(true);
        console.log(data);
        const tweet = await createTweet({ ...data });
        if (tweet) {
          console.log(tweet);
          setTweetContent((prev) => [...prev, tweet.data.data]);
          setWaiting(false);
        }
        reset();
      } else {
        console.log(data);
        setUploading(true);
        setWaiting(true);
        console.log(data);
        const tweet = await updateTweet({
          tweetId: tweetId,
          content: data.content,
        });
        if (tweet) {
          console.log(tweet);
          setTweetContent(tweet.data.data.content);
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
      className={`w-[70%] border-2 py-10   bg-background shadow-lg shadow-secondary md:rounded-lg  flex items-center flex-col relative ${className}`}
    >
      <HiMiniXMark
        className="absolute top-4 right-4 text-secondary text-5xl font-extrabold"
        onClick={() => {
          setModel(false);
        }}
      />
      {!uploading && !waiting && (
        <form
          onSubmit={handleSubmit(registerTweet)}
          className="w-full px-8 py-5"
        >
          <Input
            label="Tweet : "
            placeholder="Write your tweet . . ."
            type="text"
            divClass="-translate-y-1 "
            {...register("content", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="text-base px-11 py-3 mt-5 font-medium bg-accent shadow-primary"
          >
            Publish
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
              Error Tweet does not {content ? "update" : "publish"}: {error}
            </h1>
            <Button
              className="bg-error text-lg shadow-primary px-5 py-2"
              onClick={() => {
                setModel(false);
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
                Tweet Successfully {content ? "update" : "publish"}
              </h1>
              <Button
                className="text-lg px-5 py-2 bg-success shadow-primary "
                onClick={() => {
                  setModel(false);
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

export default TweetForm;
