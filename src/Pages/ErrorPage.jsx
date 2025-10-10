import React from "react";

export default function ErrorPage() {
  return (
    <div className="flex flex-col py-5 gap-5 justify-between items-center">
      <img className="w-80 h-80" src="/assets/error-404.png" alt="" />
      <h1 className="font-semibold text-black text-3xl">
        Oops, page not found!
      </h1>
      <p className="text-[#627382]">
        The page you are looking for is not available.
      </p>
      <button class="w-25 h-8 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg">
        <a href="/">Go Back!</a>
      </button>
    </div>
  );
}
