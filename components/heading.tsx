  
import Head from "next/head";
import React from "react";

interface IPageHeadProps {
  title?: string;
  description?: string;
}

export const PageHead = ({ title, description }: IPageHeadProps) => {
  return (
    <Head>
      <title>{"ALEXCAIN"}</title>
      <meta
        name="description"
        content={
          description
            ? description
            : "E-Folio of Alex Cain"
        }
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};