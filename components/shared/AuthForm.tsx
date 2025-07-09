import React from "react";
import Input from "./Input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

// Define enum
export enum AuthType {
  Login = "login",
  Signup = "signup",
}

// Props interface
interface AuthProps {
  type: AuthType;
}

const AuthForm: React.FC<AuthProps> = ({ type }) => {
  const isLogin = type === AuthType.Login;
  return (
    <form className="auth flex flex-col w-full ">
      <div className="space-y-4">
        <div className="space-y-4">
          <Input id="email" title="Email Address" type="email" />
          <Input id="password" title="Password*" type="password" />
          {!isLogin && (
            <Input
              id="confirmPassword"
              title="Confirm Password*"
              type="password"
            />
          )}
        </div>

        {isLogin && (
          <span className="text-black w-max font-semibold inline-block  text-sm cursor-pointer">
            Forgot password?
          </span>
        )}

        <button className="w-full bg-black rounded-[2px] text-white py-4 font-semibold cursor-pointer">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-sm">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <Link href={"/signup"} className="font-semibold cursor-pointer">
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href={"/login"} className="font-semibold cursor-pointer">
                Log in
              </Link>
            </>
          )}
        </p>
      </div>
      <div className="flex items-center w-full mt-5">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-700 font-medium text-sm">OR</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="flex items-center ring py-3 gap-2 rounded-[2px] ring-gray-400 justify-center mt-7 cursor-pointer hover:bg-gray-100 duration-200">
        <FcGoogle className="size-6" />
        <h5 className="font-semibold">Continue with Google</h5>
      </div>
    </form>
  );
};

export default AuthForm;
