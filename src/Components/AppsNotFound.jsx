import React from "react";

export default function ErrorPage() {
  return (
    <div className="flex flex-col py-5 gap-5 justify-between items-center">
      <img className="w-80 h-80" src="/assets/App-Error.png" alt="" />
      <h1 className="font-semibold text-black text-3xl">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button class="w-25 h-8 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg">
        <a href="./apps">Go Back!</a>
      </button>
    </div>
  );
}
