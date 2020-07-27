const SET_SUBSCRIBE = 'SET_SUBSCRIBE';

let InitialState = {
    subscribe: false,
}

const footerReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_SUBSCRIBE:
            return {
                ...state,
                subscribe: action.subscribe,
            }
        default:
            return state;
    };
}

export const setSubscribe = (subscribe) => ({type: 'SET_SUBSCRIBE', subscribe});


export default footerReducer;
