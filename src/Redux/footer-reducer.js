const UPDATE_SUBSCRIBE_TEXT = 'UPDATE_SUBSCRIBE_TEXT';
const SET_NEW_SUB = 'SET_NEW_SUB';
const SET_SUBSCRIBE = 'SET_SUBSCRIBE';

let InitialState = {
    subscribe: false,
    newSubscribeText: 'e-mail',
}

const footerReducer = (state = InitialState, action) => {
    switch (action.type) {
        case UPDATE_SUBSCRIBE_TEXT:
            return {
                ...state,
                newSubscribeText: action.updateText,
            };
        case SET_NEW_SUB: 
            return {
                ...state,
                newSubscribeText: action.email,
            }
        case SET_SUBSCRIBE:
            return {
                ...state,
                subscribe: action.subscribe,
            }
        default:
            return state;
    };
}

export const setNewSub = (email) => ({type: 'SET_NEW_SUB', email});
export const setSubscribe = (subscribe) => ({type: 'SET_SUBSCRIBE', subscribe});
export const updateSubscribeText = (text) => ({
    type: 'UPDATE_SUBSCRIBE_TEXT',
    updateText: text,
})


export default footerReducer;
