import { updateObjectInArray} from "../Utils/object-helpers";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const UP_GOODS_COUNT = 'UP_GOODS_COUNT';
const DOWN_GOODS_COUNT = 'DOWN_GOODS_COUNT';
const SET_GOODS_TYPE = 'SET_GOODS_TYPE';

export const GOODS_STATUSES = {
    IN_STOCK: 'есть в наличии',
    NOT_IN_STOCK:'нет на складе',
    ORDER: 'под заказ',
}

export const GOODS_TYPES = {
    RING: 'ring',
    SHACKLE: 'shakle',
    BRACELET: 'bracelet',
    MAN_JEWELRY: 'man_jewelry',
    WOMAN_JEWELRY: 'woman_jewelry',
    NEW: 'new',
}

let initialState = {
    card: [
        { id: 1, title: 'Кольцо с алмазом', type: GOODS_TYPES.RING, price: 700, status: GOODS_STATUSES.IN_STOCK, count: 1, width: '8', material: 'красное дерево'},
        { id: 2, title: 'Золотое кольцо', type: GOODS_TYPES.RING, price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1, width: '12', material: 'metal'  },
        { id: 3, title: 'Браслет', type: GOODS_TYPES.BRACELET, price: 300, status: GOODS_STATUSES.IN_STOCK, count: 1, width: '6', material: 'wood' },
        { id: 4, title: 'Заколка', type: GOODS_TYPES.MAN_JEWELRY, price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1, width: '10', material: 'metal'  },
        { id: 5, title: 'Кольцо всевластия', type: GOODS_TYPES.RING, price: 500, status: GOODS_STATUSES.IN_STOCK, count: 1,  width: '8', material: 'wood'  },
        { id: 6, title: 'Кольцо простое', type: GOODS_TYPES.RING, price: 2100, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1,  width: '12', material: 'metal'  },
        { id: 7, title: 'Серьги', type: GOODS_TYPES.SHACKLE, price: 700, status: GOODS_STATUSES.IN_STOCK, count: 1,  width: '8', material: 'wood' },
        { id: 8, title: 'Деревянное кольцо', type: GOODS_TYPES.RING, price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1,  width: '12', material: 'metal' },
        { id: 9, title: 'Серьги с изумрудами', type: GOODS_TYPES.SHACKLE, price: 300, status: GOODS_STATUSES.ORDER, count: 1, width: '6', material: 'wood' },
        { id: 10, title: 'Золотое кольцо с камнем', type: GOODS_TYPES.RING, price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1,  width: '10', material: 'metal' },
        { id: 11, title: 'Мужской браслет', type: GOODS_TYPES.MAN_JEWELRY, price: 500, status: GOODS_STATUSES.IN_STOCK, count: 1,  width: '8', material: 'wood'  },
        { id: 12, title: 'Женское ожерелье', type: GOODS_TYPES.WOMAN_JEWELRY, price: 2100, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1,  width: '12', material: 'metal' },
        { id: 13, title: 'Деревянное кольцо с узором', type: GOODS_TYPES.RING, price: 700, status: GOODS_STATUSES.ORDER, count: 1,  width: '8', material: 'wood'  },
        { id: 14, title: 'Изумрудное ожерелье', type: GOODS_TYPES.NEW, price: 1400, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1,  width: '12', material: 'metal'  },
        { id: 15, title: 'Свадебное кольцо', type: GOODS_TYPES.RING, price: 300, status: GOODS_STATUSES.IN_STOCK, count: 1, width: '6', material: 'wood' },
        { id: 16, title: 'Серебрянные серьги', type: GOODS_TYPES.NEW, price: 1200, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1, width: '10', material: 'metal'  },
        { id: 17, title: 'Деревянный браслет', type: GOODS_TYPES.BRACELET, price: 500, status: GOODS_STATUSES.NOT_IN_STOCK, count: 1, width: '8', material: 'wood'  },
        { id: 18, title: 'Браслет с золотым орнаментом', type: GOODS_TYPES.BRACELET, price: 2100, status: GOODS_STATUSES.ORDER, count: 1, width: '12', material: 'metal' },
    ],
    goodsType: null,
    totalItemsCount: 20,
    pageSize: 9,
    currentPage: 1,
}

const storePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UP_GOODS_COUNT:
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', { count: action.count}),
            }
        case DOWN_GOODS_COUNT:
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', { count: action.count }),
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_GOODS_TYPE: 
            return {
                ...state,
                goodsType: action.goodsType,
            }
        default:
            return state;
    }
}

export const upGoodsCount = (id, count) => ({ type: 'UP_GOODS_COUNT', id, count});
export const downGoodsCount= (id, count) => ({ type: 'DOWN_GOODS_COUNT', id, count});
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setGoodsType = (goodsType) => ({type: 'SET_GOODS_TYPE', goodsType});

export default storePageReducer;