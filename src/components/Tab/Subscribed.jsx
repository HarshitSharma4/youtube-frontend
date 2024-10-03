import { useEffect, useState } from "react";
import { getChannnelSubcribed } from "../../service/subscription";
import { Loading, SubscribeCard } from "../index.js";

function Subscribed({ channelId, isUserChannel, className }) {
  const [subscribed, setSubscribed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSubscribed = async () => {
      try {
        const req = await getChannnelSubcribed(channelId);
        if (isMounted && req?.data?.data) {
          setSubscribed(req.data.data);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to load subscribed channels");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchSubscribed();

    return () => {
      isMounted = false; // Cleanup function to prevent setting state if the component unmounts
    };
  }, [channelId]);

  if (isLoading) return <Loading />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div
      className={`w-full min-h-[calc(100vh-11.6rem)] relative mt-7 overflow-y-auto ${className}`}
    >
      {subscribed.length > 0 ? (
        subscribed.map((item) => (
          <SubscribeCard
            {...item}
            key={item._id}
            isUserChannel={isUserChannel}
          />
        ))
      ) : (
        <div className="text-center text-gray-500">No subscriptions found</div>
      )}
    </div>
  );
}

export default Subscribed;
