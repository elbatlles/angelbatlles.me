import React, { useState } from "react";

import { Popup } from "../Popup";

export const ImageProfile = (props) => {
  const [popup, setpopup] = useState(false);
  const handleClick = () => {
    setpopup(!popup);
  };
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
          <div className="relative">
            <img
              alt="..."
              src={require("../../images/foto_perfil.png").default}
              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-3  text-center lg:self-center">
          <div className="py-6 px-3 mt-32 sm:mt-0  ">
            <button
              className="bg-yellow-500 active:bg-yellow-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
              type="button"
              onClick={handleClick}
              style={{ transition: "all .15s ease" }}
            >
              Connectar
            </button>
          </div>
        </div>
        <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-4xl font-semibold leading-normal  text-gray-800 mb-2">
          Angel Batlles
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
          Les Franqueses, Barcelona
        </div>
        <div className="mb-2 text-gray-700 mt-10">
          <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
          Frontend Developer / Holder
        </div>
      </div>
      {popup === true && <Popup handleClick={handleClick} />}
    </>
  );
};

export default ImageProfile;
