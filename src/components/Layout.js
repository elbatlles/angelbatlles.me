import React from "react";
//import Footer from "./Footer";
import Header from "./Header/Header";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div className="Main">
      <Header />
      {children}
      {/*<Footer /> */}
    </div>
  );
};

export default Layout;
