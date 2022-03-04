import { ActionType } from "../action-types";
import {Dispatch} from 'redux';
import { Action } from "../actions";


export const addItemToCart =(value :any )=>(dispatch: Dispatch<Action>)=>{  
    dispatch({
        type: ActionType.ADDITEMTOCART,
        payload:value,
    }) 
}
export const removeItemFromCart = (value: number  )=>{
    return(dispatch : Dispatch<Action>)=>{
        dispatch({
            type: ActionType.REMOVEITEMFROMCART,
            payload:value,    
        })
    }

}


