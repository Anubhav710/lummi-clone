import Gallery from "@/components/sections/Gallery";
import Header from "@/components/sections/Header";
import React from "react";

const homepage = () => {
  return (
    <main className=" min-h-screen px-2">
      <div className="text-white">
        <h1 className="text-[clamp(1.3rem,9.4vw,20rem)] leading-[clamp(1.5rem,10vw,22rem)] font-semibold ">
          no more boring design
        </h1>
        <p className="text-xl mt-2.5 max-sm:text-[1rem]">
          The future of visual creation. Powered by humans and AI everywhere
        </p>
      </div>
      <div>
        <Gallery />
      </div>
    </main>
  );
};

export default homepage;
