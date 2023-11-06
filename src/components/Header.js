import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <nav class="sticky top-0 z-10 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"}>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900">
            Taivideo
          </span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setOpenNav(!openNav)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${openNav ? "" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col font-bold text-lg text-blue-900 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                className="block py-2 pl-3 pr-4 md:p-0"
                to={"/"}
              >
                Tải video TikTok
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                className="block py-2 pl-3 pr-4 md:p-0"
                to={"youtube"}
              >
                Tải video Youtube
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                className="block py-2 pl-3 pr-4 md:p-0"
                to={"instagram"}
              >
                Tải video Instagram
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setOpenNav(false);
                }}
                className="block py-2 pl-3 pr-4 md:p-0"
                to={"facebook"}
              >
                Tải video Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
