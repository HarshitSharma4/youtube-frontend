import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Uploading } from "../index";

import { HiMiniXMark } from "react-icons/hi2";
import correct from "../../assets/correct.svg";
import { createPlaylist, updatePlaylist } from "../../service/Playlist";
const PlaylistForm = ({
  className = "",
  name,
  discription,
  playlistId,
  setModel,
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: name || "",
      discription: discription || "",
    },
  });
  const [uploading, setUploading] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState("");
  const registerComment = async (data) => {
    try {
      if (!name || !playlistId) {
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
          playlistId: playlistId,
          name: name,
          discription: discription,
        });
        if (Playlist) {
          //Todo:set Playlist in state
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
        {!name || !playlistId ? "Created" : "Updated"} Playlist
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
            label="Discription :-"
            placeholder="Write  Playlist discription . . ."
            type="text"
            divClass="-translate-y-1 "
            {...register("discription", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="text-base -translate-y-4 px-11 py-3 mt-5 font-medium bg-accent shadow-primary"
          >
            {!name || !playlistId ? "Create" : "Update"} Playlist
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
              {!name || !playlistId ? "Created" : "Updated"}: {error}
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
                {!name || !playlistId ? "Created" : "Updated"}
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
  );
};

export default PlaylistForm;
