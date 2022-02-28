
import DemoCarousel from "./Components/DempCarousel/demoCarousel";
import Layout from "./Components/Layout/layout";
import Marque from "./Components/Marque/marque";
import TopNew from "./Components/TopNew/topnew";
import TopSaller from "./Components/TopSeller/topseller";


export default function Home(){
    return( 
        <div>
        <Layout>
       
        <main>
        <DemoCarousel></DemoCarousel>
        <Marque></Marque>

       <a><TopSaller/>  <TopNew/> </a>
    
    
      
        </main>
        </Layout>
      </div>
    );
}

