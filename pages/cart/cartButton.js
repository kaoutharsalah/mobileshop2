import Link from 'next/link';

import classes from './cartButton.module.css';
import { connect, useDispatch } from "react-redux";
import { useSelector} from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import {getCart} from "../../store/action/cartAction";
import {ActionType} from "../../store/action/actionType";

export default function cartButton() {
    /*const dispatch = useDispatch();
  
    useEffect(() => {
      axios.get("http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff").then((response) => {
        dispatch({
          type: ActionType.GETCART,
          payload: response,
        });
      });
    }, []);*/
 /* const dispatch = useDispatch();
    const  [Amount ,Setamount] = useState();
    const  [Quantity ,Setquantity] = useState();
    const etat = useSelector((state)=>state.Cart.cartstate);
    useEffect(() => {
        axios.get('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff')
        .then((response)=>{ 
            console.log(response);
            //dispatch(dispatch(getCart(response)));
            dispatch({
                type : ActionType.GETCART,
                payload : response
                
            })
            Setamount(response.data.total);
            
            Setquantity(response.data.totalquantity);}); 

}, [etat])*/
    //const cartstate = useSelector((state)=>state.Cart.cartstate);
    const cartQuantity = useSelector((state)=>state.Cart.totalQuantity);
    
    //console.log({cartQuantity});
    const cartAmount = useSelector((state)=> state.Cart.totalAmount.toPrecision(4));
    //console.log({cartAmount});
    return (
        <div className="col-sm-4">
            <Link href='/cart/cart'>
                <button className={classes.item}>

                    Cart :
                    <span className={classes.cart_amunt}> {cartAmount}€ </span>
                    <i className="fa fa-shopping-cart"> </i>
                    <span className={classes.product_count}> {cartQuantity} </span>

                </button>
            </Link>

        </div>
    );
}