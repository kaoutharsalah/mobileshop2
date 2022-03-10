
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
  
  /*const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff").then((response) => {
      dispatch({
        type: ActionType.GETCART,
        payload: response.data,
      });
    });
  }, []);*/
  

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