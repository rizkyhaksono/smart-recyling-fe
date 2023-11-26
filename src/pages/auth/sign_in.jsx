import { useState } from "react";
import { Link } from "react-router-dom";
import { useSigninMutation } from "../../redux/api/authApi";
import Cookies from "universal-cookie";
import { authApi } from "../../redux/api/authApi";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hook"

export default function SignInPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container py-8 px-4 mx-auto max-w-screen lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row gap-5 items-center">
              <img src="/logo.png" alt="Logo" width={40} height={40} />
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-textColor md:text-5xl lg:text-6xl">Welcome Back!</h1>
            </div>
            <p className="mb-4 mt-2 text-lg font-normal text-gray-500 lg:text-xl">Let us sign you in</p>
            <Link to={"/"} className="text-textColor hover:underline font-medium text-lg inline-flex items-center">
              Back to Home
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </Link>
          </div>
          <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
              <h2 className="text-2xl font-bold text-textColor">Sign In to Your Account</h2>
              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-textColor">
                    Your email
                  </label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg-blue-500 block w-full p-2.5" placeholder="name@gmail.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-textColor">
                    Your password
                  </label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-textColor text-sm rounded-lg block w-full p-2.5" required />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="font-medium text-gray-500">
                      Remember this device
                    </label>
                  </div>
                  <a href="#" className="ml-auto text-sm font-medium text-primary hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center bg-primary hover:bg-secondary text-white bg-backgroundAbout rounded-lg focus:ring-4 focus:ring-blue-300 sm:w-auto">
                  Sign in your account
                </button>
                <div className="text-sm font-medium text-gray-900">
                  {`Don't have account? `}
                  <a className="text-primary hover:underline" href="/signup">
                    Sign up your account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
