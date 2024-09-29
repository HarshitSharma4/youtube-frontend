import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

const getVideoComment = async ({ videoId }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const comment = await axios.get(`${baseUrl}/api/v1/comments/${videoId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return comment;
  } catch (error) {
    console.log("getVideoComment ::", error);
    throw error;
  }
};

const createComment = async ({ videoId, content }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const comment = await axios.post(
      `${baseUrl}/api/v1/comments/${videoId}`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return comment;
  } catch (error) {
    console.log("createComment ::", error);
    throw error;
  }
};

const updateComment = async ({ commentId, content }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const comment = await axios.patch(
      `${baseUrl}/api/v1/comments/c/${commentId}`,
      { content },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return comment;
  } catch (error) {
    console.log("updateComment ::", error);
    throw error;
  }
};

const deleteComment = async ({ commentId }) => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    const comment = await axios.delete(`${baseUrl}/api/v1/comments/c/${commentId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return comment;
  } catch (error) {
    console.log("deleteComment ::", error);
    throw error;
  }
};

export { getVideoComment, createComment, updateComment, deleteComment };
