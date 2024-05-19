import axios from "axios";

const createPlaylist = async ({ name, discription }) => {
  try {
    const playlist = await axios.post("/api/v1/playlist", {
      name,
      discription,
    });
    return playlist;
  } catch (error) {
    console.error(error);
  }
};
const deletePlaylist = async (playlistId) => {
  try {
    if (!playlistId) {
      throw "playlistId is required";
    }
    const playlist = await axios.delete(`/api/v1/playlist/${playlistId}`);
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const updatePlaylist = async ({ playlistId, name, discription }) => {
  try {
    if (!playlistId) {
      throw "playlistId is required";
    }
    const playlist = await axios.patch(`/api/v1/playlist/${playlistId}`, {
      name,
      discription,
    });
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const addVideoToPlaylist = async ({ videoId, playlistId }) => {
  try {
    if (!playlistId || !videoId) {
      throw "playlistId and videoId is required";
    }
    const playlist = await axios.patch(`/api/v1/playlist/add/${videoId}/${playlistId}`);
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const removeVideoToPlaylist = async ({ videoId, playlistId }) => {
  try {
    if (!playlistId || !videoId) {
      throw "playlistId and videoId is required";
    }
    const playlist = await axios.patch(`/api/v1/playlist/remove/${videoId}/${playlistId}`);
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const getUserPlaylists = async (userId) => {
  try {
    const playlist = await axios.get(`/api/v1/playlist/user/${userId}`);
    return playlist;
  } catch (error) {
    console.error(error);
  }
};
const getplaylistById = async (playlistId)=>{
  try {
    const playlist = await axios.get(`/api/v1/playlist/${playlistId}`);
    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
const getPlaylistVideoStatus = async ({videoId})=>{
  try {
    const playlist = await axios.get(`/api/v1/playlist/video/${videoId}`);
    return playlist;
  } catch (error) {
    console.error(error);
  }   
}
export {
  createPlaylist,
  deletePlaylist,
  updatePlaylist,
  addVideoToPlaylist,
  removeVideoToPlaylist,
  getUserPlaylists,
  getPlaylistVideoStatus,
  getplaylistById
};
