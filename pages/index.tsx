
import DemoCarousel from "./Components/DempCarousel/demoCarousel";
import Layout from "./Components/Layout/layout";
import Marque from "./Components/Marque/marque";
import RecentlyViewed from "./Components/RecentlyViewed/RecentlyViewed";
import TopNew from "./Components/TopNew/topnew";
import TopSaller from "./Components/TopSeller/topseller";
import classes from "./Components/RecentlyViewed/recentlyviewed.module.css";

export default function Home(){
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

