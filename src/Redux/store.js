import mainPageReducer from "./main-reducer";
import {combineReducers, createStore} from 'redux';
import storePageReducer from "./store-reducer";
import footerReducer from "./footer-reducer";
import { reducer as formReducer } from 'redux-form';
import cartReducer from "./cart-reducer";
import brandPageReducer from "./brand-reducer";
import adminReducer from "./admin-reducer";
import headerReducer from "./header-reducer";



let reducers = combineReducers({
    header: headerReducer,
    mainPage: mainPageReducer,
    storePage: storePageReducer,
    brandPage: brandPageReducer,
    cart: cartReducer,
    footer: footerReducer,
    form: formReducer,
    admin: adminReducer,
})


let store = createStore(reducers);

export default store;