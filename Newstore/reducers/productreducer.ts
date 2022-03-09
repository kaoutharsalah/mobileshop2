import axios, { AxiosResponse } from "axios";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface ProductItem{
    id: number,
    name: string,
    imageName: string,
    price: number,
    discountRate: number,
    review: number

}
export interface ProductState {
    id: string,
    products:ProductItem[], 
    Searchedproducts: ProductItem[],  
    search : boolean 
  }
const initialState: ProductState= {
    id:"",
    products:[],
    Searchedproducts:[], 
    search : false,
};
const Productreducer=(state = initialState , action : Action)=>{
    switch (action.type){
        case ActionType.GETPRODUCTS:      
            state.products=[];
            axios.get('http://localhost:3000/products')
            .then((response: AxiosResponse) => {
              state.products.push(...response.data);     
           })  
            // return {...state, posts:action.payload};
            return state;
        case ActionType.GETFILTREDPRODUCT:
            state.search= true;
            const res =action.payload.res;
            const searchTerm =action.payload.term; 
            console.log("searchTerm " + searchTerm ) ;             
            const prods =res.data.filter((prod : ProductItem)=>prod.name.includes(searchTerm)); 
            console.log(prods);  
            state.Searchedproducts=prods;
            console.log(state.Searchedproducts);  
            return state; 
        default:
            return state;

}
}
export default Productreducer; 