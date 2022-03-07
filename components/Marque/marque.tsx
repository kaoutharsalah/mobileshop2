import React from "react";

import classes from "./Marque.module.css";



export default function Marque() {
  return (
    <div>
      <div className={classes.promo_area}>
        <div className={classes.zigzag_bottom}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo1">
                <i className="fa fa-refresh"></i>
                <p>30 Days return</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo2">
                <i className="fa fa-truck"></i>
                <p>Free shipping</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo3">
                <i className="fa fa-lock"></i>
                <p>Secure payments</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="single-promo promo4">
                <i className="fa fa-gift"></i>
                <p>New products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.brands_area}>
        <div className={classes.zigzag_bottom}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={classes.brand_wrapper}>
                <div className={classes.brand_list}>
                  <img src="img/brand1.png" alt="" />
                  <img src="img/brand2.png" alt="" />
                  <img src="img/brand3.png" alt="" />
                  <img src="img/brand4.png" alt="" />
                  <img src="img/brand5.png" alt="" />
                  <img src="img/brand6.png" alt="" />
                  <img src="img/brand1.png" alt="" />
                  <img src="img/brand2.png"alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

