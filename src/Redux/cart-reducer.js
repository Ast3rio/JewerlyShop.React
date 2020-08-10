const ADD_GOODS_TO_CART = 'ADD_GOODS_TO_CART';


let initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOODS_TO_CART:
            return {
                ...state,
                cart: action.newGood,
            }
        default:
            return state;
    }
}


export const addGoodsToCart = (newGood) => ({ type: 'ADD_GOODS_TO_CART', newGood });



export default cartReducer;