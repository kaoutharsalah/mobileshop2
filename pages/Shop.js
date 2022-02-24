import Link from "next/link";

import {reactLocalStorage} from 'reactjs-localstorage';
/*const defaultEndpoint = 'http://localhost:3000/products';
export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint);
    const products = await res.json();
    
    return {
        props: {
            products
        }
    }
}*/
var productsFromStorage
function displayLocalStorage(){
    if(typeof localStorage !=='undefined'){
       productsFromStorage = reactLocalStorage.getObject('products')
     
    }
   
}


function Shop(props) {
    //const { results = [] } = products;
  
    
    //console.log('produits',produits);
    //console.log('here')
    //console.log(props.href.state.produits);
    return (
        <div><>
            <meta charSet="utf-8" />
            <title>My Store</title>
            {/* Bootstrap */}
            <link rel="stylesheet" href="css/bootstrap.min.css" />
            {/* Font Awesome */}
            <link rel="stylesheet" href="css/font-awesome.min.css" />
            <link rel="stylesheet" href="css/style.css" />
            <link rel="stylesheet" href="css/responsive.css" />
            <link rel="stylesheet" href="css/bootstrap.min.css" />
            <div>
                <div className="site-branding-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="logo" style={{ width: 100, height: 100 }}>
                                    <h1>
                                        <Link href="/index">
                                            <a>
                                            <img src="img/logo.png" />
                                            </a>
                                        </Link>
                                    </h1>
                                </div>
                            </div>
                        
                            <div className="col-sm-4">
                                <input
                                    type="text"
                                    style={{ marginTop: 30 }}
                                    placeholder="Search products..."
                                />
                                <input type="button" defaultValue="Search" />
                            </div>
                            <div className="col-sm-4">
                                <div className="shopping-item">
                                    <Link href="/Cart">
                                        <a>Cart : <span className="cart-amunt">100.58 €</span>{" "}
                                        <i className="fa fa-shopping-cart" />{" "}
                                        <span className="product-count">5</span></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainmenu-area">
                    <div className="container">
                        <div className="row">
                            <div className="navbar">
                                <ul className="nav navbar-nav navbar-expand">
                                    <li className="active">
                                        <Link href="/">Home</Link>
                                    </li>
                                    {displayLocalStorage()}
                                    {productsFromStorage?.map((categorie) => (
        <li key={categorie.name} className="active">
          
          <Link href="/Shop"
          onClick={() =>getCategoriesByName(categorie.name)}>{categorie.name}</Link>
          

        </li>
      ))}
                                  
                          
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="product-big-title-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product-bit-title text-center">
                                        <h2> Samsung </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-product-area">
                        <div className="zigzag-bottom" />
                        <div className="container">
    
                          
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <div className="single-shop-product">
                                    {displayLocalStorage()}
                                    { productsFromStorage?.map(product => {
                                           
                                            return (
                                                <div key={product.id}  >
                                        <div className="product-upper">
                                            <img href="http://localhost:3000/img/" alt={product.imageName} />
                                        </div>
                                        <h2>
                                            {" "}
                                            <a href="http://localhost:3000/products">{product.name} </a>
                                        </h2>
                                        <div className="product-carousel-price">
                                            <ins>${product.price}</ins> <del>${product.price-(product.discountRate/100)}</del>
                                        </div>
                                        <div className="product-option-shop">
                                            <a
                                                className="add_to_cart_button"
                                                data-quantity={1}
                                                data-product_sku=""
                                                data-product_id={70}
                                                rel="nofollow"
                                                href="/canvas/shop/?add-to-cart=70"
                                            >
                                                Add to cart
                                            </a>
                                        </div>
                                        </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                
                            
                               
                               
                                
                               
                
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-center">
                                      
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#" tabIndex={-1}>
                                                    Previous
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-top-area">
                    <div className="zigzag-bottom" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="footer-about-us">
                                    <h2>
                                        <span>MyStore</span>
                                    </h2>
                                    <p>
                                        SES Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Perferendis sunt id doloribus vero quam laborum quas alias
                                        dolores blanditiis iusto consequatur, modi aliquid eveniet
                                        eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit,
                                        debitis, quisquam. Laborum commodi veritatis magni at?
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="footer-menu">
                                    <h2 className="footer-wid-title">Categories </h2>
                                    <ul>
                                        <li>
                                            <a href="#">LG</a>
                                        </li>
                                        <li>
                                            <a href="#">Samsung</a>
                                        </li>
                                        <li>
                                            <a href="#">Sony</a>
                                        </li>
                                        <li>
                                            <a href="#">Apple</a>
                                        </li>
                                        <li>
                                            <a href="#">Huawei</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="footer-newsletter">
                                    <h2 className="footer-wid-title">Newsletter</h2>
                                    <p>
                                        Sign up to our newsletter and get exclusive deals you wont find
                                        anywhere else straight to your inbox!
                                    </p>
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <input type="email" placeholder="Type your email" />
                                            <input type="submit" defaultValue="Subscribe" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* End footer top area */}
            </div>

            <script src="https://code.jquery.com/jquery.min.js"></script>

            <script src="js/bootstrap.min.js" > </script>

        </>


        </div>
    );
}
export default Shop;