import axios from "axios";

const toggleLikeTweet = async (tweetId) => {
  try {
    const like = await axios.post(`/api/v1/likes/toggle/t/${tweetId}`);
    return like;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const toggleLikeVideo = async (videoId) => {
  try {
    const like = await axios.post(`/api/v1/likes/toggle/v/${videoId}`);
    return like;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const toggleLikeComment = async (commentId) => {
  try {
    const like = await axios.post(`/api/v1/likes/toggle/c/${commentId}`);
    return like;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getLikeVideos = async () => {
  try {
    const like = await axios.get(`/api/v1/likes/videos`);
    return like;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export { toggleLikeTweet, toggleLikeVideo, toggleLikeComment, getLikeVideos };
