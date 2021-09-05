import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

import { DocumentDownloadIcon } from '@heroicons/react/solid'

export const CVButton = () => {
  return (
    <button className="flex rounded-md shadow">
        <a
          href="#"
          className="flex items-center justify-center w-full px-8 py-3 font-semibold transition-all duration-150 ease-linear border-transparent rounded-md text-title bg-mainBlue hover:bg-mainBlue-Hover hover:shadow-lg md:py-4 md:text-lg md:px-10"
        >
          Download CV
          <DocumentDownloadIcon className="w-6 h-6 ml-2"/>
        </a>

    </button>
  );
};
