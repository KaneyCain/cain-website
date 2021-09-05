import {Hero} from "../pages/PageBlocks/Hero/Hero"
import {About} from "../pages/PageBlocks/About/About" 
import {Skills} from "../pages/PageBlocks/Skills/Skills"

import Layout from "../components/Layout/layout";

import type { ReactElement } from 'react'

export default function Home() {
  return (
    <>
      <div className="px-4" >
        <Hero/>
        <About/>
        <Skills/>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}