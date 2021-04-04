import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_dCG0updxK4whLcvan908G");
export const Popup = (props) => {
  const { handleClick } = props;
  var templateParams = {
    from_name: "",
    email: "",
    message: "",
  };

  const [form, setform] = useState(templateParams);
  const [send, setsend] = useState(false);
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setform({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSend = () => {
    emailjs.send("angelbatlles.me", "template_t7z695e", form).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setsend(true);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  useEffect(() => {
    console.log("Revisar:");
    console.log(form);
    return () => {};
  }, [form]);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">Formulario de Contacto</h3>
            </div>
            {/*body*/}
            {send === false ? (
              <div>
                <div className="relative p-6 flex-auto">
                  <p className="   ">
                    Si tienes cualquier duda sobre mi, no dudes en ponerte en
                    contacto conmigo.
                  </p>
                </div>
                <div class="grid grid-cols-2 grid-flow-col ">
                  <div className="relative p-6 flex-auto">
                    {" "}
                    <p className="my-4   text-lg leading-relaxed">
                      <input
                        onChange={handleInputChange}
                        type="text"
                        className="w-full rounded   "
                        placeholder="Nombre"
                        name="from_name"
                        value={form.from_name}
                      />
                    </p>
                  </div>
                  <div className="relative p-6 flex-auto">
                    {" "}
                    <p className="my-4   text-lg leading-relaxed">
                      <input
                        type="email"
                        name="email"
                        onChange={handleInputChange}
                        className="w-full rounded border-black "
                        placeholder="E-mail"
                        value={form.email}
                      />
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 grid-flow-col ">
                  <div className="relative p-6 flex-auto">
                    <textarea
                      contentEditable="true"
                      name="message"
                      onChange={handleInputChange}
                      className="w-full relative p-6 flex-auto"
                      value={form.message}
                    >
                      {form.message}
                    </textarea>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <p className="  p-6 text-center    ">
                  ¡Enviado, en breve te contestaré!
                </p>
              </div>
            )}

            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleClick()}
              >
                Cerrar
              </button>
              <button
                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleSend()}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
