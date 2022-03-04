import {ActionType} from "../action-types"

interface AddItemToCart{
    type:ActionType.ADDITEMTOCART
    payload : any
}
interface RemoveItemFromCart{
    type:ActionType.REMOVEITEMFROMCART
    payload : number 
}
export type Action =  AddItemToCart | RemoveItemFromCart

