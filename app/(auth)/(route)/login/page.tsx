import AuthForm, { AuthType } from "@/components/shared/AuthForm";
import { LogoIcon } from "@/utils/icons";
import Image from "next/image";
import React from "react";

const login = () => {
  return (
    <section className="h-screen flex max-[991px]:justify-center max-[991px]:items-center">
      <div
        className="fixed block inset-0 min-[1024px]:left-[400px]"
        style={{
          backgroundImage: 'url("/images/auth/daily.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="w-[30rem]  pt-10 pb-16 rounded-[5px] max-sm:h-full flex items-center justify-center bg-white drop-shadow-2xl shadow-xl">
        <div className="flex flex-col items-center w-full">
          <LogoIcon width={120} height={100} />
          <hgroup className="text-center">
            <h2 className="text-2xl leading-0 mb-4 font-semibold">Welcome</h2>
            <p className="text-sm">Log in to Lummi</p>
          </hgroup>
          {/* Auth Form  */}
          <div className="mt-4 w-full px-7 sm:px-14 ">
            <AuthForm type={AuthType.Login} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
