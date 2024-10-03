import { useEffect, useState } from "react";
import { getChannnelSubcriber } from "../service/subscription";
import { useSelector } from "react-redux";
import { Loading, SubscribeCard } from "../components";
function Subscribers() {
  const [subscriber, setSubscriber] = useState([]);
  const userData = useSelector((state) => state.auth.userData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (userData) {
      console.log(userData._id);
      getChannnelSubcriber({ subscriberId: userData._id }).then((res) => {
        if (res) {
          console.log(res);
          setSubscriber(res.data.data);
        }
        setIsLoading(false)
      }).catch(()=>{setIsLoading(false)});
    }
  }, [userData]);
  if (isLoading) return <Loading />;
  return (
    <div>
      {subscriber.map((item) => (
        <SubscribeCard key={item._id} {...item} />
      ))}
    </div>
  );
}

export default Subscribers;
