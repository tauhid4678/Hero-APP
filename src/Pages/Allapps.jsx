import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Appcards from "../Components/Appcards";
import AppsNotFound from "../Components/AppsNotFound";

export default function Allapps() {
  const apps = useLoaderData() || [];
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tfound = filteredApps.length;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10">
        <div className="text-center py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Our All Applications
          </h1>
          <p className="py-3 text-sm sm:text-base md:text-lg">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 px-5 py-5 w-full">
          <h1 className="font-semibold text-2xl text-center sm:text-left">
            ({tfound}) Apps Found
          </h1>

          <label className="flex items-center gap-2 px-5 py-2 border rounded-full shadow-sm w-full sm:w-80 bg-white">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none bg-transparent w-full"
            />
          </label>
        </div>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center pb-10">
            {filteredApps.map((app) => (
              <Appcards key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full min-h-[60vh]">
            <AppsNotFound />
          </div>
        )}
      </div>
    </div>
  );
}
