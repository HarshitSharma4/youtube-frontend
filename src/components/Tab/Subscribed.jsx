import { useEffect, useState } from "react";
import { getChannnelSubcribed } from "../../service/subscription";
import { SubscribeCard } from "../index.js";
function Subscribed({ channelId, isUserChannel, className }) {
  const [subscribed, setSubscribed] = useState([]);
  useEffect(() => {
    getChannnelSubcribed(channelId)
      .then((req) => {
        if (req) {
          console.log(req);
          setSubscribed(req.data.data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div className={`w-full min-h-[calc(100vh-11.6rem)] relative mt-7 overflow-y-auto ${className}`}>
      {subscribed.map((item) => (
        <SubscribeCard {...item} key={item._id} isUserChannel={isUserChannel} />
      ))}
    </div>
  );
}

export default Subscribed;
