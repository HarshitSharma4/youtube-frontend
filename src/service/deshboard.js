import axios from "axios"

const getChannelVideos = async ()=>{
    try {
        const video = await axios.get("/api/v1/dashboard/videos");
        return video;
    } catch (error) {
        console.error("getChannelVideos :: ",error);
        throw error;
    }
};
const getChannelStats = async ()=>{
    try {
        const video = await axios.get("/api/v1/dashboard/stats");
        return video;
    } catch (error) {
        console.error("getChannelVideos :: ",error);
        throw error;
    }
};
export {getChannelStats,getChannelVideos}