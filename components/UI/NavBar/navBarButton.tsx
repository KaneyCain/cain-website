import Link from "next/link";
import { useState } from "react";
import { useTheme } from 'next-themes'

interface props {
  title: string;
  navlink: string;
}

export const NavBarButton = ({ title, navlink }:props) => {
  return (
    <>
      <Link href="/">
        <span className="items-center justify-center w-full px-5 py-2 font-semibold text-gray-900 rounded font-title lg:inline-flex lg:w-auto hover:bg-gray-100 ">
          {title}
        </span>
      </Link>
    </>
  )
};
