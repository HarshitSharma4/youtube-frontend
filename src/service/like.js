import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const toggleLikeTweet = async (tweetId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const like = await axios.post(
      `${baseUrl}/api/v1/likes/toggle/t/${tweetId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return like;
  } catch (error) {
    console.error("toggleLikeTweet ::", error);
    throw error;
  }
};

const toggleLikeVideo = async (videoId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const like = await axios.post(
      `${baseUrl}/api/v1/likes/toggle/v/${videoId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return like;
  } catch (error) {
    console.error("toggleLikeVideo ::", error);
    throw error;
  }
};

const toggleLikeComment = async (commentId, quarys) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const like = await axios.post(
      `${baseUrl}/api/v1/likes/toggle/c/${commentId}`,
      {},
      {
        params: { ...quarys },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return like;
  } catch (error) {
    console.error("toggleLikeComment ::", error);
    throw error;
  }
};

const getLikeVideos = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const like = await axios.get(`${baseUrl}/api/v1/likes/videos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return like;
  } catch (error) {
    console.error("getLikeVideos ::", error);
    throw error;
  }
};

export { toggleLikeTweet, toggleLikeVideo, toggleLikeComment, getLikeVideos };
