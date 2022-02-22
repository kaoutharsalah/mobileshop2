function Checkout() {
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
                        <div>
                            <div className="product-big-title-area">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="product-bit-title text-center">
                                                <h2>Checkout</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-product-area">
                                <div className="zigzag-bottom" />
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="product-content-right">
                                                <div className="woocommerce">
                                                    <form
                                                        encType="multipart/form-data"
                                                        action="#"
                                                        className="checkout"
                                                        method="post"
                                                        name="checkout"
                                                    >
                                                        <div id="customer_details" className="col2-set">
                                                            <div className="col-6">
                                                                <div className="woocommerce-billing-fields">
                                                                    <h3>Billing Details</h3>
                                                                    <p
                                                                        id="billing_country_field"
                                                                        className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                                                    >
                                                                        <label className="" htmlFor="billing_country">
                                                                            Civility{" "}
                                                                            <abbr title="required" className="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <select
                                                                            className="country_to_state country_select"
                                                                            id="shipping_country"
                                                                            name="shipping_country"
                                                                        >
                                                                            <option value="AX">Mr</option>
                                                                            <option value="AF">Mlle</option>
                                                                            <option value="AF">Mme</option>
                                                                        </select>
                                                                    </p>
                                                                    <p
                                                                        id="billing_first_name_field"
                                                                        className="form-row form-row-first validate-required"
                                                                    >
                                                                        <label className="" htmlFor="billing_first_name">
                                                                            First Name{" "}
                                                                            <abbr title="required" className="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder=""
                                                                            id="billing_first_name"
                                                                            name="billing_first_name"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <p
                                                                        id="billing_last_name_field"
                                                                        className="form-row form-row-last validate-required"
                                                                    >
                                                                        <label className="" htmlFor="billing_last_name">
                                                                            Last Name{" "}
                                                                            <abbr title="required" className="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder=""
                                                                            id="billing_last_name"
                                                                            name="billing_last_name"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <div className="clear" />
                                                                    <p
                                                                        id="billing_company_field"
                                                                        className="form-row form-row-wide"
                                                                    >
                                                                        <label className="" htmlFor="billing_company">
                                                                            Company Name
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder=""
                                                                            id="billing_company"
                                                                            name="billing_company"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <p
                                                                        id="billing_address_1_field"
                                                                        className="form-row form-row-wide address-field validate-required"
                                                                    >
                                                                        <label className="" htmlFor="billing_address_1">
                                                                            Address{" "}
                                                                            <abbr title="required" className="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder="Street address"
                                                                            id="billing_address_1"
                                                                            name="billing_address_1"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <p
                                                                        id="billing_address_2_field"
                                                                        className="form-row form-row-wide address-field"
                                                                    >
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder="Apartment, suite, unit etc. (optional)"
                                                                            id="billing_address_2"
                                                                            name="billing_address_2"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <p
                                                                        id="billing_city_field"
                                                                        className="form-row form-row-wide address-field validate-required"
                                                                        data-o_class="form-row form-row-wide address-field validate-required"
                                                                    >
                                                                        <label className="" htmlFor="billing_city">
                                                                            Town / City{" "}
                                                                            <abbr title="required" className="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder="Town / City"
                                                                            id="billing_city"
                                                                            name="billing_city"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <p
                                                                        id="billing_state_field"
                                                                        className="form-row form-row-first address-field validate-state"
                                                                        data-o_class="form-row form-row-first address-field validate-state"
                                                                    >
                                                                        <label className="" htmlFor="billing_state">
                                                                            County
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            id="billing_state"
                                                                            name="billing_state"
                                                                            placeholder="State / County"
                                                                            defaultValue=""
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <p
                                                                        id="billing_postcode_field"
                                                                        className="form-row form-row-last address-field validate-required validate-postcode"
                                                                        data-o_class="form-row form-row-last address-field validate-required validate-postcode"
                                                                    >
                                                                        <label className="" htmlFor="billing_postcode">
                                                                            Postcode{" "}
                                                                            <abbr title="required" className="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder="Postcode / Zip"
                                                                            id="billing_postcode"
                                                                            name="billing_postcode"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <div className="clear" />
                                                                    <p
                                                                        id="billing_email_field"
                                                                        className="form-row form-row-first validate-required validate-email"
                                                                    >
                                                                        <label className="" htmlFor="billing_email">
                                                                            Email Address{" "}
                                                                            <abbr title="required" className="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder=""
                                                                            id="billing_email"
                                                                            name="billing_email"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <p
                                                                        id="billing_phone_field"
                                                                        className="form-row form-row-last validate-required validate-phone"
                                                                    >
                                                                        <label className="" htmlFor="billing_phone">
                                                                            Phone{" "}
                                                                            <abbr title="required" className="required">
                                                                                *
                                                                            </abbr>
                                                                        </label>
                                                                        <input
                                                                            type="text"
                                                                            defaultValue=""
                                                                            placeholder=""
                                                                            id="billing_phone"
                                                                            name="billing_phone"
                                                                            className="input-text "
                                                                        />
                                                                    </p>
                                                                    <div className="clear" />
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="woocommerce-shipping-fields">
                                                                    <h3 id="ship-to-different-address">
                                                                        <label
                                                                            className="checkbox"
                                                                            htmlFor="ship-to-different-address-checkbox"
                                                                        >
                                                                            Ship to a different address?
                                                                        </label>
                                                                        <input
                                                                            type="checkbox"
                                                                            defaultValue={1}
                                                                            name="ship_to_different_address"
                                                                            defaultChecked="checked"
                                                                            className="input-checkbox"
                                                                            id="ship-to-different-address-checkbox"
                                                                        />
                                                                    </h3>
                                                                    <div
                                                                        className="shipping_address"
                                                                        style={{ display: "block" }}
                                                                    >
                                                                        <p
                                                                            id="shipping_country_field"
                                                                            className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
                                                                        >
                                                                            <label className="" htmlFor="shipping_country">
                                                                                Civility{" "}
                                                                                <abbr title="required" className="required">
                                                                                    *
                                                                                </abbr>
                                                                            </label>
                                                                            <select
                                                                                className="country_to_state country_select"
                                                                                id="shipping_country"
                                                                                name="shipping_country"
                                                                            >
                                                                                <option value="AX">Mr</option>
                                                                                <option value="AF">Mlle</option>
                                                                                <option value="AF">Mme</option>
                                                                            </select>
                                                                        </p>
                                                                        <p
                                                                            id="shipping_first_name_field"
                                                                            className="form-row form-row-first validate-required"
                                                                        >
                                                                            <label
                                                                                className=""
                                                                                htmlFor="shipping_first_name"
                                                                            >
                                                                                First Name{" "}
                                                                                <abbr title="required" className="required">
                                                                                    *
                                                                                </abbr>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                placeholder=""
                                                                                id="shipping_first_name"
                                                                                name="shipping_first_name"
                                                                                className="input-text "
                                                                            />
                                                                        </p>
                                                                        <p
                                                                            id="shipping_last_name_field"
                                                                            className="form-row form-row-last validate-required"
                                                                        >
                                                                            <label
                                                                                className=""
                                                                                htmlFor="shipping_last_name"
                                                                            >
                                                                                Last Name{" "}
                                                                                <abbr title="required" className="required">
                                                                                    *
                                                                                </abbr>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                placeholder=""
                                                                                id="shipping_last_name"
                                                                                name="shipping_last_name"
                                                                                className="input-text "
                                                                            />
                                                                        </p>
                                                                        <div className="clear" />
                                                                        <p
                                                                            id="shipping_company_field"
                                                                            className="form-row form-row-wide"
                                                                        >
                                                                            <label className="" htmlFor="shipping_company">
                                                                                Company Name
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                placeholder=""
                                                                                id="shipping_company"
                                                                                name="shipping_company"
                                                                                className="input-text "
                                                                            />
                                                                        </p>
                                                                        <p
                                                                            id="shipping_address_1_field"
                                                                            className="form-row form-row-wide address-field validate-required"
                                                                        >
                                                                            <label
                                                                                className=""
                                                                                htmlFor="shipping_address_1"
                                                                            >
                                                                                Address{" "}
                                                                                <abbr title="required" className="required">
                                                                                    *
                                                                                </abbr>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                placeholder="Street address"
                                                                                id="shipping_address_1"
                                                                                name="shipping_address_1"
                                                                                className="input-text "
                                                                            />
                                                                        </p>
                                                                        <p
                                                                            id="shipping_address_2_field"
                                                                            className="form-row form-row-wide address-field"
                                                                        >
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                placeholder="Apartment, suite, unit etc. (optional)"
                                                                                id="shipping_address_2"
                                                                                name="shipping_address_2"
                                                                                className="input-text "
                                                                            />
                                                                        </p>
                                                                        <p
                                                                            id="shipping_city_field"
                                                                            className="form-row form-row-wide address-field validate-required"
                                                                            data-o_class="form-row form-row-wide address-field validate-required"
                                                                        >
                                                                            <label className="" htmlFor="shipping_city">
                                                                                Town / City{" "}
                                                                                <abbr title="required" className="required">
                                                                                    *
                                                                                </abbr>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                placeholder="Town / City"
                                                                                id="shipping_city"
                                                                                name="shipping_city"
                                                                                className="input-text "
                                                                            />
                                                                        </p>
                                                                        <p
                                                                            id="shipping_state_field"
                                                                            className="form-row form-row-first address-field validate-state"
                                                                            data-o_class="form-row form-row-first address-field validate-state"
                                                                        >
                                                                            <label className="" htmlFor="shipping_state">
                                                                                County
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                id="shipping_state"
                                                                                name="shipping_state"
                                                                                placeholder="State / County"
                                                                                defaultValue=""
                                                                                className="input-text "
                                                                            />
                                                                        </p>
                                                                        <p
                                                                            id="shipping_postcode_field"
                                                                            className="form-row form-row-last address-field validate-required validate-postcode"
                                                                            data-o_class="form-row form-row-last address-field validate-required validate-postcode"
                                                                        >
                                                                            <label className="" htmlFor="shipping_postcode">
                                                                                Postcode{" "}
                                                                                <abbr title="required" className="required">
                                                                                    *
                                                                                </abbr>
                                                                            </label>
                                                                            <input
                                                                                type="text"
                                                                                defaultValue=""
                                                                                placeholder="Postcode / Zip"
                                                                                id="shipping_postcode"
                                                                                name="shipping_postcode"
                                                                                className="input-text "
                                                                            />
                                                                        </p>
                                                                        <div className="clear" />
                                                                    </div>
                                                                    <p
                                                                        id="order_comments_field"
                                                                        className="form-row notes"
                                                                    >
                                                                        <label className="" htmlFor="order_comments">
                                                                            Order Notes
                                                                        </label>
                                                                        <textarea
                                                                            cols={5}
                                                                            rows={2}
                                                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                                                            id="order_comments"
                                                                            className="input-text "
                                                                            name="order_comments"
                                                                            defaultValue={""}
                                                                        />
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h3 id="order_review_heading">Your order</h3>
                                                        <div id="order_review" style={{ position: "relative" }}>
                                                            <table className="shop_table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="product-name">Product</th>
                                                                        <th className="product-total">Total</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="cart_item">
                                                                        <td className="product-name">
                                                                            Ship Your Idea{" "}
                                                                            <strong className="product-quantity">
                                                                                × 1
                                                                            </strong>{" "}
                                                                        </td>
                                                                        <td className="product-total">
                                                                            <span className="amount">£15.00</span>{" "}
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr className="cart-subtotal">
                                                                        <th>Cart Subtotal</th>
                                                                        <td>
                                                                            <span className="amount">£15.00</span>
                                                                        </td>
                                                                    </tr>
                                                                    <tr className="shipping">
                                                                        <th>Taxe (20%)</th>
                                                                        <td>12.12 €</td>
                                                                    </tr>
                                                                    <tr className="order-total">
                                                                        <th>Order Total</th>
                                                                        <td>
                                                                            <strong>
                                                                                <span className="amount">15.00 € </span>
                                                                            </strong>{" "}
                                                                        </td>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                            <div id="payment">
                                                                <ul className="payment_methods methods">
                                                                    <li className="payment_method_bacs">
                                                                        <input
                                                                            type="radio"
                                                                            data-order_button_text=""
                                                                            defaultChecked="checked"
                                                                            defaultValue="bacs"
                                                                            name="payment_method"
                                                                            className="input-radio"
                                                                            id="payment_method_bacs"
                                                                        />
                                                                        <label htmlFor="payment_method_bacs">
                                                                            Direct Bank Transfer{" "}
                                                                        </label>
                                                                        <div className="payment_box payment_method_bacs">
                                                                            <p>
                                                                                Make your payment directly into our bank
                                                                                account. Please use your Order ID as the
                                                                                payment reference. Your order won’t be shipped
                                                                                until the funds have cleared in our account.
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="payment_method_cheque">
                                                                        <input
                                                                            type="radio"
                                                                            data-order_button_text=""
                                                                            defaultValue="cheque"
                                                                            name="payment_method"
                                                                            className="input-radio"
                                                                            id="payment_method_cheque"
                                                                        />
                                                                        <label htmlFor="payment_method_cheque">
                                                                            Cheque Payment{" "}
                                                                        </label>
                                                                        <div
                                                                            style={{ display: "none" }}
                                                                            className="payment_box payment_method_cheque"
                                                                        >
                                                                            <p>
                                                                                Please send your cheque to Store Name, Store
                                                                                Street, Store Town, Store State / County,
                                                                                Store Postcode.
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="payment_method_paypal">
                                                                        <input
                                                                            type="radio"
                                                                            data-order_button_text="Proceed to PayPal"
                                                                            defaultValue="paypal"
                                                                            name="payment_method"
                                                                            className="input-radio"
                                                                            id="payment_method_paypal"
                                                                        />
                                                                        <label htmlFor="payment_method_paypal">
                                                                            PayPal{" "}
                                                                            <img
                                                                                alt="PayPal Acceptance Mark"
                                                                                src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
                                                                            />
                                                                            <a
                                                                                title="What is PayPal?"
                                                                                onClick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
                                                                                className="about_paypal"
                                                                                href="https://www.paypal.com/gb/webapps/mpp/paypal-popup"
                                                                            >
                                                                                What is PayPal?
                                                                            </a>
                                                                        </label>
                                                                        <div
                                                                            style={{ display: "none" }}
                                                                            className="payment_box payment_method_paypal"
                                                                        >
                                                                            <p>
                                                                                Pay via PayPal; you can pay with your credit
                                                                                card if you don’t have a PayPal account.
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                                <div className="form-row place-order">
                                                                    <input
                                                                        type="button"
                                                                        data-value="Place order"
                                                                        defaultValue="Place order"
                                                                        id="place_order"
                                                                        name="woocommerce_checkout_place_order"
                                                                        className="button alt"
                                                                    />
                                                                </div>
                                                                <div className="clear" />
                                                            </div>
                                                        </div>
                                                    </form>
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
export default Checkout;
