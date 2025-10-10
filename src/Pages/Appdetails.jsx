import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import toast, { Toaster } from "react-hot-toast";

export default function AppDetails() {
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("selectedApp");
    if (stored) setApp(JSON.parse(stored));
    else window.location.href = "/";
  }, []);

  useEffect(() => {
    const storedInstalled = localStorage.getItem("installedApps");
    if (storedInstalled && app) {
      const installedList = JSON.parse(storedInstalled);
      const exists = installedList.some((a) => a.id === app.id);
      if (exists) setInstalled(true);
    }
  }, [app]);

  if (!app) return null;

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);

    const stored = localStorage.getItem("installedApps");
    const installedList = stored ? JSON.parse(stored) : [];

    const exists = installedList.some((a) => a.id === app.id);
    if (!exists) {
      installedList.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedList));
    }
  };

  const reviewData = (app.ratings || [])
    .slice()
    .sort((a, b) => b.count - a.count);

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 md:px-10">
      <Toaster position="top-right" />

      <div className="flex flex-col md:flex-row gap-5 items-center md:items-start">
        <img
          src={app.image}
          alt={app.title}
          className="w-32 h-32 md:w-50 md:h-50 rounded-xl mr-0 md:mr-10"
        />
        <div className="flex-1 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold">
            {app.title}
          </h1>
          <p className="text-gray-600 mt-1">
            Developed by{" "}
            <span className="gradcolor font-semibold">{app.companyName}</span>
          </p>

          <div className="flex flex-wrap gap-4 mt-3">
            <div className="flex flex-col items-center w-28 sm:w-32">
              <img
                className="w-8 h-8"
                src="/src/assets/icon-downloads.png"
                alt="Downloads"
              />
              <h1>Downloads</h1>
              <div className="font-bold text-lg">
                {(app.downloads / 1000000).toFixed(1)} M
              </div>
            </div>
            <div className="flex flex-col items-center w-28 sm:w-32">
              <img
                className="w-8 h-8"
                src="/src/assets/icon-ratings.png"
                alt="Ratings"
              />
              <h1>Average Ratings</h1>
              <div className="font-bold">{app.ratingAvg}</div>
            </div>
            <div className="flex flex-col items-center w-28 sm:w-32">
              <img
                className="w-8 h-8"
                src="/src/assets/icon-reviews.png"
                alt="Reviews"
              />
              <h1>Total Reviews</h1>
              <div className="font-bold text-lg">
                {(app.reviews / 1000).toFixed(1)} K
              </div>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`w-full sm:w-auto flex justify-center items-center gap-2 mt-4 px-6 py-2 rounded-lg text-white font-semibold ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {installed ? "Installed" : "Install"}
            <span className="font-semibold">{app.size}MB</span>
          </button>
        </div>
      </div>

      <div className="mt-10 border-t-2 border-b-2 border-gray-400 pt-5 pb-5">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
        <ResponsiveContainer
          width="100%"
          height={Math.min(window.innerHeight * 0.35, 300)}
        >
          <BarChart
            data={reviewData}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 50, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{app.description}</p>
      </div>
    </div>
  );
}
