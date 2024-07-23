import { useState } from "react";
import { Button } from "../index.js";
import { toggleSubscription } from "../../service/subscription";
import { Link } from "react-router-dom";
function SubscribeCard({ subscribed, isUserChannel, subscribers }) {
  const [isSubscribe, setIsSubscribe] = useState(true);
  const toggleSub = async () => {
    if (isUserChannel) {
      try {
        const toggle = await toggleSubscription(subscribed._id);
        console.log(toggle);
        setIsSubscribe(!isSubscribe);
      } catch (error) {
        alert(error?.message);
      }
    }
  };
  return (
    <Link to={`/channel/${subscribed?.userName || subscribers?.userName}`}>
      <div className="flex items-center m-5  px-10 py-5 gap-5 flex-wrap sm:flex-nowrap border-2 rounded-xl cursor-pointer hover:-translate-y-1 hover:bg-primary">
        <img
          src={subscribed?.avatar || subscribers?.avatar}
          alt="avatar"
          className="shrink h-20 w-20 rounded-[100%]"
        />
        <div className="space-y-0 grow text-start">
          <h1 className="text-xl font-bold ">
            {subscribed?.fullName || subscribers?.fullName}
          </h1>
          <h2 className="text-lg font-semibold ">
            @{subscribed?.userName || subscribers?.userName}
          </h2>
          <h3 className="text-base font-medium ">
            {subscribed?.subscribersCount || subscribers?.subscribersCount}{" "}
            subscribers
          </h3>
        </div>
        <Button
          className={
            isSubscribe
              ? `bg-accent shadow-primary px-4 py-2 shrink text-lg font-semibold ${
                  subscribers && "hidden"
                }`
              : `bg-primary shadow-accent px-4 py-2 shrink text-lg font-semibold  ${
                  subscribers && "hidden"
                }`
          }
          onClick={() => {
            toggleSub();
          }}
        >
          {isSubscribe ? "UnSubscribe":"Subscribed" }
        </Button>
      </div>
    </Link>
  );
}

export default SubscribeCard;
