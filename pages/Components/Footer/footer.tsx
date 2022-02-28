import React from "react";
import Link from "next/link";
import classes from "./footer.module.css";
export default function Footer() {
  return (
    <div className={classes.footer_top_area}>
      <div className={classes.zigzag_bottom}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className={classes.footer_about_us}>
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
            <div className={classes.footer_menu}>
              <h2 className={classes.footer_wid_title}>Categories </h2>
              <ul>
                <li>
                  <Link href="#">LG</Link>
                </li>
                <li>
                  <Link href="#">Samsung</Link>
                </li>
                <li>
                  <Link href="#">Sony</Link>
                </li>
                <li>
                  <Link href="#">Apple</Link>
                </li>
                <li>
                  <Link href="#">Huawei</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className={classes.footer_newsletter}>
              <h2 className={classes.footer_wid_title}>Newsletter</h2>
              <p>
                Sign up to our newsletter and get exclusive deals you wont find
                anywhere else straight to your inbox!
              </p>
              <div className={classes.newsletter_form}>
                <form>
                  <input type="email" placeholder="Type your email" />

                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}