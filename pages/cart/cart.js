import React, { useState } from 'react';
import classes from './cart.module.css';
import CartItems from './cartItems';
import { useSelector, useDispatch } from "react-redux";

import { connect } from "react-redux";
import Layout from '../../components/Layout/layout';
import axios from 'axios';
import { Action } from '../../store/action/Action';

import { GET_CART } from '../../store/action/actionType';


const Cart = () => {

 
  const cartAmount = useSelector((state)=> state.Cart.totalAmount);
  const taxe = cartAmount*0.2;
  //console.log(taxe)
  const totale= cartAmount+taxe;
  const cartItems = useSelector((state) => state.Cart.items);
  //const cart = useSelector((state) => state.Cart);
  //console.log('cart',cart);
  return (
    <div>
      <Layout>
        <div className={classes.single_product_area}>
          <div className={classes.zigzag_bottom}></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="product-content-right">
                  <div className="woocommerce">
                   <CartItems items={cartItems}/>
                    <div className={classes.cart_collaterals}>
                      <div className={classes.cross_sells}>
                        <h2>You may be interested in...</h2>
                        <ul className={classes.products}>
                          <li className={classes.product}>
                            <a href="single-product.html">
                              <img width="225" height="225" alt="T_4_front" className="attachment-shop_catalog wp-post-image" src="/img/product-2.jpg" />
                              <h3>Ship Your Idea</h3>
                              <span className="price"><span className="amount">20.00 €</span></span>
                            </a>

                            <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="22" rel="nofollow" href="single-product.html">Add to Cart</a>
                          </li>

                          <li className={classes.product}>
                            <a href="single-product.html">
                              <img width="225" height="225" alt="T_4_front" className="attachment-shop_catalog wp-post-image" src="/img/product-4.jpg" />
                              <h3>Ship Your Idea</h3>
                              <span className="price"><span className="amount">20.00 €</span></span>
                            </a>

                            <a className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="22" rel="nofollow" href="single-product.html">Add to Cart</a>
                          </li>
                        </ul>
                      </div>


                      <div className={classes.cart_totals} >
                        <h2>Cart Totals</h2>

                        <table className={classes.shop_table}>
                          <tbody>
                            <tr className="cart-subtotal">
                              <th>Cart Subtotal</th>
                              <td><span className="amount">{cartAmount.toPrecision(4)}  €</span></td>
                            </tr>

                            <tr className={classes.shipping_calculator} >
                              <th>Taxe (20%)</th>
                              <td>{taxe.toPrecision(4)}  €</td>
                            </tr>

                            <tr className="order-total">
                              <th>Order Total</th>
                              <td><strong><span className="amount">{totale.toPrecision(4)}€</span></strong>{" "} </td>
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
      </Layout>
    </div>

  )
}

export default Cart;