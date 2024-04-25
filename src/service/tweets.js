import axios from "axios";

const createTweet = async ({ content }) => {
  try {
    const tweet = await axios.post("/api/v1/tweets/", { content });
    return tweet;
  } catch (error) {
    console.log("createTweets : ", error);
    throw error;
  }
};
const getChannelTweets = async ({ channelId }) => {
  try {
    const tweets = await axios.get(`/api/v1/tweets/c/${channelId}`);
    return tweets;
  } catch (error) {
    console.log("getChannelTweets ::", error);
    throw error;
  }
};
const updateTweet = async ({ tweetId, content }) => {
  try {
    console.log(tweetId, content);
    const tweet = await axios.patch(`/api/v1/tweets/${tweetId}`, { content });
    return tweet;
  } catch (error) {
    console.log("UpdateTweet ::", error);
    throw error;
  }
};
const deleteTweet = async ({ tweetId }) => {
  try {
    const tweet = await axios.delete(`/api/v1/tweets/${tweetId}`);
    return tweet;
  } catch (error) {
    console.log("delete tweet ::", error);
    throw error;
  }
};
export { createTweet, getChannelTweets, updateTweet, deleteTweet };
