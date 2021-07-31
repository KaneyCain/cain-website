import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import heroPic from "../../../Assets/Images/hero.jpg";
import { HeroImage } from "./HeroImage";
import { CVButton } from "../../../components/Buttons/CVButton";


export const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center justify-center mt-5 md:container md:mx-auto sm:mt-8 sm:flex">
            
              <span className="inline-block p-4 py-1 mr-1 text-3xl font-semibold rounded text-mainBlue-Hover last:mr-0">
                Alexander Cain
              </span>

              <span className="inline-block p-4 m-1 text-pink-600 rounded text-l last:mr-0">
                Hi my name is Alex. <br/> I am a Computer Science  graduate and ameteur photographer.<br/> 
                This website is a place where I can display to the world my achievements and abilities. 
              </span>

            <CVButton />
          </div>

          <div className="flex flex-col items-center justify-center bg-auto md:container md:mx-auto ">
            <HeroImage />            
          </div>
        </div>
      </div>
    </>
  );
};
