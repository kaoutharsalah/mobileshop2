
import { Provider } from "react-redux";
import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.min.css";
import "../public/css/responsive.css";
import "../public/css/style.css";
import store from "../store/store"
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {ActionType} from "../store/action/actionType";

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