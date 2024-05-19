import { HeroBar, Navigation, PlaylistVideos } from "./components";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Collection,
  Home,
  Login,
  MyContent,
  Signup,
  Subscribers,
  UserProfile,
  History,
  Setting,
  Video,
  SearchText,
  Support,
} from "./pages/index.js";
import LikeVideos from "./pages/LikeVideos.jsx";

function App() {
  return (
    <Router>
      <div className=" h-screen w-screen flex bg-background border-text overflow-hidden text-text flex-col">
        <HeroBar />
        <div className="flex grow h-[calc(100vh-4.75rem)]">
          <Navigation className="w-56 shrink-0 h-[calc(100vh-4.75rem)]" />
          <div className="text-center  h-[calc(100vh-5rem)] text-5xl grow overflow-y-scroll">
            <ToastContainer className={"bg-secondary text-lg rounded-md"} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/channel/:userName" element={<UserProfile />} />
              <Route path="/history" element={<History />} />
              <Route path="/my-content" element={<MyContent />} />
              <Route path="/collections" element={<Collection />} />
              <Route path="/subscribers" element={<Subscribers />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/likevideos" element={<LikeVideos />} />
              <Route path="/support" element={<Support />} />
              <Route path="/video/:videoId" element={<Video />} />
              <Route path="/playlist/:playlistId" element={<PlaylistVideos />} />
              <Route path="/search/:searchText" element={<SearchText />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
