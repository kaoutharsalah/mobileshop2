import React from 'react';
import CartItem from './cartItem';

import classes from './cartItem.module.css';


export default function cartItems(props) {
  const { items} = props;
  //console.log('items',items);
  return (

    <table cellSpacing={0} className={classes.shop_table}>

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

        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            imageName={item.imageName}
            quantity={item.quantity}
            totalPrice={item.totalPrice} />
        ))}
        <tr>
          <td className={classes.actions} >


            <input id="id_input" type="button" value="Checkout" name="proceed" className="checkout-button button alt wc-forward" />

          </td>
        </tr>
      </tbody>
    </table>


  )
}