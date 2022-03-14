import classes from "./layout.module.css";
import React from "react";

import Footer from "../Footer/footer";

import { PropsWithChildren } from "react";
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";

export default function Layout({ children }: PropsWithChildren<any>) {
  return (
    <div className={classes.body}>
     
        <Header/>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer />

    </div>
  );
}