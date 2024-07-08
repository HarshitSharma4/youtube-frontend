import React, { useState } from "react";
import { videoTogglePublish } from "../../service/video";
import { toast } from "react-toastify";

const PublishToggle = ({ _id, isPublished }) => {
  const [publish, setPublish] = useState(isPublished);

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

  const toggle = async () => {
    try {
      const video = await videoTogglePublish(_id);
      if (video) {
        setPublish((prevPublish) => !prevPublish);
        notify("Toggle Publish Video success", "success");
      }
    } catch (error) {
      console.error(error);
      notify("Failed to toggle publish state", "error");
    }
  };

  return (
    <>
      <td className="border-collapse border-b px-4 py-3 group-last:border-none">
        <div className="flex justify-center">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={publish}
              className="sr-only peer"
              onChange={toggle}
            />
            <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-secondary dark:peer-focus:ring-accent rounded-full peer dark:bg-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-text after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-text after:border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-primary peer-checked:bg-primary"></div>
          </label>
        </div>
      </td>
      <td className="border-collapse border-b px-4 py-3 group-last:border-none">
        <div className="flex justify-center">
          <span
            className={`inline-block rounded-2xl border px-1.5 py-0.5 ${
              publish ? "text-secondary" : "text-primary"
            }`}
          >
            {publish ? "Published" : "Unpublished"}
          </span>
        </div>
      </td>
    </>
  );
};

export default PublishToggle;
