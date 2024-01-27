import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-blue-500" />

          <h1 className="text-2xl font-bold text-gray-800 ml-3">Dogram</h1>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <a
              href="#"
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              New Post
            </a>
          </div>

          <a href="#" className="relative">
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>

            <svg className="w-6 h-6 p-1.5 bg-gray-200 rounded-full hover:bg-gray-300" />
          </a>

          <a href="#" className="relative">
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></div>

            <svg className="w-6 h-6 p-1.5 bg-gray-200 rounded-full hover:bg-gray-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
