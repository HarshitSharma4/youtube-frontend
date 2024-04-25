import { useSelector } from "react-redux";
import { Subscribed, TabBar, Tweets, Videos } from "../components/index.js";
import { useState } from "react";
function MyContent() {
  const [tab, setTab] = useState("Videos");
  const userData = useSelector((state) => state.auth.userData);
  if (!userData) return <h1>Need to Login</h1>;
  return (
    <>
      <TabBar
        tab={tab}
        setTab={setTab}
        options={["Videos", "Tweets", "Subscribed"]}
      />
      {tab == "Videos" && (
        <Videos channelId={userData._id} isUserChannel={true} />
      )}

      {tab == "Tweets" && (
        <Tweets channelId={userData._id} isUserChannel={true} />
      )}
      {tab == "Subscribed" && (
        <Subscribed channelId={userData._id} isUserChannel={true} />
      )}
    </>
  );
}

export default MyContent;
