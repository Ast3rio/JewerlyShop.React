import mainPageReducer from "./main-reducer";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import storePageReducer from "./store-reducer";
import footerReducer from "./footer-reducer";
import cartReducer from "./cart-reducer";
import brandPageReducer from "./brand-reducer";
import adminReducer from "./admin-reducer";
import headerReducer from "./header-reducer";
import filterReducer from "./filter-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";



let reducers = combineReducers({
    header: headerReducer,
    mainPage: mainPageReducer,
    storePage: storePageReducer,
    brandPage: brandPageReducer,
    cart: cartReducer,
    footer: footerReducer,
    form: formReducer,
    admin: adminReducer,
    filter: filterReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;