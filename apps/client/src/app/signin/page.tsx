import React from "react";
import Image from "next/image";

import {
  SignInWithFacebookButton,
  SignInWithGithubButton,
  SignInWithGoogleButton,
} from "@/features/auth/components";

const signin = () => {
  return (
    <>
      <div className="relative py-16 ">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              <div className="p-6 sm:p-16">
                <div className="text-center">
                  {/* <Image
                    src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
                    loading="lazy"
                    className="w-10"
                    alt="tailus logo"
                    width="8"
                    height="8"
                  /> */}
                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                    Sign in to continue shopping
                  </h2>
                </div>
                <div className="mt-16 grid space-y-4">
                  <SignInWithGithubButton />
                  <SignInWithGoogleButton />
                  <SignInWithFacebookButton />
                </div>

                <div className="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                  <p className="text-xs">
                    By proceeding, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms of Use
                    </a>{" "}
                    and confirm you have read our{" "}
                    <a href="#" className="underline">
                      Privacy and Cookie Statement
                    </a>
                    .
                  </p>
                  <p className="text-xs">
                    This site is protected by reCAPTCHA and the{" "}
                    <a href="#" className="underline">
                      Google Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline">
                      Terms of Service
                    </a>{" "}
                    apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signin;
