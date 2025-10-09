import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayOuts = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen ">
        <Navbar />
        <div className="flex-1 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayOuts;
