import * as React from "react";

//import Footer from "../components/Footer.js";

import Background from "../components/Header/Background";
import ImageProfile from "../components/Header/ImageProfile";
import Layout from "../components/Layout";
import crossfit1 from "../images/SportPages/crossfit.jpg";
const SportPage = () => {
  return (
    <Layout>
      <main className="profile-page">
        <Background />
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <ImageProfile />
                <div className="mt-10 py-10 border-t border-gray-300 ">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="mb-4 text-lg leading-relaxed text-gray-800">
                            Una de mis aficiones es el deporte, me gusta mucho
                            moverme y hacer actividades. Una de mis pasiones es
                            el Crossfit ya que te ayuda a mejorar tanto tu
                            físico como tu estado mental para superar las
                            adversidades del Wod y eso lo puedo extrapolar en mi
                            día a día. <br /> <br />
                            <br /> <br />
                            ¡Ya llevare mas de 4 años y aun tengo que mejorar
                            mucho!
                          </p>
                        </div>
                        <div>
                          <img alt="Crossfit" src={crossfit1} />
                        </div>
                      </div>
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

export default SportPage;
