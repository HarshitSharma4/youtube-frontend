import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Authentication, HeroBar, Navigation, PlaylistVideos } from "./components";
import Loading from "./components/Loading/Loading.jsx";

// Lazy load your pages
const Collection = lazy(() => import("./pages/Collection"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const MyContent = lazy(() => import("./pages/MyContent"));
const Signup = lazy(() => import("./pages/Signup"));
const Subscribers = lazy(() => import("./pages/Subscribers"));
const UserProfile = lazy(() => import("./pages/UserProfile"));
const History = lazy(() => import("./pages/History"));
const Setting = lazy(() => import("./pages/Setting"));
const Video = lazy(() => import("./pages/Video"));
const SearchText = lazy(() => import("./pages/SearchText"));
const Support = lazy(() => import("./pages/Support"));
const LikeVideos = lazy(() => import("./pages/LikeVideos"));

function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex bg-background border-text overflow-hidden text-text flex-col">
        <HeroBar />
        <div className="flex grow h-[calc(100vh-4.75rem)]">
          <Navigation className="md:w-56 w-16 shrink-0 h-[calc(100vh-4.75rem)]" />
          <div className="text-center h-[calc(100vh-5rem)] text-5xl grow overflow-y-scroll">
            <ToastContainer className={"bg-secondary text-lg rounded-md"} />
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Authentication authentication={false}>
                      <Home />
                    </Authentication>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <Authentication authentication={false}>
                      <Login />
                    </Authentication>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Authentication authentication={false}>
                      <Signup />
                    </Authentication>
                  }
                />
                <Route
                  path="/channel/:userName"
                  element={
                    <Authentication authentication={true}>
                      <UserProfile />
                    </Authentication>
                  }
                />
                <Route
                  path="/history"
                  element={
                    <Authentication>
                      <History />
                    </Authentication>
                  }
                />
                <Route
                  path="/my-content"
                  element={
                    <Authentication>
                      <MyContent />
                    </Authentication>
                  }
                />
                <Route
                  path="/collections"
                  element={
                    <Authentication>
                      <Collection />
                    </Authentication>
                  }
                />
                <Route
                  path="/subscribers"
                  element={
                    <Authentication>
                      <Subscribers />
                    </Authentication>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <Authentication>
                      <Setting />
                    </Authentication>
                  }
                />
                <Route
                  path="/likevideos"
                  element={
                    <Authentication>
                      <LikeVideos />
                    </Authentication>
                  }
                />
                <Route
                  path="/support"
                  element={
                    <Authentication authentication={false}>
                      <Support />
                    </Authentication>
                  }
                />
                <Route
                  path="/video/:videoId"
                  element={
                    <Authentication authentication={true}>
                      <Video />
                    </Authentication>
                  }
                />
                <Route
                  path="/playlist/:playlistId"
                  element={
                    <Authentication authentication={true}>
                      <PlaylistVideos />
                    </Authentication>
                  }
                />
                <Route
                  path="/search/:searchText"
                  element={
                    <Authentication authentication={false}>
                      <SearchText />
                    </Authentication>
                  }
                />
                <Route path="/loading" element={<Loading />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
