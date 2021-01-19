
const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';


let InitialState = {
    searchValue: "",
};


const headerReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return { ...state, searchValue: action.setValue }
        default:
            return state;
    }
};


export const setSearchValue = (setValue) => ({type: 'SET_SEARCH_VALUE'}, setValue);




export default headerReducer;