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
                <div className="mt-10 py-10 border-t border-gray-300 ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p>
                        Si has llegado aquí lo mas seguro que sea porque tienes
                        curiosidad sobre el tema de las criptomonedas, que si
                        realmente tiene tanto riesgo como parece, si puedo
                        generar dinero y como me puedo meter.
                        <br /> Primero de todo, si tiene un riesgo, no te lo voy
                        a negar, la crypto que “menos” riesgo tiene es BTC y ha
                        partir de ahí el riesgo va en aumento, te dejare mi
                        portfolio para que veas como calculo el riesgo, aun asi
                        si esperes paciente y te conviertes en un{" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://blog.bitnovo.com/que-es-holdear/"
                        >
                          Holder. <br />
                        </a>
                        <br />
                        <a className="font-bold" href="#">
                          {" "}
                          Si realmente lo tienes claro vamos al lio!{" "}
                        </a>
                      </p>
                      <h2>¿Como calculo el riesgo?</h2>
                      <br />
                      <h3>1. Años de antigüedad del proyecto</h3>
                      <p>
                        Si has llegado aquí lo mas seguro que sea porque tienes
                        curiosidad sobre el tema de las criptomonedas, que si
                        realmente tiene tanto riesgo como parece, si puedo
                        generar dinero y como me puedo meter. Primero de todo,
                        si tiene un riesgo, no te lo voy a negar, la crypto que
                        “menos” riesgo tiene es BTC y ha partir de ahí el riesgo
                        va en aumento, te dejare mi portfolio para que veas como
                        calculo el riesgo.
                      </p>
                      <h3>2. Años de antigüedad del proyecto</h3>
                      <p>
                        Cuando valoramos la opción de comprar una crypto, uno de
                        los parámetros que a pensar seria el equipo que hay
                        detras, muchas veces pueda que no conozcamos a nadie del
                        proyecto, pero en algunos casos podemos ver ciertos
                        movimientos de trabajadores/CEO’s que crean nuevos
                        proyectos y eso muchas veces generan confianza, un caso
                        claro seria Polkadot, ya que el CEO era uno de los CEO’s
                        de ETH, el segundo proyecto mas importante de este
                        mundo.
                      </p>
                      <h3> 3.Valorar el Market Cap</h3>
                      <p>
                        Otro punto a valorar seria el Market cap, el Market cap,
                        es toda la capitalización que tiene esa crypto, en otras
                        palabras toda la pasta que hay ahi metida, cuando mas
                        dinero em principio es mas segura, pero menos
                        oportunidad.
                        <br /> <br />
                        Mi recomendación es empezar con el Top 10.
                      </p>
                      <p>Pero sobretodo... </p>
                      <h3>¡Informate!</h3>
                      <p>
                        {" "}
                        Estate atento a todas las noticias, hay muchas webs, yo
                        te recomiendo dos,{" "}
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://cryptopanic.com/"
                        >
                          Cryptopanic.com
                        </a>{" "}
                        que es un resumen de todas noticias y twitter.
                      </p>
                      <p className="font-bold">
                        Y Nunca pongas un dinero que no te puedes permitir
                        perder
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
