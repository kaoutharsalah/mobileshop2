import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface item {
  id:number,
  name: string,
  imageName: string,
  price: number, 
  quantity:number,
  totalPrice: number,  
}
export interface CartState {
  id: string,
  items : item[],
  tax:number,
  totalQuantity:number,
  totalAmount: number,
  cartstate : boolean,
}
const initialState: CartState= {
    id:"",
    items:[],
    totalQuantity:0,
    totalAmount: 0,
    tax: 0,
    cartstate : true,
   
};
const Cartreducer=(state = initialState , action : Action)=>{
    let existingItem ;
    switch (action.type){
        case ActionType.ADDITEMTOCART:
          const newItem = action.payload;
          existingItem = state.items.find(item => item.id === newItem.id );
          if (!existingItem){
            state.items.push({
                id:newItem.id,
                name: newItem.name,
                imageName: newItem.imageName,
                price: newItem.price, 
                quantity:newItem.quantity,
                totalPrice: newItem.price,        
            });
          }
          // else {
          // existingItem.quantity++;
          // existingItem.totalPrice = (existingItem.totalPrice + newItem.price);  
          // }
          state.totalQuantity++;
          state.totalAmount=state.totalAmount+newItem.price;
          state.cartstate=!state.cartstate;
          return state;
          // return {
          //   ...state,
          //   items : action.payload.items,
          //   totalQuantity: action.payload.total,
          //   totalAmount : action.payload.totalquantity,

          // }
      
        case ActionType.REMOVEITEMFROMCART:
          const id = action.payload;
          existingItem = state.items.find(item => item.id === id);
          
          if (existingItem){
          if (existingItem.quantity === 1 ){
             state.items = state.items.filter(item => item.id !== id);
          }
          // }else{ 
          //     existingItem.quantity--;
          //     existingItem.totalPrice = existingItem.totalPrice- existingItem.price;  
          // }
          state.totalQuantity--;
          state.totalAmount= state.totalAmount - existingItem.price;
          state.cartstate=!state.cartstate;
        }
        return state;
        case ActionType.REMOVETHISITEMFROMCART:
          const idd = action.payload;
          const Item = state.items.find(item => item.id === idd);
          if (Item){         
            state.items = state.items.filter(item => item.id !== idd);
            state.totalQuantity=state.totalQuantity-Item.quantity;
            state.totalAmount= state.totalAmount-Item.totalPrice;
         }
          
        return state;
        case ActionType.GETCART:
          const cart= action.payload;
          const cartdata= cart.data;   
          state.items.push(...cartdata.items);
          state.totalAmount=cartdata.total;
          state.totalQuantity=cartdata.totalquantity;
          console.log(state.items);
          return state;

        default:
            return state;
    }
}
export default Cartreducer; 