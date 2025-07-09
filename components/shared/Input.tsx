import React from "react";

type InputProps = {
  title: string;
  id: string;
  type?: string;
};

const Input: React.FC<InputProps> = ({ title, id, type = "text" }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        className="block px-2.5 pb-2.5 pt-4 w-full  text-black bg-transparent rounded-[2px] ring-1 ring-[#c9cace] appearance-none   focus:outline-none focus:ring-2 focus:ring-black peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black"
      >
        {title}
      </label>
    </div>
  );
};

export default Input;
