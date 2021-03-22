
const SET_MIN_PRICE = 'SET_MIN_PRICE';
const SET_MAX_PRICE = 'SET_MAX_PRICE';
const SET_WIDTH_BASIS = 'SET_WIDTH_BASIS';
const SET_MATERIAL = 'SET_MATERIAL';

let initialState = {
    minPrice: 0,
    maxPrice: 10000,
    widthBasis: '-----',
    goodMaterial: '-----',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_MIN_PRICE:
            return {
                ...state, minPrice: action.minPrice 
            };
        case SET_MAX_PRICE:
            return {
                ...state, maxPrice: action.maxPrice
            };
        case SET_WIDTH_BASIS:
            return {
                ...state, widthBasis: action.width 
            };
        case SET_MATERIAL:
            return {
                ...state, goodMaterial: action.material
            };
        default:
            return state;
    }
};

export const setMinPrice = (minPrice) => ({type: 'SET_MIN_PRICE', minPrice});
export const setMaxPrice = (maxPrice) => ({type: 'SET_MAX_PRICE', maxPrice});
export const setWidthBasis = (width) => ({type: 'SET_WIDTH_BASIS', width});
export const setMaterial = (material) => ({type: 'SET_MATERIAL', material});

export default filterReducer;