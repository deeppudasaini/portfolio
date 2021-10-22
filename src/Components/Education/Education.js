import { Fade } from "react-reveal";
import "./education.css";
export default function Education() {
  return (
    <div className="education" id="education">
      <Fade right duration={2000}>
        <h1 className="text-5xl font-bold">Education</h1>

        <div className="container bg-gray-200 mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border random"></div>
            <Fade left duration={1000}>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                  <img
                    className="mx-auto"
                    src="https://img.icons8.com/external-justicon-flat-justicon/32/000000/external-school-elearning-and-education-justicon-flat-justicon.png"
                  />
                </div>
                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">
                    Shanti Adarsha Secondary School
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                    <p>
                      <strong>2004 - 2015</strong>
                    </p>
                    <strong>Board: </strong>Secondary Education Examination
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left duration={1000}>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                  <img className="mx-auto" src="hh.png" />
                </div>
                <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-white text-xl">
                    Kathmandu Model Collge(KMC)
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    <p>
                      <strong>2016 - 2018</strong>
                    </p>
                    <strong>Board: </strong>National Education Board <br />
                    <strong>Module: </strong>Science(Physical) <br />
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left duration={1000}>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-16 h-16 rounded-full">
                  <img className="mx-auto" src="UONLogo.png" />
                </div>
                <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-gray-800 text-xl">
                    University of Northampton (NAMI College)
                  </h3>
                  <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                    <p>
                      <strong>2016 - 2018</strong>
                    </p>
                    <strong>College: </strong>NAMI College <br />
                    <strong>Course: </strong>BSc.(Hons) Computing (Software
                    Engineering) <br />
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Fade>
    </div>
  );
}
