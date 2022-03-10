
import DemoCarousel from "../components/DemoCarousel/demoCarousel";
import Layout from "../components/Layout/layout";
import Marque from "../components/Marque/marque";
import RecentlyViewed from "../components/RecentlyViewed/RecentlyViewed";
import TopNew from "../components/TopNew/topnew";
import TopSaller from "../components/TopSeller/topseller";
import classes from "../components/RecentlyViewed/recentlyviewed.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {ActionType} from "../store/action/actionType";

export default function Home(){
  /*const dispatch = useDispatch();
  
  useEffect(() => {
    axios.get("http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff").then((response) => {
      dispatch({
        type: ActionType.GETCART,
        payload: response.data,
      });
    });
  }, []);*/
    return( 
      
        <div>
  
        <Layout>


        <main>
        <DemoCarousel></DemoCarousel>
        <Marque></Marque>
        <div className={classes.product_widget_area}>
        <div className={classes.zigzag_bottom}></div>
        <div className={classes.container}>
        <div className="row">
       <TopSaller/> 
       
        <RecentlyViewed/>
         <TopNew/> 
       </div>
        </div>
      </div>
    
    
      
        </main>
        </Layout>

      </div>
    );
}

