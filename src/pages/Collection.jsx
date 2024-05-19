import { useSelector } from "react-redux";
import { Playlist } from "../components";

function Collection() {
  const userId = useSelector((state) => state.auth.userData._id);
  return <Playlist channelId={userId} />;
}

export default Collection;
