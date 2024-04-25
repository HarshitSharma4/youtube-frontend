import axios from "axios";
const getVideoComment = async ({ videoId, content }) => {
  try {
    const comment = await axios.get(`/api/v1/comments/${videoId}`, {
      content: content,
    });
    return comment;
  } catch (error) {
    console.log("getComment ::", error);
    throw error;
  }
};
const createComment = async ({ videoId, content }) => {
  try {
    console.log(videoId, content);
    const comment = await axios.post(`/api/v1/comments/${videoId}`, {
      content: content,
    });
    return comment;
  } catch (error) {
    console.log("createComment ::", error);
    throw error;
  }
};
const updateComment = async ({ commentId }) => {
  try {
    const comment = await axios.patch(`/api/v1/comments/c/${commentId}`);
    return comment;
  } catch (error) {
    console.log("updateComment::", error);
    throw error;
  }
};
const deleteComment = async ({ commentId }) => {
  try {
    const comment = await axios.delete(`/api/v1/comments/c/${commentId}`);
    return comment;
  } catch (error) {
    console.log("deleteComment::", error);
  }
};

export { getVideoComment, createComment, updateComment, deleteComment };
