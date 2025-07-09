"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";

const Gallery = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="text-white mt-10 px-2">
      <div className="columns-2 min-[991px]:columns-3 xl:columns-4  gap-4 space-y-4">
        <div className="relative group  cursor-pointer">
          <img
            src={"/images/gallery/RetroCocktailStyle.png"}
            alt="iamge"
            className="rounded-md"
          />
          <Link
            href={"/photo/id"}
            className="absolute inset-0 transition-all duration-300 group-hover:bg-black/10"
          >
            <div className="absolute right-3 top-3 z-20 opacity-0 group-hover:opacity-100 duration-300 ">
              <button
                onClick={toggleLike}
                className="size-9 bg-black/50 cursor-pointer rounded-md flex-center hover:bg-black/70 duration-300 transition-all"
              >
                {isLiked ? (
                  // Filled heart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="#ef4444"
                    viewBox="0 0 256 256"
                    className="size-[50%]"
                  >
                    <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
                  </svg>
                ) : (
                  // Outline heart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="size-[50%]"
                  >
                    <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path>
                  </svg>
                )}
              </button>
            </div>
            <div className="absolute right-3 bottom-3 z-20 opacity-0 group-hover:opacity-100 duration-300 ">
              <button
                className="size-9 bg-black/30 cursor-pointer  rounded-md flex-center hover:bg-black/70 duration-300 transition-all"
                type="button"
                aria-label="Download image"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"></path>
                </svg>
              </button>
            </div>
            <div className="absolute left-3 bottom-3 z-20 opacity-0 group-hover:opacity-100 duration-300 ">
              <button
                className=" flex items-center gap-x-2"
                type="button"
                aria-label="Download image"
                data-state="closed"
              >
                <div className="size-9 rounded-full bg-red-500" />
                <h6 className="text-white/90">Anubhav Agrawal</h6>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
