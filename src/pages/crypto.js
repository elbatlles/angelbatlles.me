import React from "react";

//import Footer from "../components/Footer.js";

import Background from "../components/Header/Background";
import ImageProfile from "../components/Header/ImageProfile";
import Layout from "../components/Layout";
/*Images */
import inici from "../images/cryptoPages/inici.png";
import boton from "../images/cryptoPages/recurrent_boto.png";
import buyBTC from "../images/cryptoPages/comprarBTC.png";
import priceBTC from "../images/cryptoPages/priceBTC.jpeg";
import finishbuy from "../images/cryptoPages/finishbuy.jpeg";

const CryptoPage = () => {
  return (
    <Layout>
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
                      <h1>CriptoMonedas </h1>
                      <br />
                      <h3>Porque invierto en cripto</h3>
                      <br />
                      <p>
                        Invierto en criptomonedas por varias razones, una de
                        ellas porque considero que ese mundillo es súper
                        interesante, cada cripto aporta alguna solución que
                        novedosa e interesante, como podría ser las 2
                        principales como ETH (Aportan contratos inteligentes al
                        dinero) o BTC (Será el oro 2.0).
                        <br /> <br />
                        Otra porque es un mercado emergente, aun tiene mucho
                        recorrido y ha mas en 2021 han entrado varias
                        instituciones y eso aporta una estabilidad que antes no
                        tenia.
                      </p>
                      <h3>Filosofia Holder</h3>
                      <br />
                      <p>
                        Mi manera de invertir es a largo plazo (Holder), mi
                        experiencia en este mundo es que es extremadamente
                        volátil y lo mejor que puedes hacer es comprar y esperar
                        porque si intentas ir de gurú te puede salir muy bien o
                        extremadamente mal.
                      </p>
                      <h3> Porque tengo BTC como mayor activo del porfolio</h3>
                      <br />
                      <p>
                        BTC a diferencia del resto de crypto, genera mas
                        fiabilidad por varias razones:
                        <ol>
                          <li>
                            1. Tiene un <b>supply limitado</b> (Tiene una
                            cantidad fija de monedas)
                          </li>
                          <li>
                            2. Cada 4 años hay halving, eso significa que cada 4
                            años el coste de los mineros para generar BTC es el
                            doble de difícil, eso genera <b>escasez</b>.
                          </li>
                          <li>
                            3. Empresas pioneras como Telsa, paypal o greyscale
                            ya tienen/usan BTC, eso aun genera mas fiabilidad.
                          </li>
                        </ol>
                        <br />
                        Al igual que pasa con el oro, hay escasez por la demanda
                        que hay y si eso va aumentado el precio subirá.
                      </p>
                      <h3>Como invierto en criptos</h3>
                      <br />
                      <p>
                        En mi caso uso{" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://crypto.com/app/yhheqkmrqn"
                        >
                          App de crypto.com
                        </a>{" "}
                        (Usa el codigo yhheqkmrqn como referido si te ha servido
                        esta información) , os adjunto unos pantallazos de como
                        hacerlo:
                      </p>
                      <br />
                      <div className="grid md:grid-cols-5  grid-cols-2 gap-4">
                        <div>
                          {" "}
                          <img src={inici} alt="Initial" />
                        </div>
                        <div>
                          {" "}
                          <img alt="boton" src={boton} />
                        </div>
                        <div>
                          {" "}
                          <img alt="buy" src={buyBTC} />
                        </div>
                        <div>
                          {" "}
                          <img alt="price" src={priceBTC} />
                        </div>
                        <div>
                          {" "}
                          <img alt="finish" src={finishbuy} />
                        </div>
                      </div>
                      <br /> <br />
                      <p>
                        Ha parte también uso su{" "}
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://crypto.com/cards"
                        >
                          tarjeta
                        </a>{" "}
                        que me da un % de <b>cashback</b> en mis compras.
                        <br /> <br />
                        Para repartir las criptos, tambien uso{" "}
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://blockfi.com/?ref=e1facce8"
                        >
                          Blockfi
                        </a>{" "}
                        para repartir las criptos en varios sitios.
                      </p>
                      <h3>Dividendos </h3>
                      <br />
                      <p>
                        Tanto en Crypto.com como Blockfi dan dividendos por
                        tener esas cryptos guardadas, asi a poc a poco vas
                        generado unos beneficios. Hay plataformas que dan mucho
                        mas, pero desde mi punto de vista hay que ir con un poco
                        mas de cuidado.
                        <br /> <br />
                        Los links de los dividendos son:
                        <ul>
                          <li>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://crypto.com/earn"
                            >
                              {" "}
                              Crypto.com
                            </a>
                          </li>
                          <li>
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href="https://blockfi.com/crypto-interest-account/"
                            >
                              {" "}
                              BlockFi
                            </a>
                          </li>
                        </ul>
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
export default CryptoPage;
