
import DemoCarousel from "./Components/DempCarousel/demoCarousel";
import Layout from "./Components/Layout/layout";
import Marque from "./Components/Marque/marque";
import RecentlyViewed from "./Components/RecentlyViewed/RecentlyViewed";
import TopNew from "./Components/TopNew/topnew";
import TopSaller from "./Components/TopSeller/topseller";
import classes from "./Components/RecentlyViewed/recentlyviewed.module.css";
import Navbar from "./Components/Navbar/navbar";
import Link from "next/link";
import cart from "./Components/Cart/cart";
import { Provider } from "react-redux";
import Store from "../store/store";
import Products from "./Components/Products/products";
import { route } from "next/dist/server/router";
import Router from "next/router";
export default function Home(){
    return( 
      
        <div>
        <Provider store={Store}>
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
        </Provider>
      </div>
    );
}

