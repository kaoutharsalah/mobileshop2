
import { ActionType } from "./actionType";

  export const addItemToCart = (product) => {
    return{
      type : ActionType.ADDITEMTOCART,
      payload : product
    }
  }
  
  
  export const removeItemFromCart = (product) => {
    return{
      type : ActionType.REMOVEITEMFROMCART,
      payload : product
    }
  }
  
  export const removeThisItemFromCart = (itemID)=>{
    return{
      type : ActionType.REMOVETHISITEMFROMCART,
      payload : itemID
    }
  }
  
  
  export const getCart = ( response) =>{
    return{
      type : ActionType.GETCART,
      payload : response
      
    }
  }