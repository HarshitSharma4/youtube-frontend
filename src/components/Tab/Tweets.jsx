import { useEffect, useState } from "react";
import { Button, Empty, Loading, TweetCard, TweetForm } from "../index.js";
import { getChannelTweets } from "../../service/tweets.js";
function Tweets({ channelId, isUserChannel }) {
  const [tweets, setTweets] = useState([]);
  const [addTweets, setAddTweets] = useState(false);
  const [isLoading,setIsLoading] = useState(true)
  console.log("user Channel", isUserChannel);
  useEffect(() => {
    getChannelTweets({ channelId }).then((res) => {
      if (res) setTweets(res.data.data);
      console.log(res);
      setIsLoading(false);
    }).catch(()=>{setIsLoading(false)});
  }, [channelId]);
  if(isLoading){
    return <Loading />
  }
  if (!tweets?.length)
    return (
      <div className="w-full h-full relative">
        {isUserChannel && (
          <Button
            className="bg-accent shadow-primary text-lg px-2 py-2 absolute top-1 right-4"
            onClick={() => {
              setAddTweets(true);
            }}
          >
            +Add Tweets
          </Button>
        )}
        {addTweets && <TweetForm setModel={setAddTweets} />}
        <Empty
          title="No Tweets"
          message="This channel has yet to make a Tweet."
        />
      </div>
    );
  return (
    <div className="w-full relative mt-7 h-[calc(100vh-11.6rem)] overflow-y-auto">
      {isUserChannel && (
        <Button
          className="bg-accent shadow-primary text-lg px-2 py-2 absolute top-1 right-4 z-20"
          onClick={() => {
            setAddTweets(true);
          }}
        >
          {" "}
          +Add Tweet
        </Button>
      )}
      {addTweets && (
        <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-50">
          <TweetForm setModel={setAddTweets} setTweetContent={setTweets} />
        </div>
      )}
      <div className="w-full space-y-7 p-5">
        {tweets.map((item) => (
          <TweetCard
            key={item._id}
            {...item}
            isUserChannel={isUserChannel}
            setTweets={setTweets}
            tweets={tweets}
          />
        ))}
      </div>
    </div>
  );
}

export default Tweets;
