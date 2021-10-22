import react from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Find me</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Find me on any of these platforms,
            </h5>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              <strong>Phone:</strong>9863336834
            </h5>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              <strong>Email:</strong>iamdeep8888@gmail.com
            </h5>
            <div className="mt-6">
              <a
                className=" button bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                href="https://twitter.com/pudasaini_deep"
                type="button"
                target="_blank"
              >
                <i className="flex fab fa-twitter text-orange-500"></i>
              </a>
              <a
                className=" button bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                href="https://www.facebook.com/profile.php?id=100009801221837"
                target="_blank"
              >
                <i className="flex fab fa-facebook-square text-orange-500"></i>
              </a>
              <a
                className=" button bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                href="https://www.linkedin.com/in/deep-pudasaini-87bb921a0"
                target="_blank"
              >
                <i className="flex fab fa-linkedin text-orange-500"></i>
              </a>
              <a
                className=" button bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                href="https://github.com/deeppudasaini"
                target="_blank"
              >
                <i className="flex fab fa-github text-orange-500"></i>
              </a>
              <a
                className=" button bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
                href="https://www.instagram.com/deeppudasaini07/"
                target="_blank"
              >
                <i className="flex fab fa-instagram text-orange-500"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © Deep Pudasaini
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
