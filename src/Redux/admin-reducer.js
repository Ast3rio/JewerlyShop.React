
const ADD_NEW_SUBSCRIBER = 'ADD_NEW_SUBSCRIBER';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

let initialState = {
    subscribers: [{id:1, email: 'lol'}],
    messages: [{id: 1, name: 'K', mail: 's@s.u', phone: '+36579', text: 'kkklkllklwelwkl'}],
}

const adminReducer = (state = initialState, action) => {
    switch(action){
        case ADD_NEW_SUBSCRIBER: 
        return {...state,
            subscribers: action.subscriber,
        };
        case ADD_NEW_MESSAGE: 
        return {
            ...state,
            messages: action.message,
        };
        default: 
            return state;
    }
}

export const addNewSubscriber = (subscriber) => ({type: 'ADD_NEW_SUBSCRIBER', subscriber});
export const addNewMessage = (message) => ({type: 'ADD_NEW_MESSAGE', message});

export default adminReducer;
