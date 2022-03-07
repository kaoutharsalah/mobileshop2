import React from "react";
import classes from "./header.module.css";
import Link from "next/link";
import CartButton from '../../pages/cart/cartButton';

export default function Header() {
  return (
    <div className="site-branding-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className={classes.logo} style={{ width: 100, height: 100 }}>
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
              className={classes.text}
              style={{ marginTop: 30 }}
              placeholder="Search products..."
            />
            <input
              type="button"
              className={classes.button}
              defaultValue="Search"
            />
          </div>
          <CartButton/>
        </div>
    
      </div>
    </div>
  );
}