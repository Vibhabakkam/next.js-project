"use client";
import Link from "next/link";
import React, { useState } from "react";


const Navbar = () => {
  const [movieName, setMovieName] = useState("anime");
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="h-16 bg-[rgb(3,37,65)] flex justify-center items-center">
      <div className="flex justify-between items-center sm:w-[80%] h-[80%] w-[95%]">
        <div className="text-white flex justify-evenly items-center w-[50%] h-[80%]">
          <Link className="sm:w-[40%] sm:h-[50%] w-[80%]" href={"/"}>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="logo"
              className="h-[100%] w-[100%]"
            />
          </Link>
          <Link className="sm:w-[15%] hidden sm:flex  md:text-[1.2vw] sm:text-[1.8vw] cursor-pointer" href={`/`}>
            {" "}
            Popular
          </Link>
          <Link className="sm:w-[20%] hidden sm:flex  md:text-[1.2vw] sm:text-[1.6vw] cursor-pointer" href={`/top`}>
            Top Rated
          </Link>
          <Link className="sm:w-[15%] hidden sm:flex  md:text-[1.2vw] sm:text-[1.6vw] cursor-pointer" href={`/upcomming`}>
            Upcomming
          </Link>
        </div>

        {/* searchbar */}
        <div className="text-white sm:flex hidden justify-evenly items-center w-[30%] h-[80%]">
          <div className="w-[25%] h-[90%] flex justify-center items-center rounded-lg cursor-pointer bg-[#172f51] hover:bg-[#3f0e38] md:text-[1.2vw] sm:text-[1.6vw]">
            Login
          </div>
          <div className="w-[70%] h-full flex items-center justify-evenly">
            <input
              type="search"
              placeholder="Search"
              className="w-[70%] h-full bg-transparent border border-slate-200 rounded-xl outline-none px-2 md:text-[1.2vw] sm:text-[1.6vw]"
              onChange={(e) => setMovieName(e.target.value)}
            />
            <Link
              className="cursor-pointer w-[20%]"
              href={`/search/${movieName}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile view */}
        <div
          className="sm:hidden w-[20%] h-[80%] flex justify-center items-center"
          onClick={() => {
            setIsMobile(!isMobile);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </div>
      </div>

      {/* hamberg div */}

      {isMobile && (
        <div className="sm:hidden w-full h-28 absolute z-30 top-16 right-0 flex flex-col justify-evenly items-center bg-[rgb(3,37,65)]">
          <button className="relative inline-flex items-center justify-center p-0.5 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Login
            </span>
          </button>

          <div className="flex justify-evenly items-center w-full">
            <input
              type="search"
              placeholder="search"
              className="border border-slate-200  w-[250px] outline-none h-10 px-2 bg-transparent rounded-lg text-white"
              onChange={(e) => setMovieName(e.target.value)}
            />

            <Link
              className="relative inline-flex items-center justify-center p-0.3 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 h-[70%]"
              href={`/search/${movieName}`}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
