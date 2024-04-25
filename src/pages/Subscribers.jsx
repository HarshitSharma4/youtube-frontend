import { useEffect, useState } from "react";
import { getChannnelSubcriber } from "../service/subscription";
import { useSelector } from "react-redux";
import { SubscribeCard } from "../components";
function Subscribers() {
  const [subscriber, setSubscriber] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (userData) {
      console.log(userData._id);
      getChannnelSubcriber({ subscriberId: userData._id }).then((res) => {
        if (res) {
          console.log(res);
          setSubscriber(res.data.data);
        }
      });
    }
  }, [userData]);
  return (
    <div>
      {subscriber.map((item, index) => (
        <SubscribeCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Subscribers;
