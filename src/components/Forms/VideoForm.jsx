import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Logo, Uploading } from "../index";
import { publishVideo } from "../../service/video";
import correct from "../../assets/correct.svg";
import { HiMiniXMark } from "react-icons/hi2";
function VideoForm({ className = "", setAddVideo }) {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const registerForm = async (data) => {
    setError("");
    try {
      setUploading(true);
      setWaiting(true);
      console.log(data);
      const videoPublish = await publishVideo({ ...data });
      if (videoPublish) {
        console.log(videoPublish);
        setWaiting(false);
      }
      reset();
    } catch (error) {
      setWaiting(false);
      setError(error?.message);
    }
  };
  return (
    <div
      className={`w-[70%] border-2  bg-background shadow-lg shadow-secondary md:rounded-lg  flex items-center flex-col relative ${className}`}
    >
      <HiMiniXMark
        className="absolute top-4 right-4 text-secondary text-5xl font-extrabold"
        onClick={() => {
          setAddVideo(false);
        }}
      />
      {!uploading && !waiting && (
        <>
          <Logo className="h-16 w-16" />
          <h1 className="text-xl font-bold text-center">Add New Video</h1>
          <form onSubmit={handleSubmit(registerForm)} className="mt-8">
            <div className="flex flex-col items-center justify-center space-y-5">
              <Input
                label="Title : "
                placeholder="Enter your Name"
                type="text"
                divClass="-translate-y-1"
                {...register("title", {
                  required: true,
                })}
              />
              <Input
                label="Description : "
                placeholder="Enter Your Email"
                type="text"
                divClass="-translate-y-1 "
                {...register("description", {
                  required: true,
                })}
              />
              <Input
                label="Thumbnail : "
                placeholder="Enter your Name"
                type="file"
                accept="image/png , image/jpg, image/jpeg, image/gif"
                className=""
                divClass="-translate-y-1"
                {...register("thumbnail", {
                  required: true,
                })}
              />
              <Input
                label="Video : "
                placeholder="Enter your Name"
                type="file"
                divClass="-translate-y-1"
                {...register("videoFile", {
                  required: true,
                })}
              />
              <Button
                type="submit"
                className="text-base px-11 py-3 mt-5 font-medium bg-accent shadow-primary"
              >
                Save
              </Button>
            </div>
          </form>
        </>
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
              Error Video does not added {error}
            </h1>
            <Button
              className="bg-error text-lg shadow-primary px-5 py-2"
              onClick={() => {
                setAddVideo(false);
              }}
            >
              Try Again
            </Button>
          </div>
        ) : (
          <>
            <div className="w-full h-full flex flex-col justify-center items-center space-y-7">
              <img src={correct} alt="SuccessFull" className="h-16 w-16" />
              <h1 className="text-2xl">Video Uploaded Success</h1>
              <Button
                className="text-lg px-5 py-2 bg-success shadow-primary "
                onClick={() => {
                  setAddVideo(false);
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

export default VideoForm;
