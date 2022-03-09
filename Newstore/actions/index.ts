import {ActionType} from "../action-types"

interface AddItemToCart{
    type:ActionType.ADDITEMTOCART
    payload : any
}
interface RemoveItemFromCart{
    type:ActionType.REMOVEITEMFROMCART
    payload : number 
}
interface RemoveThisItemFromCart{
    type:ActionType.REMOVETHISITEMFROMCART
    payload : number
}
interface GetFiltredProduct{
    type:ActionType.GETFILTREDPRODUCT
    payload : any
}
interface GetCart{
    type:ActionType.GETCART
    payload :any

}
interface Gerproduct{
    type:ActionType.GETPRODUCTS
    payload:any
}

export type Action =  AddItemToCart | RemoveItemFromCart | RemoveThisItemFromCart|GetFiltredProduct|GetCart|Gerproduct

