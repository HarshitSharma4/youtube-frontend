import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const login = async ({ email, password }) => {
  try {
    const loginUser = await axios.post(`${baseUrl}/api/v1/users/login`, {
      email,
      password,
    });
    console.log(loginUser);
    const accessToken = loginUser?.data?.data?.accessToken;
    localStorage.setItem("accessToken", accessToken);
    return loginUser;
  } catch (error) {
    console.error("login ::", error);
    throw error;
  }
};

const logout = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const logoutUser = await axios.post(
      `${baseUrl}/api/v1/users/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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
      `${baseUrl}/api/v1/users/register`,
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
    const accessToken = localStorage.getItem("accessToken");

    const currentUser = await axios.post(
      `${baseUrl}/api/v1/users/current-user`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return currentUser;
  } catch (error) {
    console.error("getCurrentUser ::", error);
    throw error;
  }
};

const refreshToken = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const refreshToken = await axios.post(
      `${baseUrl}/api/v1/users/refresh-token`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
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
    const accessToken = localStorage.getItem("accessToken");

    const result = await axios.post(
      `${baseUrl}/api/v1/users/change-password`,
      {
        oldPassword,
        newPassword,
        confirmPassword,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return result;
  } catch (error) {
    console.error("Change Password ::", error);
    throw error;
  }
};

const getWatchHistory = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const watchHistory = await axios.get(`${baseUrl}/api/v1/users/history`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return watchHistory;
  } catch (error) {
    console.error("getWatchHistory ::", error);
    throw error;
  }
};

const getUserChannelProfile = async ({ userName }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const getChannel = await axios.get(`${baseUrl}/api/v1/users/c/${userName}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(getChannel);
    return getChannel;
  } catch (error) {
    console.error("getWatchHistory ::", error);
    throw error;
  }
};

const updateUserDetails = async ({ fullName, email, userName }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const updateDeails = await axios.patch(
      `${baseUrl}/api/v1/users/update-account`,
      {
        fullName,
        email,
        userName,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(updateDeails);
    return updateDeails;
  } catch (error) {
    console.error("updateUserDetails ::", error);
    throw error;
  }
};

const updateAvatar = async ({ file }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const updateImage = await axios.post(
      `${baseUrl}/api/v1/users/avatar`,
      { file },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return updateImage;
  } catch (error) {
    console.error("updateAvatar ::", error);
  }
};

const updateCoverImage = async ({ file }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const updateImage = await axios.post(
      `${baseUrl}/api/v1/users/cover-image`,
      { file },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return updateImage;
  } catch (error) {
    console.error("updateCoverImage ::", error);
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
