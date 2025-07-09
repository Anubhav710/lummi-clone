"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import clsx from "clsx"; // Optional: install clsx for cleaner classes

const SearchInput = () => {
  const [active, setActive] = useState("search");

  return (
    <form className="h-full w-full ">
      <div className="ring ring-gray-600 h-full rounded-full w-full overflow-hidden p-1 flex items-center bg-[#121212]">
        {/* Left action bar */}
        <div className="relative w-20 h-full bg-[#27272A] rounded-full flex items-center justify-start px-1">
          {/* Floating black circle */}
          <div
            className={`size-9 rounded-full bg-black absolute top-1/2 -translate-y-1/2 transition-transform duration-300 z-0 ${
              active === "search" ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>

          {/* Search icon */}
          <div
            className="size-9 rounded-full flex items-center justify-center cursor-pointer relative z-10"
            onClick={() => setActive("search")}
          >
            <IoIosSearch className="text-white size-[60%]" />
          </div>

          {/* AI icon */}
          <div
            className="size-9 rounded-full flex items-center justify-center cursor-pointer relative z-10"
            onClick={() => setActive("ai")}
          >
            <BsStars className="text-white size-[50%]" />
          </div>
        </div>

        {/* Animated Input container */}
        <div className="relative flex-1 h-full overflow-hidden">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for anything"
            className={clsx(
              "absolute left-0 top-0 h-full w-full pl-2 text-white bg-[#121212] outline-none transition-all duration-300 ease-in-out",
              active === "search"
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
          />

          {/* AI Input */}
          <input
            type="text"
            placeholder="What will you imagine?"
            className={clsx(
              "absolute left-0 top-0 h-full w-full pl-2 text-white bg-[#121212] outline-none transition-all duration-300 ease-in-out",
              active === "ai"
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            )}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchInput;
