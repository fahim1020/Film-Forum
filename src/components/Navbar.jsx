import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white text-black rounded-lg shadow-md mt-3 w-52 p-2"
          >
            <li>
              <a className="hover:text-purple-500">Home</a>
            </li>
            {/* <li>
              <a className="hover:text-purple-500">Movies</a>
            </li>
            <li>
              <a className="hover:text-purple-500">Reviews</a>
            </li> */}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold text-white font-serif tracking-wide">
          Film-Forum
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-4 text-lg">
          <li>
            <Link
              to={"/"}
              className="hover:text-yellow-300 transition duration-300 active:text-yellow-400"
            >
              Home
            </Link>
          </li>
          {/* <li>
            <a className="hover:text-yellow-300 transition duration-300">
              Movies
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-300 transition duration-300">
              Reviews
            </a>
          </li> */}
        </ul>
      </div>
      {/* <div className="navbar-end hidden lg:flex">
        <button className="btn btn-outline border-white text-white hover:bg-yellow-300 hover:text-black transition duration-300">
          Contact Us
        </button>
      </div> */}
    </div>
  );
};
