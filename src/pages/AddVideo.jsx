import { VideoForm } from "../components/index.js";
function AddVideo({ setAddVideo }) {
  return (
    <div className="fixed h-screen w-screen flex justify-center items-center z-50 top-0 left-0 bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(100,43,234,0.4)]">
      <VideoForm className="py-11" setAddVideo={setAddVideo} />
    </div>
  );
}

export default AddVideo;
