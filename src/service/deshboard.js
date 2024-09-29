import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const getChannelVideos = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const video = await axios.get(`${baseUrl}/api/v1/dashboard/videos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return video;
  } catch (error) {
    console.error("getChannelVideos ::", error);
    throw error;
  }
};

const getChannelStats = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const video = await axios.get(`${baseUrl}/api/v1/dashboard/stats`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return video;
  } catch (error) {
    console.error("getChannelStats ::", error);
    throw error;
  }
};

export { getChannelStats, getChannelVideos };
