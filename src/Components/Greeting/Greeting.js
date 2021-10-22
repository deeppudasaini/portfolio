import react from "react";
import "./greeting.css";
import { Fade } from "react-reveal";
export default function Greeting() {
  return (
    <div className="home" id="home">
      <Fade top duration={2000}>
        <div className="container md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center" style={{ 
      backgroundImage: `url("programmer.svg")` 
    }}>
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
              Hello I am
              <span className="bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 text-black">
                &nbsp;Deep Pudasaini
              </span>
            </h1>
            <p className="text-base md:text-2xl mb-8 text-center md:text-left">
              A passionate Full Stack Software Developer 🚀 having an interest
              of building Web applications with JavaScript / Reactjs / VueJs /
              Nodejs and some other cool libraries and other backend frameworks
              like Django and Laravel. I am also an Data Science Enthusiast with
              keen interest on Machine Learning and AI.
            </p>
          </div>

          <div className="w-full xl:w-3/5 p-12 overflow-hidden">
            <img
              className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              src="hola.png"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
