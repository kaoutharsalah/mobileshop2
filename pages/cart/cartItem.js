
import { useSelector } from 'react-redux';
import classes from './cart.module.css';
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import{ ActionType} from "../../store/action/actionType";
function CatItem(props) {
   console.log({props});
    const { id, name, price, quantity, totalPrice, imageName } = props;
    const dispatch = useDispatch();
    let cartItems = useSelector((state) => state.Cart.items);
    const cartQuantity = useSelector((state) => state.Cart.totalQuantity);
    const cartAmount = useSelector((state) => state.Cart.totalAmount);
    const existingItem = cartItems.find((item) => item.id === id);
    const removeItemHandler=()=>{
      console.log( quantity)
     // if (existingItem){
          if (existingItem.quantity === 1 ){
              cartItems = cartItems.filter(item => item.id !== id);
          if (existingItem.quantity ===2 ){
            console.log('qte', quantity);
            existingItem.quantity--;
            existingItem.totalPrice = existingItem.totalPrice- existingItem.price;}
          }
         else{ 
              existingItem.quantity --;
              existingItem.totalPrice = existingItem.totalPrice- existingItem.price;  
          }
        //}
      const params = {    
          total : cartAmount-price,  
          totalquantity:cartQuantity-1,         
          items :[
          ...cartItems,
         ]
      }
      axios.patch('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff', params)
      .then( ()=>{
           dispatch({
              type: ActionType.REMOVEITEMFROMCART,
              payload:id,
          }) 
          
      })
        
  }
    const addItemHandler=()=>{
      console.log( quantity)
      if (!existingItem){
          cartItems.push({
            id:id,
            name: name,
            imageName: imageName,
            price: price, 
            quantity:1,
            totalPrice: price,
            });
      }else{
        existingItem.quantity++;
        existingItem.totalPrice = (existingItem.totalPrice + price);  
       }
      const params = {    
          total : cartAmount+price,  
          totalquantity:cartQuantity+1,         
          items :[
          ...cartItems,
    
         ]
      }
      const param ={
          id: id,
          name: name,
          imageName: imageName,          
          price: price,
          quantity: 1,
          totalPrice: price,        
      }



      axios.patch('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff', params)

          .then((response) => {
              dispatch({
                  type: ActionType.ADDITEMTOCART,
                  payload:param,
                 }) 



          })

  }

       
  const removethisItem=()=>{
    if (existingItem){
        if (existingItem.quantity ){
            cartItems = cartItems.filter((item) => item.id !== id);

        }
    }
    const params = {    
        total : cartAmount-totalPrice,  
        totalquantity:cartQuantity-quantity,         
        items :[
        ...cartItems,
       ]
    }
    axios.patch('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff', params)
    dispatch({
        type: ActionType.REMOVETHISITEMFROMCART,
        payload:id,
    })  
}
  
const updateCartEntryQuantity = () => {}
//const onAddCartEntryQuantity = () => {}
    return (
      <tr className="cart_item">
          <td className={classes.product_remove}>
              <a title="Remove this item" className="remove" onClick={removethisItem} href="#">×</a> 
          </td>

         <td className={classes.product_thumbnail}>
              <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src={"/produts-img/" + imageName.split("-")[0] + "/" + imageName}/></a>
         </td>

          <td className={classes.product_name}>
                  <a href="single-product.html">{name}</a> 
          </td>

          <td className={classes.product_price}>
              <span className="amount">{price}€</span> 
          </td>

          <td className={classes.product_quantity}>
              <div className={classes.quantity }>
                <input type="button" className={classes.minus} onClick={removeItemHandler} defaultValue="-" key={id}/> 
                  <input type="number"  size={4} className="input-text qty text" title="Qty" value={quantity} min="0" step="1" onChange={updateCartEntryQuantity}/> 
                  <input type="button" className={classes.plus} onClick={addItemHandler} defaultValue="+"/>
              </div>
          </td>

         <td className={classes.product_subtotal}>
              <span className={classes.amount}>{totalPrice}€</span> 
         </td>
       </tr>
  )}
    
export default CatItem;