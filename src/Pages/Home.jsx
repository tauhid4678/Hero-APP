import React from "react";
import Bannerandstats from "../Components/bannerandstats";
import { useLoaderData } from "react-router-dom";
import AppCards from "../Components/Appcards";

export default function Home() {
  const apps = useLoaderData();

  const topApps = apps.slice(0, 8);

  return (
    <div>
      <Bannerandstats />
      <div className="flex flex-col items-center">
        <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10">
          <div className="text-center py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Top Trending Apps
            </h1>
            <p className="py-3 text-sm sm:text-base md:text-lg">
              Explore all trending apps on the market developed by us
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {topApps.map((app) => (
              <AppCards key={app.id} app={app} />
            ))}
          </div>
        </div>
        <div className="p-5">
          <button
            onClick={() => window.open("/apps", "_blank")}
            className="w-40 h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-xl"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
