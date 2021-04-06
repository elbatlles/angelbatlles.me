module.exports = {
  siteMetadata: {
    title: "[Angel Batlles] 🥷🏻",
    titleTemplate: "%s",
    description:
      "Me llamo Angel Batlles y en esta pagina web intentare hablar sobre todo eso que aprendo y me parece interesante ",
    url: "https://angelbatlles.me", // No trailing slash allowed!
    image: "/images/foto_perfil.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@abatlles",
    siteUrl: "https://angelbatlles.me",
  },

  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-168645508-1",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Angel Batlles Web `,
        short_name: `Abatlles`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon/icon.png`,
        theme_color_in_head: false,
      },
    },
  ],
};
