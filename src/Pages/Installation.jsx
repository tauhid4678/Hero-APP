import React from "react";
import { Toaster } from "react-hot-toast";
import useInstalledApps from "../Hooks/useInstalledApps";
import useAppSorting from "../Hooks/useAppSorting";

export default function MyInstallation() {
  const { installedApps, uninstallApp } = useInstalledApps();
  const { sortedApps, sortBy, setSortBy } = useAppSorting(installedApps);

  return (
    <div className="px-4 sm:px-6 md:px-10 mt-10">
      <Toaster position="top-right" />
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Installed Apps</h1>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">({installedApps.length}) Apps Found</p>
        <select
          className="border rounded-md px-2 py-1 text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="size">Sort By Size</option>
          <option value="downloads">Sort By Downloads</option>
          <option value="rating">Sort By Rating</option>
        </select>
      </div>
      {sortedApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-20">
          No apps installed yet.
        </p>
      ) : (
        <div className="space-y-4">
          {sortedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition mb-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 rounded-lg bg-gray-200"
                />
                <div>
                  <h2 className="font-semibold text-lg">{app.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1 text-green-500 font-semibold">
                      <img
                        className="w-5 h-5"
                        src="/assets/icon-downloads.png"
                        alt=""
                      />
                      {Math.round(app.downloads / 1000000)}M
                    </span>
                    <span className="flex items-center gap-1 text-yellow-500 font-semibold">
                      <img
                        className="w-5 h-5"
                        src="/assets/icon-ratings.png"
                        alt=""
                      />
                      {app.ratingAvg}
                    </span>
                    <span className="font-semibold">{app.size} MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => uninstallApp(app.id)}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
