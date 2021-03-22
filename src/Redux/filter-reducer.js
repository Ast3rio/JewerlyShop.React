
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
                ...state, minPrice: action.setValue 
            };
        case SET_MAX_PRICE:
            return {
                ...state, maxPrice: action.setValue
            };
        case SET_WIDTH_BASIS:
            return {
                ...state, widthBasis: action.setValue 
            };
        case SET_MATERIAL:
            return {
                ...state, goodMaterial: action.setValue
            };
        default:
            return state;
    }
};

export const setMinPrice = (setValue) => ({type: 'SET_MIN_PRICE', setValue});
export const setMaxPrice = (setValue) => ({type: 'SET_MAX_PRICE', setValue});
export const setWidthBasis = (setValue) => ({type: 'SET_WIDTH_BASIS', setValue});
export const setMaterial = (setValue) => ({type: 'SET_MATERIAL', setValue});

export default filterReducer;