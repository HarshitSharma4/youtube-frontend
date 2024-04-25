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
        <Logo className="h-16 w-16" />
        <Search className="hidden md:flex" />
        {!loginStatus ? (
          <div className="hidden md:flex gap-5 justify-between items-center">
            <Link to="/login">
              <Button className="py-2 px-3 bg-primary shadow-[#d1d0d0]  ">
                Log in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="py-2 px-3 bg-accent shadow-primary ">
                Sign up
              </Button>
            </Link>
          </div>
        ) : (
          <Link to={`/channel/${userDetail.userName}`}>
            <Button className="py-1 px-3 bg-accent shadow-primary flex gap-3 ">
              <div className="h-12 w-12 overflow-hidden rounded-[100%]">
                <img
                  src={userDetail.avatar}
                  alt="avatar"
                  className="h-full w-full object-cover scale-125"
                />
              </div>
              <div className="grow text-left">
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
