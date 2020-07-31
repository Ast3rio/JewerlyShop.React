import { updateObjectInArray } from "../utils/object-helpers";

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    card: [
        { id: 1, title: 'Ring 1', price: 700, status: 'есть в наличии', addedToCart: false, descr: { width: '8', material: 'красное дерево' } },
        { id: 2, title: 'Ring 2', price: 1400, status: 'нет на складе', addedToCart: false, descr: { width: '12', material: 'metal' } },
        { id: 3, title: 'Ring 3', price: 300, status: 'есть в наличии', addedToCart: false, descr: { width: '6', material: 'wood' } },
        { id: 4, title: 'Ring 4', price: 1200, status: 'есть в наличии', addedToCart: false, descr: { width: '10', material: 'metal' } },
        { id: 5, title: 'Ring 5', price: 500, status: 'есть в наличии', addedToCart: false, descr: { width: '8', material: 'wood' } },
        { id: 6, title: 'Ring 6', price: 2100, status: 'под заказ', addedToCart: false, descr: { width: '12', material: 'metal' } },
        { id: 7, title: 'Ring 7', price: 700, status: 'есть в наличии', addedToCart: false, descr: { width: '8', material: 'wood' } },
        { id: 8, title: 'Ring 8', price: 1400, status: 'нет на складе', addedToCart: false, descr: { width: '12', material: 'metal' } },
        { id: 9, title: 'Ring 9', price: 300, status: 'есть в наличии', addedToCart: false, descr: { width: '6', material: 'wood' } },
        { id: 10, title: 'Ring 10', price: 1200, status: 'есть в наличии', addedToCart: false, descr: { width: '10', material: 'metal' } },
        { id: 11, title: 'Ring 11', price: 500, status: 'есть в наличии', addedToCart: false, descr: { width: '8', material: 'wood' } },
        { id: 12, title: 'Ring 12', price: 2100, status: 'под заказ', addedToCart: false, descr: { width: '12', material: 'metal' } },
        { id: 13, title: 'Ring 13', price: 700, status: 'есть в наличии', addedToCart: false, descr: { width: '8', material: 'wood' } },
        { id: 14, title: 'Ring 14', price: 1400, status: 'нет на складе', addedToCart: false, descr: { width: '12', material: 'metal' } },
        { id: 15, title: 'Ring 15', price: 300, status: 'есть в наличии', addedToCart: false, descr: { width: '6', material: 'wood' } },
        { id: 16, title: 'Ring 16', price: 1200, status: 'есть в наличии', addedToCart: false, descr: { width: '10', material: 'metal' } },
        { id: 17, title: 'Ring 17', price: 500, status: 'есть в наличии', addedToCart: false, descr: { width: '8', material: 'wood' } },
        { id: 18, title: 'Ring 18', price: 2100, status: 'под заказ', addedToCart: false, descr: { width: '12', material: 'metal' } },
    ],
    totalItemsCount: 20,
    pageSize: 9,
    currentPage: 1,
}

const storePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', { addedToCart: true }),
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', { addedToCart: false }),
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        default:
            return state;
    }
}

export const addToCart = (id) => ({ type: 'ADD_TO_CART', id });
export const deleteFromCart = (id) => ({ type: 'DELETE_FROM_CART', id });
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });

export default storePageReducer;