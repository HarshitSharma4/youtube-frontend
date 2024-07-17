import { useEffect, useState } from "react";
import { getVideoComment } from "../../service/comment";
import { CommentCard, CommentForm } from "../index";
import { useSelector } from "react-redux";
function Comments({ videoId }) {
  const [comments, setComments] = useState([]);
  const userId = useSelector((state) => state.auth?.userData?._id);
  useEffect(() => {
    getVideoComment({ videoId }).then((res) => {
      if (res) {
        console.log(res);
        setComments(res.data.data);
        console.log(comments);
      }
    });
  }, [videoId]);
  return (
    <div className="p-5 border-2 rounded-xl text-lg text-start">
      <h1 className="pb-2 px-4 border-b-2">Comments</h1>
      <CommentForm setComments={setComments} videoId={videoId} />
      {comments.map((item) => (
        <CommentCard
          key={item._id}
          {...item}
          comments={comments}
          setComments={setComments}
          isUserComment={item.owner === userId}
        />
      ))}
    </div>
  );
}

export default Comments;
