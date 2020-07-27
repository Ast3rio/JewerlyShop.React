import { updateObjectInArray } from "../utils/object-helpers";

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';

let initialState = {
    card: [
        { id: 1, title: 'Ring 1', price: 700, status: 'есть в наличии', addedToCart: false, descr: { width: '8', material: 'wood' } },
        { id: 2, title: 'Ring 2', price: 1400, status: 'нет на складе', addedToCart: false, descr: { width: '12', material: 'metal' } },
        { id: 3, title: 'Ring 3', price: 300, status: 'есть в наличии', addedToCart: false, descr: { width: '6', material: 'wood' } },
        { id: 4, title: 'Ring 4', price: 1200, status: 'есть в наличии', addedToCart: false, descr: { width: '10', material: 'metal' } },
        { id: 5, title: 'Ring 5', price: 500, status: 'есть в наличии', addedToCart: false, descr: { width: '8', material: 'wood' } },
        { id: 6, title: 'Ring 6', price: 2100, status: 'под заказ', addedToCart: false, descr: { width: '12', material: 'metal' } },
    ]
}

const storePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: 
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', {addedToCart: true}),
        } 
        case DELETE_FROM_CART: 
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', {addedToCart: false}),
        } 
        default:
            return state;
    }
}

export const addToCart = (id) => ({type: 'ADD_TO_CART', id});
export const deleteFromCart = (id) => ({type: 'DELETE_FROM_CART', id});

export default storePageReducer;