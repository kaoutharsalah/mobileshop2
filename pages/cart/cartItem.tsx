
import { useSelector } from 'react-redux';
import classes from './cart.module.css';

function CatItem(){
   // let cartItems = useSelector((state) =>  state.cartReducer.items);
    //const existingItem = cartItems.find((item) => item.id === id );
   const  AddToCartHandler=()=>{

   }
return(<div>
     <tr className="cart_item">
                                            <td className={classes.product_remove}>
                                                <a title="Remove this item" className="remove" href="#">×</a> 
                                            </td>

                                            <td className={classes.product_thumbnail}>
                                                <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src="/img/product-thumb-2.jpg"/></a>
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
                                                    <input type="button" className={classes.plus} onClick={AddToCartHandler} value="+"/>
                                                </div>
                                            </td>

                                            <td className={classes.product_subtotal}>
                                                <span className={classes.amount}>15.00 €</span> 
                                            </td>
                                        </tr>
       
</div>)
}
export default CatItem;