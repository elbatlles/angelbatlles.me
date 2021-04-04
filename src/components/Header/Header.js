import React from "react";
import Navbar from "../Navbar";
import { useLocation } from "@reach/router";
import SEO from "../SEO";
import { menuText } from "../../utils";
import "../../index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
export const Header = (props) => {
  //  const location = useLocation();
  const location = useLocation();

  const seoConfig = menuText.find((config) => {
    return config.url === location.pathname;
  });

  return (
    <>
      <SEO
        description={seoConfig ? seoConfig.description : "Pagina no encontrada"}
        meta={seoConfig ? seoConfig.meta : "Pagina no encontrada"}
        title={seoConfig ? seoConfig.title : "Pagina no encontrada"}
      />
      <Navbar transparent />
    </>
  );
};
/*
   <SEO
        description={seoConfig ? seoConfig.description : "Pagina no encontrada"}
        meta={seoConfig ? seoConfig.meta : "Pagina no encontrada"}
        title={seoConfig ? seoConfig.title : "Pagina no encontrada"}
      />
*/
export default Header;
