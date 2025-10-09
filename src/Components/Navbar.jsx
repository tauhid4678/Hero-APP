import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-4 shadow-md bg-white">
      <div className="flex items-center">
        <img
          className="ml-2 w-10 h-10 md:w-12 md:h-12"
          src="/src/assets/logo.png"
          alt="Logo"
        />
        <h1 className="font-bold ml-2 text-xl md:text-2xl text-[#9F62F2]">
          HERO.IO
        </h1>
      </div>
      {/* for desktop  */}
      <ul className="hidden md:flex gap-6 text-lg">
        <li className="cursor-pointer hover:text-[#9F62F2] hover:underline font-medium">
          Home
        </li>
        <li className="cursor-pointer hover:text-[#9F62F2] hover:underline font-medium">
          Apps
        </li>
        <li className="cursor-pointer hover:text-[#9F62F2] hover:underline font-medium">
          Installation
        </li>
      </ul>
      {/* desktop github button */}
      <div className="hidden md:flex">
        <button className="w-36 md:w-40 h-10 md:h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-xl">
          <img
            className="w-6 h-6 md:w-8 md:h-8"
            src="/src/assets/github_PNG40.png"
            alt=""
          />
          Contribute
        </button>
      </div>
      {/* menu for mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <span className="text-3xl font-bold text-black">X</span>
          ) : (
            <span className="text-3xl font-bold text-black">=</span>
          )}
        </button>
      </div>
      {/* mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 text-lg font-medium md:hidden z-50">
          <a className="hover:text-[#9F62F2]" href="./">
            Home
          </a>
          <a className="hover:text-[#9F62F2]" href="./apps">
            Apps
          </a>
          <a className="hover:text-[#9F62F2]" href="./installation">
            Installation
          </a>
          <button className="w-40 h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-xl">
            <img
              className="w-8 h-8"
              src="/src/assets/github_PNG40.png"
              alt=""
            />
            Contribute
          </button>
        </div>
      )}
    </nav>
  );
}
