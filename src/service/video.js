import axios from "axios";

const getAllVideos = async () => {
  try {
    const videos = await axios.get("/api/v1/videos");
    return videos;
  } catch (error) {
    console.error("getAllVideos :: ", error);
    throw error;
  }
};
const getChannelVideos = async ({ channelId }) => {
  try {
    console.log(channelId);
    const videos = await axios.get(`/api/v1/videos/c/${channelId}`);
    return videos;
  } catch (error) {
    console.error("getChannelVideos :: ", error);
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
export { getAllVideos, getChannelVideos, publishVideo, getVideo };
