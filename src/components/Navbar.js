import React from "react";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 "
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/*  <div class="sm:flex justify-around">
              <a
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " invisible lg:visible text-sm font-bold leading-relaxed  mr-4 py-2 whitespace-nowrap uppercase"
                }
                href="#"
              >
                Mi experiencia en…
              </a>
              <ul class="text-gray-400 sm:self-center text-xl border-t sm:border-none">
                <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">
                    Menu 1
                  </a>
                </li>
                <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">
                    Menu 2
                  </a>
                </li>
                <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">
                    Menu 3
                  </a>
                </li>
                <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">
                    Menu 4
                  </a>
                </li>
                <li class="sm:inline-block">
                  <a href="#" class="p-3 hover:text-white">
                    Menu 5
                  </a>
                </li>
              </ul>
              </div> */}

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
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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

              <li className="flex items-center"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
