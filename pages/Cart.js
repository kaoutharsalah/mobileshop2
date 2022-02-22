import { useRouter } from 'next/router';
function Cart() {
    const router = useRouter();
    console.log(router.query);
    function loadcheckout() {
        router.push('/Checkout');
    }
    
    return (
        <div>
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
                                <div className="col-sm-6">
                                    <div className="logo" style={{ width: 100, height: 100 }}>
                                        <h1>
                                            <a href="index.html">
                                                <img src="img/logo.png" />
                                            </a>
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="shopping-item">
                                        <a href="cart.html">
                                            Cart : <span className="cart-amunt">100.58 €</span>{" "}
                                            <i className="fa fa-shopping-cart" />{" "}
                                            <span className="product-count">5</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="single-product-area">
                            <div className="zigzag-bottom" />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="product-content-right">
                                            <div className="woocommerce">
                                                <table cellSpacing={0} className="shop_table cart">
                                                    <thead>
                                                        <tr>
                                                            <th className="product-remove">&nbsp;</th>
                                                            <th className="product-thumbnail">&nbsp;</th>
                                                            <th className="product-name">Product</th>
                                                            <th className="product-price">Price</th>
                                                            <th className="product-quantity">Quantity</th>
                                                            <th className="product-subtotal">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="cart_item">
                                                            <td className="product-remove">
                                                                <a
                                                                    title="Remove this item"
                                                                    className="remove"
                                                                    href="#"
                                                                >
                                                                    ×
                                                                </a>
                                                            </td>
                                                            <td className="product-thumbnail">
                                                                <a href="single-product.html">
                                                                    <img
                                                                        width={145}
                                                                        height={145}
                                                                        alt="poster_1_up"
                                                                        className="shop_thumbnail"
                                                                        src="img/product-thumb-2.jpg"
                                                                    />
                                                                </a>
                                                            </td>
                                                            <td className="product-name">
                                                                <a href="single-product.html">Ship Your Idea</a>
                                                            </td>
                                                            <td className="product-price">
                                                                <span className="amount">15.00€</span>
                                                            </td>
                                                            <td className="product-quantity">
                                                                <div className="quantity buttons_added">
                                                                    <input
                                                                        type="button"
                                                                        className="minus"
                                                                        defaultValue="-"
                                                                    />
                                                                    <input
                                                                        type="number"
                                                                        size={4}
                                                                        className="input-text qty text"
                                                                        title="Qty"
                                                                        defaultValue={1}
                                                                        min={0}
                                                                        step={1}
                                                                    />
                                                                    <input
                                                                        type="button"
                                                                        className="plus"
                                                                        defaultValue="+"
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td className="product-subtotal">
                                                                <span className="amount">15.00 €</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="actions" colSpan={6}>
                                                                <input
                                                                    type="button"
                                                                    onClick={loadcheckout}
                                                                    defaultValue="Checkout"
                                                                    name="proceed"
                                                                    className="checkout-button button alt wc-forward"
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="cart-collaterals">
                                                    <div className="cross-sells">
                                                        <h2>You may be interested in...</h2>
                                                        <ul className="products">
                                                            <li className="product">
                                                                <a href="single-product.html">
                                                                    <img
                                                                        width={325}
                                                                        height={325}
                                                                        alt="T_4_front"
                                                                        className="attachment-shop_catalog wp-post-image"
                                                                        src="img/product-2.jpg"
                                                                    />
                                                                    <h3>Ship Your Idea</h3>
                                                                    <span className="price">
                                                                        <span className="amount">20.00 €</span>
                                                                    </span>
                                                                </a>
                                                                <a
                                                                    className="add_to_cart_button"
                                                                    data-quantity={1}
                                                                    data-product_sku=""
                                                                    data-product_id={22}
                                                                    rel="nofollow"
                                                                    href="single-product.html"
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </li>
                                                            <li className="product">
                                                                <a href="single-product.html">
                                                                    <img
                                                                        width={325}
                                                                        height={325}
                                                                        alt="T_4_front"
                                                                        className="attachment-shop_catalog wp-post-image"
                                                                        src="img/product-4.jpg"
                                                                    />
                                                                    <h3>Ship Your Idea</h3>
                                                                    <span className="price">
                                                                        <span className="amount">20.00 €</span>
                                                                    </span>
                                                                </a>
                                                                <a
                                                                    className="add_to_cart_button"
                                                                    data-quantity={1}
                                                                    data-product_sku=""
                                                                    data-product_id={22}
                                                                    rel="nofollow"
                                                                    href="single-product.html"
                                                                >
                                                                    Add to Cart
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="cart_totals ">
                                                        <h2>Cart Totals</h2>
                                                        <table cellSpacing={0}>
                                                            <tbody>
                                                                <tr className="cart-subtotal">
                                                                    <th>Cart Subtotal</th>
                                                                    <td>
                                                                        <span className="amount">15.00 €</span>
                                                                    </td>
                                                                </tr>
                                                                <tr className="shipping">
                                                                    <th>Taxe (20%)</th>
                                                                    <td>20.23 €</td>
                                                                </tr>
                                                                <tr className="order-total">
                                                                    <th>Order Total</th>
                                                                    <td>
                                                                        <strong>
                                                                            <span className="amount">15.00 €</span>
                                                                        </strong>{" "}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
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
            </>

            <script src="https://code.jquery.com/jquery.min.js"></script>

            <script src="js/bootstrap.min.js" > </script>

        </div>
    );
}
export default Cart;