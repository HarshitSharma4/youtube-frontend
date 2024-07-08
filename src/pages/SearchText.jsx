import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllVideos } from "../service/video";
import { VideoCard2 } from "../components";

const SearchText = () => {
  const { searchText } = useParams();
  const [searchVideos, SetSearchVideos] = useState([]);
  useEffect(() => {
    getAllVideos({ query: searchText }).then((res) => {
      console.log(res);
      SetSearchVideos(res?.data?.data?.docs);
    });
  }, [searchText]);
  return (
    <div className="px-5 py-7">
      <h1 className="text-xl font-bold text-start mb-5">Search : {searchText}</h1>
      <div className="grid  gap-5 ">
        {searchVideos.map((item) => (
          <VideoCard2 key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SearchText;
