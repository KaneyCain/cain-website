import {Hero} from "../components/Home/Hero/Hero"
import {About} from "../components/Home/About/About" 
import {Skills} from "../components/Home/Skills/Skills"

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