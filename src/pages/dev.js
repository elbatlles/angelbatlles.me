import * as React from "react";

//import Footer from "../components/Footer.js";

import Background from "../components/Header/Background";
import ImageProfile from "../components/Header/ImageProfile";
import Layout from "../components/Layout";
import reactHooks from "../assets/diploma-react-hooks.pdf";
const DevPage = () => {
  return (
    <Layout>
      <main className="profile-page">
        <Background />
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <ImageProfile />
                <div className="mt-10 py-10 border-t border-gray-300  ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h1> Programación </h1>
                      <br />
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        Actualmente programo en JS/TSC y la verdad que me
                        encanta programar en esos lenguajes y el framework que
                        toco suele ser React JS, aunque esta web por ejemplo
                        esta hecha en Gatsby por el tema del posicionamiento
                        web. Pero antiguamente no era así, antes trabajaba en
                        PHP, en los CMS Prestashop y Wordpress,
                        modificando/Creando plugins para estos, modificando los
                        temas e inventado cosas que el CMS no estaba pensado
                        hacer. <br /> <br />
                        ¡Por cierto hara poco me saque{" "}
                        <a
                          target="_blank"
                          rel="noreferrer nofollow"
                          href={reactHooks}
                        >
                          un curso de ReactJs
                        </a>{" "}
                        <b> para mejorar mis hablidades! </b>
                      </p>
                      <h3>Aprendiendo cositas</h3>
                      <br />
                      <h2>Blockhain:</h2>
                      <p>
                        En mis tiempos libres aprendo Blockhain, es un mundo que
                        me encanta, pero también he de reconocer que me cuesta
                        darle un caso de uso al día a día para proyectos
                        pequeños.
                      </p>
                      <h2>IOT:</h2>
                      <div className="grid md:grid-cols-2 tweet">
                        <p>
                          En el 2020 hice un curso de IOT que me abrió un mundo
                          que no conocía y me parece súper interesante, de vez
                          en cuando toqueteo mi Raspi para probar cosillas.
                        </p>
                        <blockquote className="twitter-tweet">
                          <p lang="ca" dir="ltr">
                            El passat 17 de desembre els alumnes del curs
                            Desenvolupament de solucions{" "}
                            <a
                              rel="noreferrer"
                              href="https://twitter.com/hashtag/IoT?src=hash&amp;ref_src=twsrc%5Etfw"
                            >
                              #IoT
                            </a>{" "}
                            (Internet of Things) del PQTM van fer la defensa
                            dels projectes finals de curs.
                            <br />
                            <br />
                            Enhorabona a tots!
                            <br />
                            <br />
                            CIFO l&#39;Hospitalet{" "}
                            <a
                              rel="noreferrer"
                              href="https://twitter.com/ocupaciocat?ref_src=twsrc%5Etfw"
                            >
                              @ocupaciocat
                            </a>
                            <a
                              rel="noreferrer"
                              href="https://twitter.com/hashtag/elearning?src=hash&amp;ref_src=twsrc%5Etfw"
                            >
                              #elearning
                            </a>{" "}
                            <a
                              rel="noreferrer"
                              href="https://twitter.com/hashtag/innovaci%C3%B3?src=hash&amp;ref_src=twsrc%5Etfw"
                            >
                              #innovació
                            </a>{" "}
                            <a
                              rel="noreferrer"
                              href="https://twitter.com/hashtag/TIC?src=hash&amp;ref_src=twsrc%5Etfw"
                            >
                              #TIC
                            </a>{" "}
                            <a rel="noreferrer" href="https://t.co/WXtwHyFgHs">
                              pic.twitter.com/WXtwHyFgHs
                            </a>
                          </p>
                          &mdash; UOC Corporate (@UOCcorporate){" "}
                          <a
                            rel="noreferrer"
                            href="https://twitter.com/UOCcorporate/status/1215601980380454913?ref_src=twsrc%5Etfw"
                          >
                            January 10, 2020
                          </a>
                        </blockquote>
                      </div>
                      <h2>Linux:</h2>
                      <p>
                        Técnicamente no estoy aprendiendo nada, pero como
                        trabajo en Archlinux, no hay día que lea/aprenda algo
                        nuevo.
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

export default DevPage;
