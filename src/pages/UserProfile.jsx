import { useEffect, useState } from "react";
import { getUserChannelProfile } from "../service/user";
import { useParams } from "react-router-dom";
import {
  Playlist,
  Profile,
  Subscribed,
  TabBar,
  Tweets,
  Videos,
} from "../components/index";
import { useSelector } from "react-redux";
function UserProfile() {
  const [userDetails, setUserDetails] = useState();
  const [error, setError] = useState("");
  const [isUserChannel, setIsUserChannel] = useState(false);
  const [tab, setTab] = useState("Videos");
  const { userName } = useParams();
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    if (userName) {
      getUserChannelProfile({ userName })
        .then((responce) => {
          console.log("responce ->", responce);
          setUserDetails(responce.data.data);
          setIsUserChannel(
            userData ? responce.data.data._id === userData._id : false
          );
          console.log("user Channel", isUserChannel);
        })
        .catch((error) => {
          console.log(error);
          setError(error?.message);
        });
    }
    console.log("userName ->", userName);
  }, [userName]);
  if (!userDetails) return <h1 className="text-center text-2xl">{error}</h1>;

  return (
    <>
      <Profile
        {...userDetails}
        setUserDetails={setUserDetails}
        isUserChannel={isUserChannel}
      />
      <TabBar
        tab={tab}
        setTab={setTab}
        options={["Videos", "Playlist", "Tweets", "Subscribed"]}
      />
      {tab == "Videos" && (
        <Videos
          channelId={userDetails._id}
          isUserChannel={isUserChannel}
          className={"h-[calc(100vh-11.6rem)] "}
        />
      )}
      {tab == "Playlist" && (
        <Playlist
          channelId={userDetails._id}
          isUserChannel={isUserChannel}
          className={"h-[calc(100vh-11.6rem)] "}
        />
      )}
      {tab == "Tweets" && (
        <Tweets
          channelId={userDetails._id}
          isUserChannel={isUserChannel}
          className={"h-[calc(100vh-11.6rem)] "}
        />
      )}
      {tab == "Subscribed" && (
        <Subscribed
          channelId={userDetails._id}
          isUserChannel={isUserChannel}
          className={"h-[calc(100vh-11.6rem)] "}
        />
      )}
    </>
  );
}

export default UserProfile;
