import React from "react";
import classes from "./header.module.css";
import Link from "next/link";
import CartButton from '../../pages/cart/cartButton';
import { connect, useDispatch } from "react-redux";
import { useSelector} from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {getCart} from "../../store/action/cartAction";
import {ActionType} from "../../store/action/actionType";

export default function Header() {
 /* const dispatch = useDispatch();
  
    useEffect(() => {
      axios.get("http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff").then((response) => {
        dispatch({
          type: ActionType.GETCART,
          payload: response,
        });
      });
    }, []);*/
  return (
    <div className="site-branding-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className={classes.logo} style={{ width: 100, height: 100 }}>
              <h1>
                <Link href="/index">
                  <img src="/img/logo.png" />
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