import { updateObjectInArray } from "../Utils/object-helpers";

const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const UP_GOODS_COUNT = 'UP_GOODS_COUNT';
const DOWN_GOODS_COUNT = 'DOWN_GOODS_COUNT';
const SET_GOODS_TYPE = 'SET_GOODS_TYPE';
const SET_GOODS = 'SET_GOODS';

export const GOODS_TYPES = {
    RING: 'ring',
    SHACKLE: 'shakle',
    BRACELET: 'bracelet',
    MAN_JEWELRY: 'man_jewelry',
    WOMAN_JEWELRY: 'woman_jewelry',
    NEW: 'new',
};

let initialState = {
    card: [],
    goodsType: null,
    totalItemsCount: 20,
    pageSize: 9,
    currentPage: 1,
};

const storePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GOODS:
            return {
                ...state,
                card: action.goods
            };
        case UP_GOODS_COUNT:
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', { count: action.count }),
            };
        case DOWN_GOODS_COUNT:
            return {
                ...state,
                card: updateObjectInArray(state.card, action.id, 'id', { count: action.count }),
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_GOODS_TYPE:
            return {
                ...state,
                goodsType: action.goodsType,
            };
        default:
            return state;
    }
};

export const upGoodsCount = (id, count) => ({ type: 'UP_GOODS_COUNT', id, count });
export const downGoodsCount = (id, count) => ({ type: 'DOWN_GOODS_COUNT', id, count });
export const setCurrentPage = (currentPage) => ({ type: 'SET_CURRENT_PAGE', currentPage });
export const setGoodsType = (goodsType) => ({ type: 'SET_GOODS_TYPE', goodsType });
export const setGoods = (goods) => ({ type: 'SET_GOODS', goods });

export default storePageReducer;