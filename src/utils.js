export const menuText = [
  {
    name: " ",
    ico: "home",
    fa: "s",
    url: "/",
    description:
      " Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme",
    meta:
      "  Bienvenidos a mi web personal, donde encontraras un poco de mi, curiosea lo que veas y preguntarme ",
    title: "[Angel Batlles] 🥷🏻 | Mi recorrido por el mundo",
  },
  {
    name: "Programación",
    ico: "code",
    fa: "s",
    url: "/dev",
    description:
      "Te eneseñare las cosas que se de programación y que me gustaría aprender en un futuro no muy lejano :)",
    meta: "Lenguajes que he tocado o que me gustaría aprender",
    title:
      "[Angel Batlles] 🥷🏻 | Los lenguajes que se y lo que me gustaría aprender",
  },
  {
    name: "Crypto",
    ico: "btc",
    fa: "b",
    url: "/crypto",
    description:
      "Entra y te explico porque deberias comprar criptomonedas este 2021, deberias conocerlo ya",
    meta:
      "Entra y te explico porque deberias comprar criptomonedas este 2021, deberias conocerlo ya",
    title: "[Angel Batlles] 🥷🏻 | Por qúe invertir es una buena idea",
  },
  {
    name: "Marketing",
    ico: "ad",
    fa: "s",
    url: "/marketing",
    description: "[Angel Batlles] 🥷🏻 | Mi recorrido",
    meta: "[Angel Batlles] 🥷🏻 | Mi recorrido",
    title: "[Angel Batlles] 🥷🏻 | Mi recorrido",
  },
  {
    name: "Deporte",
    ico: "dumbbell",
    fa: "s",
    url: "/sport",
    description:
      "Te voy a contar porque me gusta el crossfit y sus ventajas para el dia a dia!",
    meta:
      "[Te voy a contar porque me gusta el crossfit y sus ventajas para el dia a dia!",
    title: "[Angel Batlles] 🥷🏻 | Deporte/Crossfit",
  },
];

export const configWeb = {
  pages: [
    {
      name: " ",
      ico: "home",
      fa: "s",
      url: "/",
    },
    {
      name: "Programación",
      ico: "code",
      fa: "s",
      url: "dev",
    },
    {
      name: "Crypto",
      ico: "btc",
      fa: "b",
      url: "crypto",
    },
    {
      name: "Marketing",
      ico: "ad",
      fa: "s",
      url: "marketing",
    },
    {
      name: "Deporte",
      ico: "dumbbell",
      fa: "s",
      url: "sport",
    },
  ],
};

export function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}
