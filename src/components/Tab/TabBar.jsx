import React, { useState } from "react";

function TabBar({ tab, setTab, options = [] }) {
  return (
    <div className="w-full flex justify-evenly border-b-2 pb-4  rounded-sm mt-4">
      {options?.map((item, index) => (
        <div
          key={index}
          className={`text-center text-xl font-extrabold py-2  grow cursor-pointer  shadow-secondary  ${
            tab === item &&
            " rounded-[2px] bg-[linear-gradient(145deg,_#6c2efa,_#5b27d3)] [box-shadow:5px_5px_5px_#421c98,_-5px_-5px_5px_#883aff]"
          }`}
          onClick={() => {
            setTab(item);
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default TabBar;
