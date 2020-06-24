import mainPageReducer from "./main-reducer";
import {combineReducers, createStore} from 'redux';



let reducers = combineReducers({
    mainPage: mainPageReducer,
})


let store = createStore(reducers);

export default store;