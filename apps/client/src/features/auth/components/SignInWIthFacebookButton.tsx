"use client";

import { supabaseClient } from "@v1/supabase";
import Image from "next/image";

import { env } from "@/env.mjs";

export const SignInWithFacebookButton = () => {
  // const supabaseClient = createBrowserClient(
  //   env.NEXT_PUBLIC_SUPABASE_URL,
  //   env.NEXT_PUBLIC_SUPABASE_KEY
  // );

  const signInWithFacebook = async () => {
    await supabaseClient.auth.signInWithOAuth({
      provider: "facebook",
    });
  };

  return (
    <button
      onClick={signInWithFacebook}
      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
hover:border-yellow-400 focus:bg-yellow-50 active:bg-yellow-100"
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          className="absolute left-0 w-5"
          alt="Facebook logo"
          width="8"
          height="8"
        />
        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-yellow-600 sm:text-base">
          Continue with Facebook
        </span>
      </div>
    </button>
  );
};
