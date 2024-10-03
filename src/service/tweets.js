import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const createTweet = async ({ content }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const tweet = await axios.post(
      `${baseUrl}/api/v1/tweets/`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return tweet;
  } catch (error) {
    console.log("createTweets :: ", error);
    throw error;
  }
};

const getChannelTweets = async ({ channelId }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const tweets = await axios.get(`${baseUrl}/api/v1/tweets/c/${channelId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return tweets;
  } catch (error) {
    console.log("getChannelTweets ::", error);
    throw error;
  }
};

const updateTweet = async ({ tweetId, content }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const tweet = await axios.patch(
      `${baseUrl}/api/v1/tweets/${tweetId}`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return tweet;
  } catch (error) {
    console.log("UpdateTweet ::", error);
    throw error;
  }
};

const deleteTweet = async ({ tweetId }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const tweet = await axios.delete(`${baseUrl}/api/v1/tweets/${tweetId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return tweet;
  } catch (error) {
    console.log("delete tweet ::", error);
    throw error;
  }
};

export { createTweet, getChannelTweets, updateTweet, deleteTweet };
