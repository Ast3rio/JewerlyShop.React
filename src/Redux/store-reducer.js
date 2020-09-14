import { updateObjectInArray} from "../utils/object-helpers";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const UP_SUMPRICE = 'UP_SUMPRICE';
const DOWN_SUMPRICE = 'DOWN_SUMPRICE';

export const GOODS_STATUSES = {
    IN_STOCK: 'есть в наличии',
    NOT_IN_STOCK:'нет на складе',
    ORDER: 'под заказ',
}

export const GOODS_TYPES = {
    RING: 'ring',
    SHACKLE: 'shakle',
    BRACELET: 'bracelet',
    MAN_JEWELRY: 'man jewelry',
    WOMAN_JEWELRY: 'woman jewelry',
    NEW: 'new',
}

let initialState = {
    card: [
        { id: 1, title: 'Кольцо с алмазом', type: GOODS_TYPES.RING, price: 700, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, width: '8', material: 'красное дерево' },
        { id: 2, title: 'Золотое кольцо', type: GOODS_TYPES.RING, price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, width: '12', material: 'metal'  },
        { id: 3, title: 'Браслет', type: GOODS_TYPES.BRACELET, price: 300, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, width: '6', material: 'wood' },
        { id: 4, title: 'Заколка', type: GOODS_TYPES.MAN_JEWELRY, price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, width: '10', material: 'metal'  },
        { id: 5, title: 'Кольцо всевластия', type: GOODS_TYPES.RING, price: 500, status: GOODS_STATUSES.IN_STOCK, sumprice: 1,  width: '8', material: 'wood'  },
        { id: 6, title: 'Кольцо простое', type: GOODS_TYPES.RING, price: 2100, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1,  width: '12', material: 'metal'  },
        { id: 7, title: 'Серьги', type: GOODS_TYPES.SHACKLE, price: 700, status: GOODS_STATUSES.IN_STOCK, sumprice: 1,  width: '8', material: 'wood' },
        { id: 8, title: 'Деревянное кольцо', type: GOODS_TYPES.RING, price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1,  width: '12', material: 'metal' },
        { id: 9, title: 'Серьги с изумрудами', type: GOODS_TYPES.SHACKLE, price: 300, status: GOODS_STATUSES.ORDER, sumprice: 1, width: '6', material: 'wood' },
        { id: 10, title: 'Золотое кольцо с камнем', type: GOODS_TYPES.RING, price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1,  width: '10', material: 'metal' },
        { id: 11, title: 'Мужской браслет', type: GOODS_TYPES.MAN_JEWELRY, price: 500, status: GOODS_STATUSES.IN_STOCK, sumprice: 1,  width: '8', material: 'wood'  },
        { id: 12, title: 'Женское ожерелье', type: GOODS_TYPES.WOMAN_JEWELRY, price: 2100, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1,  width: '12', material: 'metal' },
        { id: 13, title: 'Деревянное кольцо с узором', type: GOODS_TYPES.RING, price: 700, status: GOODS_STATUSES.ORDER, sumprice: 1,  width: '8', material: 'wood'  },
        { id: 14, title: 'Изумрудное ожерелье', type: GOODS_TYPES.NEW, price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1,  width: '12', material: 'metal'  },
        { id: 15, title: 'Свадебное кольцо', type: GOODS_TYPES.RING, price: 300, status: GOODS_STATUSES.IN_STOCK, sumprice: 1, width: '6', material: 'wood' },
        { id: 16, title: 'Серебрянные серьги', type: GOODS_TYPES.NEW, price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, width: '10', material: 'metal'  },
        { id: 17, title: 'Деревянный браслет', type: GOODS_TYPES.BRACELET, price: 500, status: GOODS_STATUSES.NOT_IN_STOCK, sumprice: 1, width: '8', material: 'wood'  },
        { id: 18, title: 'Браслет с золотым орнаментом', type: GOODS_TYPES.BRACELET, price: 2100, status: GOODS_STATUSES.ORDER, sumprice: 1, width: '12', material: 'metal' },
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