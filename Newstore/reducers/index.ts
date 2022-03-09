import { combineReducers } from "redux";
import Cartreducer from "./cartreducer";
import Productreducer from "./productreducer";

 
const reducers = combineReducers({
    Cart : Cartreducer,
    Products :Productreducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>