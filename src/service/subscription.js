import axios from "axios";

const toggleSubscription = async (channelId) => {
  try {
    return await axios.post(`/api/v1/subscriptions/c/${channelId}`);
  } catch (error) {
    console.error("toggleSubscription", error);
    throw error;
  }
};
const getChannnelSubcribed = async (channelId) => {
  try {
    return await axios.get(`/api/v1/subscriptions/c/${channelId}`);
  } catch (error) {
    console.error("getChannnelSubcribed", error);
    throw error;
  }
};
const getChannnelSubcriber = async ({ subscriberId }) => {
  try {
    return await axios.get(`/api/v1/subscriptions/u/${subscriberId}`);
  } catch (error) {
    console.error("getChannnelSubcriber", error);
    throw error;
  }
};
export { toggleSubscription, getChannnelSubcribed, getChannnelSubcriber };
