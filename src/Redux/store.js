import mainPageReducer from "./main-reducer";
import {combineReducers, createStore} from 'redux';
import storePageReducer from "./store-reducer";
import footerReducer from "./footer-reducer";



let reducers = combineReducers({
    mainPage: mainPageReducer,
    storePage: storePageReducer,
    footer: footerReducer,
})


let store = createStore(reducers);

export default store;