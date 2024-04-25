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
    <div className={`w-full relative mt-7 overflow-y-auto ${className}`}>
      {subscribed.map((item, index) => (
        <SubscribeCard {...item} key={index} isUserChannel={isUserChannel} />
      ))}
    </div>
  );
}

export default Subscribed;
