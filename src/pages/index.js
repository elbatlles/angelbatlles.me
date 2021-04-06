import * as React from "react";

//import Footer from "../components/Footer.js";

import Background from "../components/Header/Background";
import ImageProfile from "../components/Header/ImageProfile";
import Layout from "../components/Layout";
const IndexPage = () => {
  return (
    <Layout>
      <main className="profile-page">
        <Background />
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <ImageProfile />
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
                        <br />
                        Me considero una persona curiosa, activa y autodidacta.
                        No hay nada que me apasione más que devorar información,
                        experimentar y testear las novedades del sector. Cuando
                        algo me llama la atención, me absorbo en ello hasta que
                        realmente lo controlo al 100%. Ese considero que es mi
                        mayor valor diferencial y lo que más disfruto de mi
                        trabajo.
                        <br /> <br /> Ahora, mis esfuerzos están centrados en el
                        <b> aprendizaje de Reactjs</b>, pues veo mi futuro
                        profesional enfocado hacia el desarrollo de nuevas
                        tecnologías relacionadas con JavaScript/Typescript.
                        También estoy{" "}
                        <b>
                          aprendiendo todo lo relacionado con la Blockchain{" "}
                        </b>
                        ya que me parece un mundo super interesante.
                        <br />
                        <br /> Mi otra pasión es el deporte en general, pero lo
                        que me fascina es el <b>Crossfit</b>, para mi es un
                        desafió constante, tanto mental como físico que puedo
                        extrapolar en mi día a día.
                        <br />
                        <br />
                        Iré añadiendo algun que otro proyecto en mi{" "}
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
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
