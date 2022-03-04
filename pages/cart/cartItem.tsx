import React from 'react';

import classes from './cartItem.module.css';


export default function cartItem(){
    return (
      <div>
       <table cellSpacing={0}  className={classes.shop_table}>
             <thead>
                 <tr>
                    <th className={classes.product_remove}>&nbsp;</th>
                                            <th className={classes.product_thumbnail}>&nbsp;</th>
                                            <th className={classes.product_name}>Product</th>
                                            <th className={classes.product_price}>Price</th>
                                            <th className={classes.product_quantity}>Quantity</th>
                                            <th className={classes.product_subtotal}>Total</th>
                     </tr>
              </thead>
                                    <tbody>
                                        <tr className="cart_item">
                                            <td className={classes.product_remove}>
                                                <a title="Remove this item" className="remove" href="#">×</a> 
                                            </td>

                                            <td className={classes.product_thumbnail}>
                                                <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src="img/product-thumb-2.jpg"/></a>
                                            </td>

                                            <td className={classes.product_name}>
                                                <a href="single-product.html">Ship Your Idea</a> 
                                            </td>

                                            <td className={classes.product_price}>
                                                <span className="amount">15.00€</span> 
                                            </td>

                                            <td className={classes.product_quantity}>
                                                <div className={classes.quantity }>
                                                    <input type="button" className={classes.minus} value="-"/>
                                                    <input type="number"  size={4} className="input-text qty text" title="Qty" value="1" min="0" step="1"/>
                                                    <input type="button" className={classes.plus} value="+"/>
                                                </div>
                                            </td>

                                            <td className={classes.product_subtotal}>
                                                <span className={classes.amount}>15.00 €</span> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={classes.actions} >
                                          

                                               <input id="id_input" type="button" value="Checkout" name="proceed" className="checkout-button button alt wc-forward"/>
                                              
                                            </td>
                                        </tr>
                                    </tbody>
        </table>
     
        </div>
    )
}
