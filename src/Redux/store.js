import mainPageReducer from "./main-reducer";
import {combineReducers, createStore} from 'redux';
import storePageReducer from "./store-reducer";



let reducers = combineReducers({
    mainPage: mainPageReducer,
    storePage: storePageReducer,
})


let store = createStore(reducers);

export default store;