import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const createPlaylist = async ({ name, description }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const playlist = await axios.post(
      `${baseUrl}/api/v1/playlist`,
      { name, description },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deletePlaylist = async (playlistId) => {
  try {
    if (!playlistId) {
      throw new Error("playlistId is required");
    }
    const accessToken = localStorage.getItem("accessToken");

    const playlist = await axios.delete(`${baseUrl}/api/v1/playlist/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updatePlaylist = async ({ playlistId, name, description }) => {
  try {
    if (!playlistId) {
      throw new Error("playlistId is required");
    }
    const accessToken = localStorage.getItem("accessToken");

    const playlist = await axios.patch(
      `${baseUrl}/api/v1/playlist/${playlistId}`,
      { name, description },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addVideoToPlaylist = async ({ videoId, playlistId }) => {
  try {
    if (!playlistId || !videoId) {
      throw new Error("playlistId and videoId are required");
    }
    const accessToken = localStorage.getItem("accessToken");

    const playlist = await axios.patch(
      `${baseUrl}/api/v1/playlist/add/${videoId}/${playlistId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const removeVideoToPlaylist = async ({ videoId, playlistId }) => {
  try {
    if (!playlistId || !videoId) {
      throw new Error("playlistId and videoId are required");
    }
    const accessToken = localStorage.getItem("accessToken");

    const playlist = await axios.patch(
      `${baseUrl}/api/v1/playlist/remove/${videoId}/${playlistId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUserPlaylists = async (userId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const playlist = await axios.get(`${baseUrl}/api/v1/playlist/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getplaylistById = async (playlistId) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const playlist = await axios.get(`${baseUrl}/api/v1/playlist/${playlistId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPlaylistVideoStatus = async ({ videoId }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const playlist = await axios.get(`${baseUrl}/api/v1/playlist/video/${videoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
  addVideoToPlaylist,
  removeVideoToPlaylist,
  getUserPlaylists,
  getPlaylistVideoStatus,
  getplaylistById,
};
