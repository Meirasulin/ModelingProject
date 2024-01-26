import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-md">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 md:space-x-5">
              <svg className="w-8 h-8 text-blue-500"></svg>
              <h1 className="text-xl font-semibold text-gray-800">
                Social Media
              </h1>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-gray-600 rounded hover:text-gray-800 hover:bg-gray-100">
                Log In
              </button>
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
