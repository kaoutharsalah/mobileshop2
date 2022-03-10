import React from "react";

import classes from "./product-item.module.css";
import Link from "next/link";
import { useDispatch , useSelector } from 'react-redux';

import axios from "axios";
import {ActionType} from "../../store/action/actionType"

const  Product = (props ) => {
    

  const {id , name, imageName, price,discountRate, priceafterdiscount ,totalPrice, quantity} = props;
  
  const dispatch = useDispatch();
    const cartItems = useSelector((state) =>  state.Cart.items);
    //console.log(cartItems.price*cartItems*quantity)
    const cartQuantity = useSelector((state)=>state.Cart.totalQuantity);
    const cartAmount = useSelector((state)=> state.Cart.totalAmount);
    const existingItem = cartItems.find(item => item.id === id );
    const AddToCartHandler = ()=>{
        
        if (!existingItem){
            cartItems.push({
              id: id,
              name: name,
              imageName: imageName,
              price: priceafterdiscount,
              quantity:1,
              totalPrice: priceafterdiscount,
             
              });
        }else{
           existingItem.quantity++;
          existingItem.totalPrice = (existingItem.totalPrice + priceafterdiscount);  
         }
        
        const params = { 
            total : cartAmount+priceafterdiscount,  
            totalquantity:cartQuantity+1,       
            items :[
          ...cartItems,
         ]
        }
        const param ={
            id: id,
            name: name,
            imageName: imageName,
            price: priceafterdiscount,
            quantity: 1,
            totalPrice: priceafterdiscount,
            
        }
        axios.patch('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff', params)
        .then( res => {
                dispatch({
                    type: ActionType.ADDITEMTOCART,
                    payload: param,
                });
            })
    }
  return (
   
     
      <div className="col-md-3 col-sm-6">
        <div className={classes.single_shop_product}>
          <div className="product-upper">
            <img
              src={"/produts-img/" + imageName.split("-")[0] + "/" + imageName}
              alt={imageName}
                          />
          </div>
          <h2>
           
            <Link href={"products/" + id } >
              <a> {name}</a> 
              
             </Link>
          </h2>
          <div className={classes.product_carousel_price}>
          <ins>${priceafterdiscount.toPrecision(4)}</ins> <del> ${price}</del>
          </div>

          <div className={classes.product_option_shop}>
          <button  className={classes.add_to_cart_button} onClick={AddToCartHandler}>Add to cart</button>
          </div>
        </div>
      </div>
   
  );
}
export default Product;