
import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface item {
  id:number,
  name: string,
  price: number, 
  quantity:number,
  totalPrice: number,
  
}

interface CartState {
  items : item[],
  totalQuantity:number,
  totalAmount: number,
}

const initialState: CartState= {
    items:[],
    totalQuantity:0,
    totalAmount: 0,
};
const Cartreducer=(state =  initialState , action : Action)=>{
    let existingItem ;
    switch (action.type){
        case ActionType.ADDITEMTOCART:
          const newItem = action.payload;
          existingItem = state.items.find(item => item.id === newItem.id );
          state.totalQuantity++;
          state.totalAmount=state.totalAmount + newItem.price;
          if (!existingItem){
            state.items.push({
                id:newItem.id,
                name: newItem.name,
                price: newItem.price, 
                quantity:1,
                totalPrice: newItem.price,
               
            });
          }else {
          existingItem.quantity++;
          existingItem.totalPrice = existingItem.totalPrice+ newItem.price;  
          }
          return state;
      
        case ActionType.REMOVEITEMFROMCART:
          const id = action.payload;
          existingItem = state.items.find(item => item.id === id);
          
          state.totalQuantity--;
          if (existingItem){
            state.totalQuantity--;
            state.totalAmount= state.totalAmount - existingItem.price;
          if (existingItem.quantity === 1 ){
             state.items = state.items.filter(item => item.id !== id);
  
          }else{ 
              existingItem.quantity--;
              existingItem.totalPrice = existingItem.totalPrice- existingItem.price;  
          }
        }
        return state;
        default:
            return state;
    }
}
export default Cartreducer; 