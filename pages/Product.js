import Link from 'next/link';

function Product() {
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
                                        <Link href="/">
                                            <a>
                                            <img src="img/logo.png" /></a>
                                
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
                                    <li className="active">
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/Shop">Samsung</Link>
                                    </li>
                                    <li>
                                        <Link href="/Shop">Apple</Link>
                                    </li>
                                    <li>
                                        <Link href="/Shop">LG</Link>
                                    </li>
                                    <li>
                                        <Link href="/Shop">Sony</Link>
                                    </li>
                                    <li>
                                        <Link href="/Shop">Huawei</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="single-product-area">
                        <div className="zigzag-bottom" />
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="single-sidebar">
                                        <h2 className="sidebar-title">Recently Viewed</h2>
                                        <div className="thubmnail-recent">
                                            <img
                                                src="img/product-thumb-1.jpg"
                                                className="recent-thumb"
                                                alt=""
                                            />
                                            <h2>
                                                <a href="">Sony Smart TV - 2015</a>
                                            </h2>
                                            <div className="product-sidebar-price">
                                                <ins>700.00 € </ins> <del>100.00 €</del>
                                            </div>
                                        </div>
                                        <div className="thubmnail-recent">
                                            <img
                                                src="img/product-thumb-1.jpg"
                                                className="recent-thumb"
                                                alt=""
                                            />
                                            <h2>
                                                <a href="">Sony Smart TV - 2015</a>
                                            </h2>
                                            <div className="product-sidebar-price">
                                                <ins>$700.00</ins> <del>$100.00</del>
                                            </div>
                                        </div>
                                        <div className="thubmnail-recent">
                                            <img
                                                src="img/product-thumb-1.jpg"
                                                className="recent-thumb"
                                                alt=""
                                            />
                                            <h2>
                                                <a href="">Sony Smart TV - 2015</a>
                                            </h2>
                                            <div className="product-sidebar-price">
                                                <ins>$700.00</ins> <del>$100.00</del>
                                            </div>
                                        </div>
                                        <div className="thubmnail-recent">
                                            <img
                                                src="img/product-thumb-1.jpg"
                                                className="recent-thumb"
                                                alt=""
                                            />
                                            <h2>
                                                <a href="">Sony Smart TV - 2015</a>
                                            </h2>
                                            <div className="product-sidebar-price">
                                                <ins>$700.00</ins> <del>$100.00</del>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-sidebar">
                                        <h2 className="sidebar-title">Others brands</h2>
                                        <ul>
                                            <li>
                                                <Link href="">Sony</Link>
                                            </li>
                                            <li>
                                                <Link href="">Samsung</Link>
                                            </li>
                                            <li>
                                                <Link href="">LG</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="product-content-right">
                                        <div className="product-breadcroumb">
                                            <a href="">Home</a>
                                            <a href="">Category Name</a>
                                            <a href="">Sony Smart TV - 2015</a>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="product-images">
                                                    <div className="product-main-img">
                                                        <img src="img/product-2.jpg" alt="" />
                                                    </div>
                                                    <div className="product-gallery">
                                                        <img src="img/product-thumb-1.jpg" alt="" />
                                                        <img src="img/product-thumb-2.jpg" alt="" />
                                                        <img src="img/product-thumb-3.jpg" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="product-inner">
                                                    <h2 className="product-name">Sony Smart TV - 2015</h2>
                                                    <div className="product-inner-price">
                                                        <ins>$700.00</ins> <del>$100.00</del>
                                                    </div>
                                                    <form action="" className="cart">
                                                        <div className="quantity">
                                                            <input
                                                                type="number"
                                                                size={4}
                                                                className="input-text qty text"
                                                                title="Qty"
                                                                defaultValue={1}
                                                                name="quantity"
                                                                min={1}
                                                                step={1}
                                                            />
                                                        </div>
                                                        <button className="add_to_cart_button" type="submit">
                                                            Add to cart
                                                        </button>
                                                    </form>
                                                    <div className="product-inner-category">
                                                        <h2>Product Description</h2>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit. Nam tristique, diam in consequat iaculis, est
                                                            purus iaculis mauris, imperdiet facilisis ante ligula
                                                            at nulla. Quisque volutpat nulla risus, id maximus ex
                                                            aliquet ut. Suspendisse potenti. Nulla varius lectus
                                                            id turpis dignissim porta. Quisque magna arcu, blandit
                                                            quis felis vehicula, feugiat gravida diam. Nullam nec
                                                            turpis ligula. Aliquam quis blandit elit, ac sodales
                                                            nisl. Aliquam eget dolor eget elit malesuada aliquet.
                                                            In varius lorem lorem, semper bibendum lectus lobortis
                                                            ac.
                                                        </p>
                                                    </div>
                                                </div>
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
                                            Sign up to our newsletter and get exclusive deals you wont
                                            find anywhere else straight to your inbox!
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
            </div>

            <script src="https://code.jquery.com/jquery.min.js"></script>

            <script src="js/bootstrap.min.js" > </script>
        </>

        </div>
    );
}
export default Product;