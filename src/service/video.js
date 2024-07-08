import axios from "axios";

const getAllVideos = async (quarys) => {
  //{ page = 1, limit = 10, query, sortBy, sortType, userId }
  try {
    const videos = await axios.get("/api/v1/videos", {
      params: { ...quarys },
    });
    return videos;
  } catch (error) {
    console.error("getAllVideos :: ", error);
    throw error;
  }
};
const publishVideo = async ({ title, description, thumbnail, videoFile }) => {
  try {
    console.log({ title, description, thumbnail, videoFile });
    const videos = await axios.post(
      `/api/v1/videos/upload`,
      { title, description, thumbnail: thumbnail[0], videoFile: videoFile[0] },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return videos;
  } catch (error) {
    console.error("publishVideo :: ", error);
    throw error;
  }
};
const getVideo = async (videoId) => {
  try {
    const video = await axios.get(`/api/v1/videos/${videoId}`);
    return video;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const updateThumbnail = async ({ videoId, thumbnail }) => {
  try {
    const video = await axios.patch(`/api/v1/videos/${videoId}`, { thumbnail });
    return video;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const deleteVideo = async (videoId) => {
  try {
    const video = await axios.delete(`/api/v1/videos/${videoId}`);
    return video;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const videoTogglePublish = async (videoId) => {
  try {
    const video = await axios.patch(`/api/v1/videos/toggle/publish/${videoId}`);
    return video;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export {
  getAllVideos,
  publishVideo,
  getVideo,
  updateThumbnail,
  deleteVideo,
  videoTogglePublish,
};
