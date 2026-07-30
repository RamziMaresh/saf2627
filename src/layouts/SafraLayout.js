"use client";
import { safraUtility } from "../utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
//
import '@emailjs/browser';



const SafraLayout = ({children}) => {
  useEffect(() => {
    safraUtility.animation();
    safraUtility.fixedHeader();
  });

  return (
    <Fragment>
      <div className="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};


export default SafraLayout;
