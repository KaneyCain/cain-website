import {Hero} from "../pages/PageBlocks/Hero/Hero"
import {About} from "../pages/PageBlocks/About/About" 
import {Skills} from "../pages/PageBlocks/Skills/Skills"


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
