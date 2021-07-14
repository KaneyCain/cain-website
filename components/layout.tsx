import React from "react";

interface ILayoutProps extends React.HTMLProps<HTMLDivElement> {}

export const Layout = (props: ILayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center flex-1 w-full bg-gray-100">
        {props.children}
      </div>
      <footer className="flex items-center justify-center flex-shrink-0 w-full h-16 from-green-400 to-blue-500 bg-gradient-to-l">
        <p className="text-xs text-white md:text-sm">
          Copyright &copy; 2021 Alexander Christopher Cain
        </p>
      </footer>
    </div>
  );
};