import classes from "./layout.module.css";
import React from "react";

import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

import { PropsWithChildren } from "react";
import Header from "../Header/header";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <body className={classes.body}>
      <div>
        <Header/>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </body>
  );
}