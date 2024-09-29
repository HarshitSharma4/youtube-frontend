import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const getAllVideos = async (quarys) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const videos = await axios.get(`${baseUrl}/api/v1/videos`, {
      params: { ...quarys },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return videos;
  } catch (error) {
    console.error("getAllVideos :: ", error);
    throw error;
  }
};

const publishVideo = async ({ title, description, thumbnail, videoFile }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const videos = await axios.post(
      `${baseUrl}/api/v1/videos/upload`,
      {
        title,
        description,
        thumbnail: thumbnail[0],
        videoFile: videoFile[0],
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
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
    const accessToken = localStorage.getItem("accessToken");

    const video = await axios.get(`${baseUrl}/api/v1/videos/${videoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return video;
  } catch (error) {
    console.log("getVideo ::", error);
    throw error;
  }
};

const updateThumbnail = async ({ videoId, thumbnail }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const video = await axios.patch(
      `${baseUrl}/api/v1/videos/${videoId}`,
      { thumbnail },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return video;
  } catch (error) {
    console.error("updateThumbnail ::", error);
    throw error;
  }
};

const deleteVideo = async (videoId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const video = await axios.delete(`${baseUrl}/api/v1/videos/${videoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return video;
  } catch (error) {
    console.log("deleteVideo ::", error);
    throw error;
  }
};

const videoTogglePublish = async (videoId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const video = await axios.patch(
      `${baseUrl}/api/v1/videos/toggle/publish/${videoId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return video;
  } catch (error) {
    console.log("videoTogglePublish ::", error);
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
