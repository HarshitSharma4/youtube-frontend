import { Link } from "react-router-dom";
import { Button } from "../index";
import { toggleSubscription } from "../../service/subscription";
function Profile({
  _id,
  fullName,
  userName,
  avatar,
  coverImage,
  subscribedToCount,
  suscribersCount,
  isUserChannel,
  isSubscribed,
  setUserDetails,
}) {
  console.log(isUserChannel);
  const toggleSubscribe = async () => {
    try {
      const toggle = await toggleSubscription(_id);
      console.log(toggle);
      setUserDetails((prevState) => ({
        ...prevState,
        isSubscribed: !isSubscribed,
      }));
    } catch (error) {
      alert(error?.message);
    }
  };
  return (
    <div className="">
      <div className="h-56 w-full overflow-hidden">
        <img
          src={coverImage}
          alt="Cover image"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex grow px-7 py-4 justify-between items-start">
        <div className="flex gap-7 justify-start px-2 items-start h-28">
          <div className="h-36 w-36  -translate-y-12 rounded-[100%] overflow-hidden">
            <img
              src={avatar}
              alt="Avatar image"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-start">{fullName}</h1>
            <h2 className="text-lg font-semibold text-start">{userName}</h2>
            <div className="flex gap-4 text-start">
              <h2 className="text-lg font-semibold">
                {subscribedToCount} Subscribed
              </h2>{" "}
              <h2 className="text-lg font-semibold">
                {suscribersCount} Subscriber
              </h2>
            </div>
          </div>
        </div>
        {!isUserChannel && (
          <Button
            className="text-xl font-semibold  bg-accent shadow-primary px-5 py-2"
            onClick={() => {
              toggleSubscribe();
            }}
          >
            {isSubscribed ? "Subscribed" : "subscribe"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Profile;
