import { combineReducers } from "redux";
import productReducer from '../reducers/product'

const rootReducers = combineReducers({
    products: productReducer
})

export default rootReducers;