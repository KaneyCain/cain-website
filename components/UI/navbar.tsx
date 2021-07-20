import Link from "next/link";
import { useState } from "react";
import {useTheme} from 'next-themes'

import {DarkmodeToggleButton} from "../DarkMode/darkmodeButton"

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex flex-wrap items-center p-3">
        <div className="justify-around ">
          <Link href="/">
            <a className="inline-flex items-center p-2 mr-4 ">
              <span className="text-4xl font-semibold tracking-wide uppercase font-title">
                Alex•Cain
              </span>
            </a>
          </Link>
        </div>

        <button
          className="inline-flex p-3 ml-auto text-gray-900 rounded outline-none hover:bg-gray-100 lg:hidden"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto">
            <Link href="/">
              <span className="items-center justify-center w-full px-3 py-2 font-semibold text-gray-900 rounded font-title lg:inline-flex lg:w-auto hover:bg-gray-100 ">
                Home
              </span>
            </Link>

            <Link href="/">
              <span className="items-center justify-center w-full px-3 py-2 font-semibold text-gray-900 rounded font-title lg:inline-flex lg:w-auto hover:bg-gray-100 ">
                About
              </span>
            </Link>

            <Link href="/">
              <span className="items-center justify-center w-full px-3 py-2 font-semibold text-gray-900 rounded font-title lg:inline-flex lg:w-auto hover:bg-gray-100 ">
                Skills
              </span>
            </Link>

            <Link href="/">
              <span className="items-center justify-center w-full px-3 py-2 font-semibold text-gray-900 rounded font-title lg:inline-flex lg:w-auto hover:bg-gray-100 ">
                Contact
              </span>
            </Link>

            <DarkmodeToggleButton/>

          </div>
        </div>

       
      </nav>
    </>
  );
};
