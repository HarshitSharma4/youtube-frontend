import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Uploading } from "../index";

import { HiMiniXMark } from "react-icons/hi2";
import correct from "../../assets/correct.svg";
import { createPlaylist, updatePlaylist } from "../../service/Playlist";
const PlaylistForm = ({
  className = "",
  name,
  description,
  _id,
  setModel,
  setPlaylist,
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: name || "",
      description: description || "",
    },
  });
  const [uploading, setUploading] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState("");
  const registerComment = async (data) => {
    setError(false)
    try {
      if (!name || !_id) {
        console.log(data);
        setUploading(true);
        setWaiting(true);

        const playlist = await createPlaylist({ ...data });
        if (playlist) {
          console.log(playlist);

          setWaiting(false);
        }
        reset();
      } else {
        console.log(data);
        setUploading(true);
        setWaiting(true);
        console.log(data);
        const Playlist = await updatePlaylist({
          playlistId: _id,
          name: data?.name,
          description: data?.description,
        });
        console.log(Playlist)
        if (Playlist) {
          //Todo:set Playlist in state
          if(setPlaylist){
            setPlaylist((prev)=>{return {...prev,name:name,description: description}});
          }
          setWaiting(false);
        }
        reset();
      }
    } catch (error) {
      setWaiting(false);
      setError(true);
    }
  };
  return (<div className="fixed top-0 bottom-0 left-0 right-0 grid place-items-center z-50 bg-gradient-to-b from-[rgba(70,69,69,0.4)] to-[rgba(41,68,216,0.34)]">

    <div
      className={`w-[65%] p-10 my-4 border-2 pt-2 bg-background shadow-lg shadow-secondary md:rounded-lg  flex flex-col items-center justify-center relative ${className} ${
        setModel && "pt-5"
      }`}
    >
      {setModel && (
        <HiMiniXMark
          className="absolute top-2 right-2 text-secondary text-4xl font-extrabold"
          onClick={() => {
            setModel(false);
          }}
        />
      )}
      <h1 className="text-3xl my-7">
        {!name || !_id ? "Created" : "Updated"} Playlist
      </h1>
      {!uploading && !waiting && (
        <form
          onSubmit={handleSubmit(registerComment)}
          className="w-[85%] mx-auto px-10 py-5 flex gap-10 items-center justify-center flex-col"
        >
          <Input
            label="Name :-"
            placeholder="Write  Playlist name . . ."
            type="text"
            divClass="-translate-y-1 "
            {...register("name", {
              required: true,
            })}
          />
          <Input
            label="description :-"
            placeholder="Write  Playlist description . . ."
            type="text"
            divClass="-translate-y-1 "
            {...register("description", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="text-base -translate-y-4 px-11 py-3 mt-5 font-medium bg-accent shadow-primary"
          >
            {!name || !_id ? "Create" : "Update"} Playlist
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
              Error Playlist does not{" "}
              {!name || !_id ? "Created" : "Updated"}: {error}
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
                Playlist Successfully{" "}
                {!name || !_id ? "Created" : "Updated"}
              </h1>
              <Button
                className="text-lg px-5 py-2 bg-success shadow-primary !mb-4"
                onClick={() => {
                  setUploading(false);
                  setWaiting(false);
                  if (setModel) setModel(false);
                }}
              >
                Done
              </Button>
            </div>
          </>
        ))}
    </div>
  </div>
  );
};

export default PlaylistForm;
