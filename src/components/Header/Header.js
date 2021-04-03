import React from "react";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";
import SEO from "../seo";
import { menuText } from "../../utils";

export const Header = (props) => {
  const location = useLocation();
  console.log(location.pathname);
  const seoConfig = menuText.find((config) => {
    return config.url === location.pathname.replace("/", "");
  });

  return (
    <>
      <SEO
        description={seoConfig ? seoConfig.description : "Pagina no encontrada"}
        lang="es"
        meta={seoConfig ? seoConfig.meta : "Pagina no encontrada"}
        title={seoConfig ? seoConfig.title : "Pagina no encontrada"}
      />
      <Navbar transparent />
    </>
  );
};

export default Header;
