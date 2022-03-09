import axios from "axios";
import { useDispatch } from "react-redux";
import { Action, Dispatch } from "redux";
import { ActionType } from "./action-types";
 

export const getPosts = (data:any) => {
    return{
        type:ActionType.GETPRODUCTS,
        payload:data
    }
}

export function fetchData() {
    return function(dispatch:Dispatch<Action>) {
      return axios.get('http://localhost:3000/products')
        .then(({ data }) => {
        dispatch(getPosts(data));
      });
    };
  }