//import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Logo, Search } from "../index";
import { useSelector } from "react-redux";
//import { FaSearch } from "react-icons/fa";
function HeroBar() {
  const loginStatus = useSelector((state) => state.auth.status);
  const userDetail = useSelector((state) => state.auth.userData);

  return (
    <>
      <div className="flex justify-between items-center  border-b-2 py-3 px-7 relative">
        <Logo className="h-10 md:h-16 md:w-16 w-10" />
        <Search  />
        {!loginStatus ? (
          <div className="flex gap-5 justify-between items-center">
            <Link to="/login">
              <Button className="p-1 md:py-2 md:px-3 bg-primary shadow-[#d1d0d0]  ">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="p-1 md:py-2 md:px-3 bg-accent shadow-primary ">
                Sign up
              </Button>
            </Link>
          </div>
        ) : (
          <Link to={`/channel/${userDetail.userName}`}>
            <Button className="py-1 px-3 bg-accent shadow-primary flex gap-3 ">
              <div className="h-8 w-8 md:h-12 md:w-12 overflow-hidden rounded-[100%]">
                <img
                  src={userDetail.avatar}
                  alt="avatar"
                  className="h-full w-full object-cover scale-125"
                />
              </div>
              <div className="hidden grow text-left">
                <h1 className="text-base font-bold">{userDetail.fullName}</h1>
                <h2 className="text-sm font-semibold">{userDetail.userName}</h2>
              </div>
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}

export default HeroBar;
