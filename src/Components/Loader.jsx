import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
