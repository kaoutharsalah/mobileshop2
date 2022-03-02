
import { Provider } from "react-redux";
import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.min.css";
import "../public/css/responsive.css";
import "../public/css/style.css";
import store from "../store/store"
import Link from "next/link";
import Home from ".";
import Products  from "./Components/Products/products";
import { useState } from "react";
import Store from "../store/store";

function MyApp({ Component, pageProps }) {
  
  
  

  return (
    <>
    
       
  
        <Provider store={store}>
        <Component {...pageProps} />
        </Provider>
    </>
  );
}



//withRedux wrapper that passes the store to the App Component
export default MyApp;