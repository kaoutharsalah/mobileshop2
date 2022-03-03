import classes from "./layout.module.css";
import React from "react";

import Footer from "../Footer/footer";

import { PropsWithChildren } from "react";
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <body className={classes.body}>
      <div>
        <Header/>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer />
      </div>
    </body>
  );
}