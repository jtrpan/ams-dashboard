"use client";
import Checkbox from "@/components/form/input/Checkbox";
import Input from "@/components/form/input/InputField";
import Label from "@/components/form/Label";
import Button from "@/components/ui/button/Button";
import { EyeCloseIcon, EyeIcon } from "@/icons";
import Link from "next/link";
import React, { useState } from "react";

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col flex-1 lg:w-1/2 w-full">
      <div className="w-full max-w-md sm:pt-10 mx-auto mb-5">
        {/*<Link*/}
        {/*  href="/"*/}
        {/*  className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"*/}
        {/*>*/}
        {/*  <ChevronLeftIcon />*/}
        {/*  Back to dashboard*/}
        {/*</Link>*/}
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Sign In
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Please enter your email and password to sign in.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5">
              <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93612L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26943C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign in with Google
              </button>
              <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7BB32E"
                    preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M11.119 8.989c0 .975-.791 1.766-1.766 1.766-.975 0-1.766-.791-1.766-1.766s.791-1.766 1.766-1.766c.975 0 1.766.791 1.766 1.766zm7.133 1.766c.975 0 1.766-.791 1.766-1.766s-.791-1.766-1.766-1.766c-.975 0-1.766.791-1.766 1.766s.791 1.766 1.766 1.766zm10.66 17.133.399 3.867-3.531-1.889a11.95 11.95 0 0 1-4.488.879c-4.982 0-9.16-3.037-10.29-7.129a13.66 13.66 0 0 1-2.76-.759L3.74 25.43l.427-4.117c-2.84-2.168-4.633-5.332-4.633-8.852C-.466 5.928 5.7.632 13.306.632c7.606 0 13.771 5.296 13.771 11.829 0 .586-.05 1.162-.145 1.727 2.701 1.695 4.46 4.481 4.46 7.63 0 2.525-1.134 4.82-2.977 6.501zm-20.042-6.684c.6.226 1.215.41 1.84.551a7.99 7.99 0 0 1-.01-.368c0-5.17 4.742-9.357 10.593-9.357 1.596 0 3.11.31 4.467.872.028-.286.046-.58.046-.872 0-5.548-5.385-10.064-12.006-10.064S1.3 6.558 1.3 12.106c0 1.426.35 2.807 1.042 4.103.682 1.275 1.656 2.402 2.899 3.348l.787.6-.102.985-.085.809 1.07-.572.71-.378zm18.355-7.57c.067.04.134.08.2.124-.067-.042-.134-.085-.2-.124zm-.2-.12c.032.031.068.069.1.1a.365.365 0 0 0-.1-.1zm-.205-.113c.033.03.067.07.1.1a.365.365 0 0 0-.1-.1zm-.205-.096c.036.02.064.04.1.06a.365.365 0 0 0-.1-.06zm-.196-.093.06.03zm-.199-.092c.01 0 .01.01.02.01a.365.365 0 0 0-.02-.01zm3.904 8.269c0-4.188-3.958-7.592-8.828-7.592s-8.828 3.404-8.828 7.592c0 4.188 3.958 7.592 8.828 7.592 1.335 0 2.617-.25 3.81-.745l.773-.318.738.396.597.32-.057-.558-.092-.886.657-.6c1.546-1.42 2.4-3.266 2.4-5.201zm-12.218-3.305c-.78 0-1.412.632-1.412 1.412 0 .78.632 1.412 1.412 1.412.78 0 1.412-.632 1.412-1.412 0-.78-.632-1.412-1.412-1.412zm6.78 0c-.78 0-1.412.632-1.412 1.412 0 .78.632 1.412 1.412 1.412.78 0 1.412-.632 1.412-1.412 0-.78-.632-1.412-1.412-1.412z" />
                </svg>
                Sign in with WeChat
              </button>
            </div>
            <div className="relative py-3 sm:py-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="p-2 text-gray-400 bg-white dark:bg-gray-900 sm:px-5 sm:py-2">
                  Or
                </span>
              </div>
            </div>
            <form>
              <div className="space-y-6">
                <div>
                  <Label>
                    Email <span className="text-error-500">*</span>{" "}
                  </Label>
                  <Input placeholder="info@gmail.com" type="email" />
                </div>
                <div>
                  <Label>
                    Password <span className="text-error-500">*</span>{" "}
                  </Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                    >
                      {showPassword ? (
                        <EyeIcon className="fill-gray-500 dark:fill-gray-400" />
                      ) : (
                        <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400" />
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isChecked} onChange={setIsChecked} />
                    <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                      Keep me logged in
                    </span>
                  </div>
                  <Link
                    href="/reset-password"
                    className="text-sm text-brand-500 hover:text-brand-600 dark:text-brand-400"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div>
                  <Button className="w-full" size="sm">
                    Sign in
                  </Button>
                </div>
              </div>
            </form>

            <div className="mt-5">
              <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
                Don&apos;t have an account? {""}
                <Link
                  href="/signup"
                  className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
