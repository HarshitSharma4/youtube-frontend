import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllVideos } from "../service/video";
import { VideoCard2 } from "../components";

const SearchText = () => {
  const {searchText} = useParams();
  const [searchVideos,SetSearchVideos] = useState([]);
  useEffect(()=>{
      getAllVideos({query:searchText}).then((res)=>{
          console.log(res);
          SetSearchVideos(res?.data?.data?.docs);
      })
  },[searchText])
  return (
    <div className="grid grid-col-3 gap-5 px-5 py-7">
        {searchVideos.map((item,key)=><VideoCard2 key={key} {...item} />)}
    </div>
  )
}

export default SearchText;