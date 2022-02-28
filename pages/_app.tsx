
import "../public/css/bootstrap.min.css";
import "../public/css/font-awesome.min.css";
import "../public/css/responsive.css";
import "../public/css/style.css";

//import "css/bootstrap.min.css";
//import "font-awesome.min.css";


// _app.tsx
function MyApp({ Component, pageProps }) {
  return (
    <>

        <Component {...pageProps} />
     
    </>
  );
}
export default MyApp;