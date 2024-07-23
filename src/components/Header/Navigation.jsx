import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegFolder } from "react-icons/fa";
import { GoHistory } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { BsPersonPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
function Navigation({ className = "" }) {
  const navItem = [
    { name: "Home", icon: <RiHome3Line className="text-lg" />, url: "/" },
    {
      name: "Liked Videos",
      icon: <AiOutlineLike className="text-lg" />,
      url: "/likevideos",
    },
    {
      name: "History",
      icon: <GoHistory className="text-lg" />,
      url: "/history",
    },
    {
      name: "My Content",
      icon: <IoVideocamOutline className="text-lg" />,
      url: "/my-content",
    },
    {
      name: "Collections",
      icon: <FaRegFolder className="text-lg" />,
      url: "/collections",
    },
    {
      name: "Subcribers",
      icon: <BsPersonPlus className="text-lg" />,
      url: "subscribers",
    },
  ];
  return (
    <div
      className={`flex flex-col justify-between items-center  p-4 border-r-2  ${className}`}
    >
      <nav className="flex items-center justify-evenly flex-col gap-4 w-[95%]">
        {navItem.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className="border-2 p-1 md:px-4 md:py-2 flex gap-2 items-center justify-start w-full hover:bg-accent"
          >
            {item.icon}
            <ul className="hidden md:block">{item.name}</ul>
          </Link>
        ))}
      </nav>
      <div className="space-y-4 w-[95%]">
        <Link
          to="/support"
          className="border-2  p-1 md:px-4 md:py-2 w-full flex gap-2 items-center  justify-evenly hover:bg-accent"
        >
          <MdOutlineContactSupport className="block text-lg" />{" "}
          <span className="hidden md:block">Support</span>
        </Link>
        <Link
          to="/settings"
          className="border-2  p-1 md:px-4 md:py-2 w-full flex gap-2 items-center justify-evenly hover:bg-accent"
        >
          <IoSettingsOutline className="block text-lg" /> <span className="hidden md:block">Settings</span>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
