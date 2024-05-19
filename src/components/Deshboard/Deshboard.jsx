import { useEffect, useState } from "react"
import { getChannelStats } from "../../service/deshboard"

const Deshboard = () => {
    const [stats,setStats]= useState({});
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        getChannelStats().then((res)=>{
            console.log(res);
            //setStats({totalView:res.data.data.})
            
        })
    })
  return (
    <div>

    </div>
  )
}

export default Deshboard