
import { PublishToggle, VideoSetting } from "../index";
import { Link } from "react-router-dom";
const DeshboardVideos = ({videos,setVideos}) => {
  console.log("videos",videos);
  return (
    <div className="rounded-xl border-2 my-9 overflow-x-scroll">
      <table className="w-full min-w-[1200px] border-collapse text-xl text-white   cursor-pointer">
        <thead>
          <tr>
            <th className="border-collapse border-b p-4">Status</th>
            <th className="border-collapse border-b p-4">Status</th>
            <th className="border-collapse border-b p-4">Uploaded</th>
            <th className="border-collapse border-b p-4">Rating</th>
            <th className="border-collapse border-b p-4">Date uploaded</th>
            <th className="border-collapse border-b p-4"></th>
          </tr>
        </thead>
        <tbody>
          {videos?.map((item) => (
            <tr className="group border text-lg" key={item._id}>
              <PublishToggle {...item} />
              <td className="border-collapse border-b  px-4 py-3 group-last:border-none">
                <div className="flex items-center gap-4">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={item.thumbnail}
                    alt="Code Master"
                  />
                  <Link to={`/video/${item._id}`} className="font-semibold">{item.title}</Link>
                </div>
              </td>
              <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                <div className="flex justify-center gap-4">
                  <span className="inline-block rounded-xl bg-green-200 px-1.5 py-0.5 text-green-700">
                    {item.likes} likes
                  </span>
                  <span className="inline-block rounded-xl bg-red-200 px-1.5 py-0.5 text-red-700">
                    {item?.views} Views
                  </span>
                </div>
              </td>
              <td className="border-collapse border-b border-gray-600 px-4 py-3 group-last:border-none">
                {item?.createdAt.slice(9, 10)}/{item?.createdAt.slice(6, 7)}/
                {item?.createdAt.slice(0, 4)}
              </td>
              <VideoSetting _id={item._id} thumbnail={item.thumbnail} setVideos={setVideos} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const videoTables =()=>{

// }

export default DeshboardVideos;
