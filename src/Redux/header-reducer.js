
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
const SET_SEARCH_BAR = 'SET_SEARCH_BAR';

let InitialState = {
    searchStatus: false,
    searchValue: ""
};

const headerReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.setValue
            };
        case SET_SEARCH_BAR:
            return {
                ...state,
                searchStatus: action.status,
            }
        default:
            return state;
    }
};


export const setSearchValue = (setValue) => ({ type: 'SET_SEARCH_VALUE' }, setValue);
export const setSearchBar = (status) => ({ type: 'SET_SEARCH_BAR' }, status);

export default headerReducer;