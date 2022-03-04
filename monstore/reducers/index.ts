import { combineReducers } from "redux";
import Cartreducer from "./cartreducer";

 
const reducers = combineReducers({
    Cart : Cartreducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>