
const ADD_NEW_SUBSCRIBER = 'ADD_NEW_SUBSCRIBER';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const ADD_NEW_ORDER = 'ADD_NEW_ORDER';

let initialState = {
    subscribers: [],
    messages: [],
    orders: [],
    admin: true,
}

const adminReducer = (state = initialState, action) => {
    switch (action) {
        case ADD_NEW_SUBSCRIBER:
            return {
                ...state,
                subscribers: action.subscriber,
            };
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: action.message,
            };
        case ADD_NEW_ORDER:
            return {
                ...state,
                orders: action.order
            };
        default:
            return state;
    }
}

export const addNewSubscriber = (subscriber) => ({ type: 'ADD_NEW_SUBSCRIBER', subscriber });
export const addNewMessage = (message) => ({ type: 'ADD_NEW_MESSAGE', message });
export const addNewOrder = (order) => ({ type: 'ADD_NEW_ORDER', order });

export default adminReducer;
