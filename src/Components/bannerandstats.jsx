import React from "react";

export default function () {
  return (
    <div>
      <div className="flex flex-col flex-1 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 ">
        <div>
          <h1 className="text-5xl font-bold text-center pt-10">
            We Build <br className="pt-5" />
            <span class="text-5xl gradcolor">Productive</span> App
          </h1>
          <p className="pt-5 text-[#627382] text-center">
            At HERO.IO ,we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>

        {/* {googleplay button} */}
        <div className=" items-center text-center gap-10 flex justify-center py-5 ">
          <button
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps?hl=en-IN",
                "_blank"
              )
            }
            className="w-35 h-10 border-solid border-gray-300 border-2 flex justify-center items-center rounded-md"
          >
            <img
              className="w-8 h-8"
              src="/assets/icons8-google-play-48.png"
              alt="googleplayicon"
            />
            <p className="font-semibold ">Google Play</p>
          </button>

          {/* {app store button} */}
          <button
            onClick={() =>
              window.open("https://www.apple.com/app-store/", "_blank")
            }
            className="w-35 h-10 border-solid border-gray-300 border-2 flex justify-center items-center rounded-md"
          >
            <img
              className="w-8 h-8"
              src="/assets/icons8-app-store-48.png"
              alt="appstoreicon"
            />
            <p className="font-semibold ">Appstore</p>
          </button>
        </div>
        <div className="flex justify-center">
          <img src="/assets/hero.png" alt="heroimg" />
        </div>
      </div>
      {/* {stats} */}
      <div className="w-full flex flex-col  text-center text-white bggradcolor py-3">
        <h1 className=" text-3xl font-semibold pt-5">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex justify-center items-center gap-15">
          <div className=" flex flex-col gap-3 py-5">
            <p>Total Downloads</p>
            <h1 className="text-3xl font-bold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className=" flex flex-col gap-3 py-5">
            <p>Total Reviews</p>
            <h1 className="text-3xl font-bold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className=" flex flex-col gap-3 py-5">
            <p>Active Apps</p>
            <h1 className="text-3xl font-bold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
}
