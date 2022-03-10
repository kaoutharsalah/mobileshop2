
import { useSelector } from 'react-redux';
import classes from './cart.module.css';
import { useDispatch} from "react-redux";
import axios from "axios";
import{ ActionType} from "../../store/action/actionType";
function CatItem(props) {

    



    const {id , name, price, quantity ,totalPrice,imageName} = props;
    const dispatch = useDispatch();
    let cartItems = useSelector((state) =>  state.Cart.items);
    const cartQuantity = useSelector((state)=>state.Cart.totalQuantity);
    const cartAmount = useSelector((state)=>state.Cart.totalAmount );//=> {return  state.Cart.totalAmount} //=> state.Cart.totalAmount
    const existingItem = cartItems.find(item => item.id === id );
    
    console.log(quantity);
    const removeItemHandler=async()=>{
        //if (existingItem){
            if (existingItem.quantity === 1 ){
                cartItems = cartItems.filter((item) => item.id !== id);
    
            }else{ 
                existingItem.quantity--;
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
        await  axios.patch('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff', params)
        .then( ( response)=>{
             dispatch({
                type: ActionType.REMOVEITEMFROMCART,
                payload:id,
            }) 
            
        })
          
    }
    const onchangequantityhandler=()=>{
        dispatch(addItemHandler);
    }
    const addItemHandler=async()=>{
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
        await axios.patch('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff', params)
        .then( ( response)=>{
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
    /*const removethisItem=()=>{
        axios.delete('http://localhost:3000/carts/e364b282-6460-4665-bfc8-1c5bb68f18ff/items?id='+id)
        dispatch({
            type: ActionType.REMOVETHISITEMFROMCART,
            payload:id,
        })  
    }*/
    


    return (
        <tr className="cart_item">
            <td className={classes.product_remove}>
                <a title="Remove this item" className="remove" onClick={removethisItem} >×</a>
            </td>

            <td className={classes.product_thumbnail}>
                <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" className="shop_thumbnail" src="/img/product-thumb-2.jpg" /></a>
            </td>

            <td className={classes.product_name}>
                <a href="single-product.html">{name}</a>
            </td>

            <td className={classes.product_price}>
                <span className="amount">{price}€</span>
            </td>

            <td className={classes.product_quantity}>
                <div className={classes.quantity}>
                    <input type="button" className={classes.minus} onClick={removeItemHandler} value="-" />
                    <input type="number" size={4} className="input-text qty text" title="Qty" value={quantity} min="0" step="1" />
                    <input type="button" className={classes.plus} onClick={onchangequantityhandler} value="+" />
                </div>
            </td>

            <td className={classes.product_subtotal}>
                <span className={classes.amount}>{totalPrice}€</span>
            </td>
        </tr>

    )
}
export default CatItem;