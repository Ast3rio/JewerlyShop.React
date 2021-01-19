const ADD_GOODS_TO_CART = 'ADD_GOODS_TO_CART';
const DELETE_GOODS_FROM_CART = 'DELETE_GOODS_FROM_CART';
const REMOVE_ALL_GOODS = 'REMOVE_ALL_GOODS';


let initialState = {
    cart: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GOODS_TO_CART:
            return {
                ...state,
                cart: action.addGood,
            };
        case DELETE_GOODS_FROM_CART:
            return {
                ...state,
                cart: state.cart.slice(0, action.goodIndex).concat(state.cart.slice(action.goodIndex + 1)),
            };
        case REMOVE_ALL_GOODS:
            return {
                ...state,
                cart: action.cart,
            };
        default:
            return state;
    }
}


export const addGoodsToCart = (addGood) => ({ type: 'ADD_GOODS_TO_CART', addGood });
export const removeGoodsFromCart = (goodIndex) => ({ type: 'DELETE_GOODS_FROM_CART', goodIndex });
export const removeAllGoods = (cart) => ({ type: 'REMOVE_ALL_GOODS', cart });



export default cartReducer;