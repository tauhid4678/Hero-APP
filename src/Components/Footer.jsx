import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#001931] text-white ">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-20 pt-10 gap-6">
        <div className="flex items-center">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            src="/assets/logo.png"
            alt="Logo"
          />
          <h1 className="font-bold ml-2 text-lg md:text-xl gradcolor">
            <a href="/">HERO.IO</a>
          </h1>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-semibold text-lg">Social Links</h1>
          <div className="flex gap-4 justify-center md:justify-start mt-3">
            <svg
              className="bg-white w-5 h-5 rounded-xl "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
            </svg>

            <svg
              className="bg-white w-5 h-5 rounded-xl "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
            </svg>
            <svg
              className="bg-white w-5 h-5 rounded-xl "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <p className="text-center py-6 text-sm md:text-base">
          © 2025 HERO.IO — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
