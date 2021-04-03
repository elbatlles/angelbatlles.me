import React from "react";

//import Footer from "../components/Footer.js";

import Background from "../components/Header/Background";
import ImageProfile from "../components/Header/ImageProfile";

export const Crypto = (props) => {
  return (
    <>
      <main className="crypto-page">
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
                        Si has llegado aquí lo mas seguro que sea porque tienes
                        curiosidad sobre el tema de las criptomonedas, que si
                        realmente tiene tanto riesgo como parece, si puedo
                        generar dinero y como me puedo meter. Primero de todo,
                        si tiene un riesgo, no te lo voy a negar, la crypto que
                        “menos” riesgo tiene es BTC y ha partir de ahí el riesgo
                        va en aumento, te dejare mi portfolio para que veas como
                        calculo el riesgo.
                      </p>
                      <h2>¿Como calculo el riesgo?</h2>
                      <h4>Años de antigüedad del proyecto</h4>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Los proyectos en criptomonedas es muy volátil, entran
                        muchos proyectos, generan mucho fomo y en menos de un
                        año pueden desaparecer. Es por eso que uno de los
                        parámetros importantes a tener es la antigüedad del
                        proyecto, cuando mas nuevo, mas oportunidad de inversión
                        pero al mismo tiempo mas riesgo.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
