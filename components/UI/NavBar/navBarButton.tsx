import Link from "next/link";
import { useState } from "react";
import { useTheme } from 'next-themes'

interface props {
  title: string;
  navlink: string;
}

export const NavBarButton = ({ title, navlink }: props) => {
  return (
    <button>
      <Link href= {navlink} >
        <span className="items-center justify-center w-full px-5 py-2 rounded lg:inline-flex lg:w-auto">
          <h1 className="font-semibold text-title-dark font-title">
            {title}
          </h1>
        </span>
      </Link>
    </button>
  );
};
