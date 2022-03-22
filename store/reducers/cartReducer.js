import { ActionType } from "../action/actionType";
import {produce} from 'immer';
const initialState = {
    id:"",
    items:[],
    totalQuantity:0,
    totalAmount: 0,
    tax: 0,
 
   
};
const Cartreducer=(state = initialState , action )=>{
  let existingItem ;
  switch (action.type){
      case ActionType.ADDITEMTOCART:
        const newItem = action.payload;
        return produce(state,draft=> {
          
          existingItem = draft.items.find(item => item.id === newItem.id );
          if (!existingItem){
            draft.items.push({
                id:newItem.id,
                name: newItem.name,
                imageName: newItem.imageName,
                price: newItem.price, 
                quantity:newItem.quantity,
                totalPrice: newItem.price,        
            });
          }
          draft.totalQuantity++;
          draft.totalAmount=draft.totalAmount+newItem.price;
          console.log('draft', draft);
        })

        /*const newItem = action.payload;
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
        state.totalQuantity++;
        state.totalAmount=state.totalAmount+newItem.price;    
        return state;*/
      
      case ActionType.REMOVEITEMFROMCART:
       
        return produce(state,draft=> {
          const id = action.payload;
          existingItem = draft.items.find(item => item.id === id);
        
          if (existingItem){
          if (existingItem.quantity === 1 ){
            draft.items = draft.items.filter(item => item.id !== id);
          }
      
         
          draft.totalQuantity--;
          draft.totalAmount= draft.totalAmount - existingItem.price;
          
          draft.cartstate=!draft.cartstate;
        } })
   
        /*const id = action.payload;
        existingItem = state.items.find(item => item.id === id);
        
        if (existingItem){
        if (existingItem.quantity === 1 ){
           state.items = state.items.filter(item => item.id !== id);
        }
        state.totalQuantity--;
        state.totalAmount= state.totalAmount - existingItem.price;
        state.cartstate=!state.cartstate;
      }
      return state;*/
      case ActionType.REMOVETHISITEMFROMCART:
       
        return produce(state,draft=> {
          const idd = action.payload;
          const Item = draft.items.find(item => item.id === idd);
          if (Item){         
            draft.items =draft.items.filter(item => item.id !== idd);
            draft.totalQuantity=draft.totalQuantity-Item.quantity;
            draft.totalAmount= draft.totalAmount-Item.totalPrice;
         }
         })
 
        /*const idd = action.payload;
        const Item = state.items.find(item => item.id === idd);
        if (Item){         
          state.items = state.items.filter(item => item.id !== idd);
          state.totalQuantity=state.totalQuantity-Item.quantity;
          state.totalAmount= state.totalAmount-Item.totalPrice;
       }
      return state;*/
      case ActionType.GETCART:
        const response= action.payload;
        const cartdata= response.data;  
        return produce(state,draft=> {
          draft.items.push(...cartdata.items);
          draft.totalAmount=cartdata.total;
          draft.totalQuantity=cartdata.totalquantity;
          console.log(draft.items); })
        


      default:
          return state;
  }
}
export default Cartreducer; 