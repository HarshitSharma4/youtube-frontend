import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const toggleSubscription = async (channelId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    return await axios.post(
      `${baseUrl}/api/v1/subscriptions/c/${channelId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.error("toggleSubscription", error);
    throw error;
  }
};

const getChannnelSubcribed = async (channelId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    return await axios.get(`${baseUrl}/api/v1/subscriptions/c/${channelId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error("getChannnelSubcribed", error);
    throw error;
  }
};

const getChannnelSubcriber = async ({ subscriberId }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    return await axios.get(`${baseUrl}/api/v1/subscriptions/u/${subscriberId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.error("getChannnelSubcriber", error);
    throw error;
  }
};

export { toggleSubscription, getChannnelSubcribed, getChannnelSubcriber };
