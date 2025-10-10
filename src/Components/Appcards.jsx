import React from "react";

const Appcards = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;

  const handleClick = () => {
    localStorage.setItem("selectedApp", JSON.stringify(app));

    window.location.href = "/appdetails";
  };

  return (
    <div
      onClick={handleClick}
      className="card border-2 border-solid border-gray-50 bg-base-100 w-60 h-60 shadow-sm rounded-xl p-5 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <figure className="flex w-52 h-28 rounded-xl justify-center items-center bg-[#D9D9D9]">
        <img className="rounded-xl w-20 h-20 " src={image} alt={title} />
      </figure>

      <div className="card-body py-3 px-1">
        <h2 className="card-title text-center font-bold pt-3">{title}</h2>
        <div className="card-actions flex justify-between py-6">
          <div className="badge badge-outline font-bold flex items-center gap-2">
            <img
              className="w-5 h-5"
              src="/assets/icon-downloads.png"
              alt="downloads"
            />
            {(downloads / 1000000).toFixed(1)} M
          </div>
          <div className="badge badge-outline font-bold flex items-center gap-2">
            {ratingAvg}
            <img
              className="w-5 h-5"
              src="/assets/icon-ratings.png"
              alt="ratings"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appcards;
