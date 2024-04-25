import axios from "axios";

const login = async ({ email, password }) => {
  try {
    const loginUser = await axios.post("/api/v1/users/login", {
      email,
      password,
    });
    console.log(loginUser);
    return loginUser;
  } catch (error) {
    console.error("login ::", error);
    throw error;
  }
};
const logout = async () => {
  try {
    const logoutUser = await axios.post("/api/v1/users/logout", {});
    return logoutUser;
  } catch (error) {
    console.error("logout ::", error);
  }
};
const register = async ({
  fullName,
  password,
  email,
  userName,
  avatar,
  coverImage,
}) => {
  try {
    console.log(avatar);
    console.log(coverImage);
    const register = await axios.post(
      "/api/v1/users/register",
      {
        fullName,
        password,
        email,
        userName,
        avatar,
        coverImage,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return register;
  } catch (error) {
    console.error("register ::", error);
    throw error;
  }
};
const getCurrentUser = async () => {
  try {
    const currentUser = await axios.post("/api/v1/users/current-user", {});
    return currentUser;
  } catch (error) {
    console.error("getCurrentUser ::", error);
  }
};
const refreshToken = async () => {
  try {
    const refreshToken = await axios.post("/api/v1/users/refresh-token");
    return refreshToken;
  } catch (error) {
    console.error("Refresh Token ::", error);
  }
};
const changePassword = async ({
  oldPassword,
  newPassword,
  confirmPassword,
}) => {
  try {
    const result = await axios.post("/api/v1/users/change-password", {});
    return result;
  } catch (error) {
    console.error("Change Password ::", error);
    throw error;
  }
};
const getWatchHistory = async () => {
  try {
    const watchHistory = await axios.get("/api/v1/users/history");
    return watchHistory;
  } catch (error) {
    console.error("getWatchHistory ::", error);
    throw error;
  }
};
const getUserChannelProfile = async ({ userName }) => {
  try {
    const getChannel = await axios.get(`/api/v1/users/c/${userName}`);
    console.log(getChannel);
    return getChannel;
  } catch (error) {
    console.error("getWatchHistory ::", error);
    throw error;
  }
};
const updateUserDetails = async ({ fullName, email, userName }) => {
  try {
    console.log(fullName, email, userName);
    const updateDeails = await axios.patch("/api/v1/users/update-account", {
      fullName,
      email,
      userName,
    });
    console.log(updateDeails);
    return updateDeails;
  } catch (error) {
    console.error("updateUserDetails :: ", error);
    throw error;
  }
};
const updateAvatar = async ({ file }) => {
  try {
    const updateImage = await axios.post("/api/v1/users/avatar", { file });
    return updateImage;
  } catch (error) {
    console.error("updateAvatar :: ", error);
  }
};
const updateCoverImage = async ({ file }) => {
  try {
    const updateImage = await axios.post("/api/v1/users/cover-image", { file });
    return updateImage;
  } catch (error) {
    console.error("updateCoverImage :: ", error);
  }
};
export {
  login,
  logout,
  register,
  getCurrentUser,
  changePassword,
  getWatchHistory,
  refreshToken,
  updateAvatar,
  getUserChannelProfile,
  updateCoverImage,
  updateUserDetails,
};
