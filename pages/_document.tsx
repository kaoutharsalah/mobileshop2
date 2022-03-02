import Document,{Html, Head, Main, NextScript} from "next/document";

export default class CustomDocument extends Document{
render(){
    return <Html>
        <Head>

        </Head>

        <body>
            <Main></Main>
        </body>
        <NextScript><meta charSet="utf-8" />
        
      <script src="https://code.jquery.com/jquery.min.js"></script>

      <script src="js/bootstrap.min.js" > </script></NextScript>
       
    </Html>
}
}