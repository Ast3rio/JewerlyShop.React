import mainPageReducer from "./main-reducer";
import {combineReducers, createStore} from 'redux';
import storePageReducer from "./store-reducer";
import footerReducer from "./footer-reducer";
import { reducer as formReducer } from 'redux-form';



let reducers = combineReducers({
    mainPage: mainPageReducer,
    storePage: storePageReducer,
    footer: footerReducer,
    form: formReducer,
})


let store = createStore(reducers);

export default store;