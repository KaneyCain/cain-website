import Link from "next/link";
import { useState } from "react";
import {useTheme} from 'next-themes'

import { DarkmodeToggleButton } from "../../DarkMode/darkmodeButton"
import { NavBarButton } from "./navBarButton";
   
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
                ALEX•CAIN
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
          <div className="flex flex-col items-start w-full lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto ">
            
            <NavBarButton
              title = {"About"}
              navlink = {"/"}
            />

            <NavBarButton
              title = {"Skills"}
              navlink = {"/"}
            />

            <NavBarButton
              title = {"Contact"}
              navlink = {"/"}
            />

            <DarkmodeToggleButton/>
          </div>
        </div>
      </nav>
    </>
  );
};
