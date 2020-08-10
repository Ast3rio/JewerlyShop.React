import { updateObjectInArray} from "../utils/object-helpers";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const UP_SUMPRICE = 'UP_SUMPRICE';
const DOWN_SUMPRICE = 'DOWN_SUMPRICE';

export const GOODS_STATUSES = {
    IN_STOCK: 'есть в наличии',
    NOT_IN_STOCK:'нет на складе',
    ORDER: 'под заказ',
}

let initialState = {
    card: [
        { id: 1, title: 'Ring 1', price: 700, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, descr: { width: '8', material: 'красное дерево' } },
        { id: 2, title: 'Ring 2', price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '12', material: 'metal' } },
        { id: 3, title: 'Ring 3', price: 300, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, descr: { width: '6', material: 'wood' } },
        { id: 4, title: 'Ring 4', price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '10', material: 'metal' } },
        { id: 5, title: 'Ring 5', price: 500, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, descr: { width: '8', material: 'wood' } },
        { id: 6, title: 'Ring 6', price: 2100, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '12', material: 'metal' } },
        { id: 7, title: 'Ring 7', price: 700, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, descr: { width: '8', material: 'wood' } },
        { id: 8, title: 'Ring 8', price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '12', material: 'metal' } },
        { id: 9, title: 'Ring 9', price: 300, status: GOODS_STATUSES.ORDER, sumprice: 1, descr: { width: '6', material: 'wood' } },
        { id: 10, title: 'Ring 10', price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '10', material: 'metal' } },
        { id: 11, title: 'Ring 11', price: 500, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, descr: { width: '8', material: 'wood' } },
        { id: 12, title: 'Ring 12', price: 2100, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '12', material: 'metal' } },
        { id: 13, title: 'Ring 13', price: 700, status: GOODS_STATUSES.ORDER, sumprice: 1, descr: { width: '8', material: 'wood' } },
        { id: 14, title: 'Ring 14', price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '12', material: 'metal' } },
        { id: 15, title: 'Ring 15', price: 300, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, descr: { width: '6', material: 'wood' } },
        { id: 16, title: 'Ring 16', price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '10', material: 'metal' } },
        { id: 17, title: 'Ring 17', price: 500, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, descr: { width: '8', material: 'wood' } },
        { id: 18, title: 'Ring 18', price: 2100, status: GOODS_STATUSES.ORDER, sumprice: 1, descr: { width: '12', material: 'metal' } },
    ],
    totalItemsCount: 20,
    pageSize: 9,
    currentPage: 1,
}

const storePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UP_SUMPRICE:
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', { sumprice: action.sumprice}),
            }
        case DOWN_SUMPRICE:
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', { sumprice: action.sumprice }),
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

export const upSumprice = (id, sumprice) => ({ type: 'UP_SUMPRICE', id, sumprice});
export const downSumprice= (id, sumprice) => ({ type: 'DOWN_SUMPRICE', id, sumprice});
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });

export default storePageReducer;