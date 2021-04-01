import React, { useState } from "react";
import Navbar from "../components/Navbar";
//import Footer from "../components/Footer.js";
import imageBackground from "../assets/img/background.jpg";
import { Popup } from "../components/Popup";

export default function Profile() {
  const [popup, setpopup] = useState(false);
  const handleClick = () => {
    // const popupAux = Object.assign(popup, popup);
    //console.log(popupAux);
    setpopup(!popup);
  };
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url(" + imageBackground + ")",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={require("../assets/img/foto_perfil.png").default}
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
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Angel Batlles
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Les Franqueses, Barcelona
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Frontend Developer
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Hola, ¿qué tal estás? ¡Espero que muy bien! <br />{" "}
                        <br />
                        Si has llegado hasta aquí, supongo que buscas saber algo
                        más sobre mí que un simple listado con mis logros y
                        experiencias profesionales así que, ¡allá vamos! <br />{" "}
                        <br /> Con más <b>7 años de experiencia</b> trabajando
                        como diseñador y maquetador web, actualmente trabajo
                        como <b>Frontend Developer</b>.
                        <br />
                        <br /> A día de hoy vivo en
                        <b> Barcelona</b> y en un principio no me voy a mover de
                        mi ubicación.
                        <br /> <br />
                        Me considero una persona curiosa, activa y autodidacta.
                        No hay nada que me apasione más que devorar información,
                        experimentar y testear las novedades del sector. Cuando
                        algo me llama la atención, me empapo en ello hasta que
                        realmente lo controlo al 100%. Ese considero que es mi
                        mayor valor diferencial y lo que más disfruto de mi
                        trabajo.
                        <br /> Ahora, mis esfuerzos están centrados en el
                        <b> aprendizaje de Reactjs</b>, pues veo mi futuro
                        profesional enfocado hacia el desarrollo de nuevas
                        tecnologías relacionadas con JavaScript. Tambie estoy{" "}
                        <b>aprendiendo todo lo relacionado con la Blockhain</b>{" "}
                        ya que me parece un mundo super interesante.
                        <br />
                        <br /> Tambien iré añadiendo algun que otro proyecto en
                        mi{" "}
                        <a
                          className="underline focus:underline"
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/elbatlles"
                        >
                          Github
                        </a>{" "}
                        que vaya haciendo que puede ser de interés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {popup === true && <Popup handleClick={handleClick} />}
        </section>
      </main>
    </>
  );
}
