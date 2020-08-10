import mainPageReducer from "./main-reducer";
import {combineReducers, createStore} from 'redux';
import storePageReducer from "./store-reducer";
import footerReducer from "./footer-reducer";
import { reducer as formReducer } from 'redux-form';
import cartReducer from "./cart-reducer";



let reducers = combineReducers({
    mainPage: mainPageReducer,
    storePage: storePageReducer,
    cart: cartReducer,
    footer: footerReducer,
    form: formReducer,
})


let store = createStore(reducers);

export default store;