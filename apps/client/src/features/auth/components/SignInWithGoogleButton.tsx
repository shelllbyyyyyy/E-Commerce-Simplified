"use client";

import { supabaseClient } from "@v1/supabase";
import Image from "next/image";

export const SignInWithGoogleButton = () => {

  const signInWithGoogle = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: "google",
    });
  };

  return (
    <button
      onClick={signInWithGoogle}
      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
hover:border-yellow-400 focus:bg-yellow-50 active:bg-yellow-100"
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <Image
          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
          className="absolute left-0 w-5"
          alt="google logo"
          width="8"
          height="8"
        />
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-yellow-600 sm:text-base">
          Continue with Google
        </span>
      </div>
    </button>
  );
};
