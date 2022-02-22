
import Link from 'next/link'

function handleOnSubmitSearch(p){
  p.preventDefault();
  const{currentTarget={}}=p;
  const fileds =A
}

function Home({ categories }) {



 

  return (
  
    <>
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
                      <img src="img/logo.png" />
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
                <input type="button" defaultValue="Search" onSubmit={handleOnSubmitSearch} />
              </div>
              <div className="col-sm-4">
                <div className="shopping-item">
                  <Link href="/Cart">
                    <a> Cart : <span className="cart-amunt">100.58 €</span>{" "}
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
                  
                  <ul className="nav navbar-nav navbar-expand">
                 
      {categories.map((categorie) => (
        <li key={categorie.name} className="active">
          <Link href={`http://localhost:3000/products?q=${categorie.name}`}>{categorie.name}</Link>
        </li>
      ))}
    </ul>
 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-area">
          <div className="block-slider block-slider4">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src="img/h4-slide.png"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="img/h4-slide2.png"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src="img/h4-slide3.png"
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className="promo-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="single-promo promo1">
                  <i className="fa fa-refresh" />
                  <p>30 Days return</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo promo2">
                  <i className="fa fa-truck" />
                  <p>Free shipping</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo promo3">
                  <i className="fa fa-lock" />
                  <p>Secure payments</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="single-promo promo4">
                  <i className="fa fa-gift" />
                  <p>New products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End promo area */}
        <div className="brands-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="brand-wrapper">
                  <div className="brand-list">
                    <img src="img/brand1.png" alt="" />
                    <img src="img/brand2.png" alt="" />
                    <img src="img/brand3.png" alt="" />
                    <img src="img/brand4.png" alt="" />
                    <img src="img/brand5.png" alt="" />
                    <img src="img/brand6.png" alt="" />
                    <img src="img/brand1.png" alt="" />
                    <img src="img/brand2.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-widget-area">
          <div className="zigzag-bottom" />
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="single-product-widget">
                  <h2 className="product-wid-title">Top Sellers</h2>
                  <a href="" className="wid-view-more">
                    View All
                  </a>
                
                  <div className="single-wid-product">
    
                 
               
                    <Link href="/Product">
                      <img
                        src="img/product-thumb-1.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </Link>
                    <h2>
                      <Link href="/Product">Sony Smart TV - 2015</Link>
                    </h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                  <div className="single-wid-product">
                    <Link href="/Product">
                      <img
                        src="img/product-thumb-2.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-product-widget">
                  <h2 className="product-wid-title">Recently Viewed</h2>
                  <a href="#" className="wid-view-more">
                    View All
                  </a>
                  <div className="single-wid-product">
                    <Link href="/Product">
                      <img
                        src="img/product-thumb-4.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </Link>
                    <h2>
                      <Link href="/Product">Sony playstation microsoft</Link>
                    </h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                  <div className="single-wid-product">
                    <Link href="/Product">
                      <img
                        src="img/product-thumb-1.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </Link>
                    <h2>
                      <Link href="/Product">Sony Smart Air Condtion</Link>
                    </h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                  <div className="single-wid-product">
                    <Link href="/Product">
                      <img
                        src="img/product-thumb-2.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </Link>
                    <h2>
                      <Link href="/Product">Samsung gallaxy note 4</Link>
                    </h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-product-widget">
                  <h2 className="product-wid-title">Top New</h2>
                  <Link href="#" className="wid-view-more">
                    View All
                  </Link>
                  <div className="single-wid-product">
                    <Link href="/Product">
                      <img
                        src="img/product-thumb-3.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </Link>
                    <h2>
                      <Link href="/Product">Apple new i phone 6</Link>
                    </h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                  <div className="single-wid-product">
                    <Link href="/Product">
                      <img
                        src="img/product-thumb-4.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </Link>
                    <h2>
                      <Link href="/Product">Samsung gallaxy note 4</Link>
                    </h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
                  <div className="single-wid-product">
                    <Link href="/Product">
                      <img
                        src="img/product-thumb-1.jpg"
                        alt=""
                        className="product-thumb"
                      />
                    </Link>
                    <h2>
                      <Link href="/Product">Sony playstation microsoft</Link>
                    </h2>
                    <div className="product-wid-rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="product-wid-price">
                      <ins>$400.00</ins>
                      <del>$425.00</del>
                    </div>
                  </div>
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
                  {categories.map((categorie) => (
        <li key={categorie.name} className="active">
          <Link href="/Shop">{categorie.name}</Link>
        </li>
      ))}
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


  )
}
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/categories')
  const categories = await res.json()
  console.log('cat',categories)
  
  

  return {
    props: {
      categories,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}


export default Home;
