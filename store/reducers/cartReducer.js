export const ADD_TO_CART ='ADD_TO_CART';
export const REMOVE_FROM_CART ='REMOVE_FROM_CART'
const INITIAL_STATE = {
    items:[],
    totalQuantity:0,
    totalAmount: 0,
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADD_TO_CART:
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
    
      case REMOVE_FROM_CART:
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
  };
  
  export default cartReducer;