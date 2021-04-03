import React from "react";
import { menuText } from "../utils";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative bg-white shadow-lg") +
          " flex flex-wrap justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap justify-between">
          <div className=" w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="hidden group lg:inline-block   ">
              <button className="hover:shadow-md bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                Mi experiencia en…
              </button>
              <ul
                className="  relative rounded my-1
               transition duration-150 ease-in-out origin-top min-w-32
              hidden   bg-yellow-600 pt-1 group-hover:hidden
             
              motion-safe:hover:scale-110
              
              "
              >
                {menuText.map((text) => {
                  return (
                    <li
                      key={text.name + text.url}
                      className="p-5 my- sm:inline-block"
                    >
                      <a href={text.url} className=" hover:text-white">
                        {text.name}{" "}
                        <i
                          className={
                            (props.transparent
                              ? "lg:text-gray-300 text-gray-500"
                              : "text-gray-500") +
                            " fa" +
                            text.fa +
                            " fa-" +
                            text.ico +
                            " text-lg leading-lg "
                          }
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow  bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
          >
            <ul className="relative flex flex-col lg:flex-row list-none lg:ml-auto">
              {menuText.map((text) => {
                return (
                  <li key={text.name + text.url} className="flex text-center">
                    <a
                      className={
                        (props.transparent
                          ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                          : "text-gray-800 hover:text-gray-600") +
                        " px-3 items-center  py-4 lg:py-2 flex  text-xs uppercase font-bold"
                      }
                      rel="noreferrer"
                      href={text.url}
                    >
                      <i
                        className={
                          (props.transparent
                            ? "lg:text-gray-300 text-gray-500"
                            : "text-gray-500") +
                          " fa" +
                          text.fa +
                          " fa-" +
                          text.ico +
                          " text-lg leading-lg mr-1"
                        }
                      />{" "}
                      {text.name}
                    </a>
                  </li>
                );
              })}

              <li className="flex "></li>
            </ul>
          </div>
          {/*RRSS */}
          <div
            className={
              "lg:flex flex-grow  bg-white lg:bg-transparent lg:shadow-none hidden"
            }
          >
            <ul className="relative flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex  text-xs uppercase font-bold"
                  }
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/abatlles/"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-linkedin text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2"></span>
                </a>
              </li>

              <li className="flex ">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flextext-xs uppercase font-bold"
                  }
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/elbatlles"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2"></span>
                </a>
              </li>

              <li className="flex ">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex  text-xs uppercase font-bold"
                  }
                  href="https://github.com/elbatlles"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className={
                      (props.transparent
                        ? "lg:text-gray-300 text-gray-500"
                        : "text-gray-500") +
                      " fab fa-github text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2"></span>
                </a>
              </li>

              <li className="flex "></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
