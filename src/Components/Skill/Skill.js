import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-reveal";
const languages = [
  {
    id: 1,
    name: "Javascript",
    image: "https://img.icons8.com/color/150/000000/javascript--v1.png",
    progress: 70
  },
  {
    id: 2,
    name: "Java",
    image: "https://img.icons8.com/color/150/000000/java--v1.png",
    progress: 80
  },
  {
    id: 3,
    name: "Python",
    image: "https://img.icons8.com/color/150/000000/python--v1.png",
    progress: 70
  },

  {
    id: 4,
    name: "Git",
    image: "https://img.icons8.com/color/150/000000/git.png",
    progress: 80
  },
  {
    id: 5,
    name: "Django",
    image: "https://img.icons8.com/color/150/000000/django--v1.png",
    progress: 75
  },
  {
    id: 6,
    name: "NodeJs",
    image: "https://img.icons8.com/color/150/000000/nodejs.png",

    progress: 60
  },
  {
    id: 7,
    name: "React",
    image: "https://img.icons8.com/office/150/000000/react.png",
    progress: 63
  },
  {
    id: 8,
    name: "Vue",
    image: "https://img.icons8.com/color/150/000000/vue-js.png",
    progress: 80
  },
  {
    id: 8,
    name: "Tensorflow",
    image: "https://img.icons8.com/color/150/000000/tensorflow.png",
    progress: 20
  }
];
export default function Stack() {
  return (
    <div className="skill" id="skill">
      <Fade left duration={3000}>
        <div
          className="min-h-screen flex flex-col items-center justify-center font-dosis"
          id="stack"
        >
          <h1 className="text-5xl font-bold">Skills</h1>
          <div className="flex flex-wrap justify-center mt-10">
            {languages.map((tech, index) => {
              return (
                <Fade
                  top={index % 2 === 0}
                  bottom={index % 2 === 1}
                  duration={1000}
                >
                  <span
                    className={`${
                      index % 2 === 0 ? " animate-float" : " animate-refloat"
                    } w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
                  >
                    <span>
                      <LazyLoadImage src={tech.image} alt={tech.name} />
                    </span>
                  </span>
                </Fade>
              );
            })}
          </div>
          <p className="w-11/12 md:max-w-xl text-xl text-center mt-10">
            ⚡ Design and Develop full stack web application using various
            Frameworks
            <br />⚡ Create and Design different types of machine learning
            models
          </p>
        </div>
      </Fade>
    </div>
  );
}
