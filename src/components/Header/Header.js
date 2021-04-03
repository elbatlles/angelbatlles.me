import React from "react";
import Navbar from "../Navbar";
import SEO from "../seo";

export const Header = (props) => {
  return (
    <>
      <SEO
        description="[Angel Batlles] 🥷🏻 | Mi recorrido"
        lang="es"
        meta="[Angel Batlles] 🥷🏻 | Mi recorrido"
        title="[Angel Batlles] 🥷🏻 | Mi recorrido"
      />
      <Navbar transparent />
    </>
  );
};

export default Header;
