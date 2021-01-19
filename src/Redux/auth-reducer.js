const SET_LOGIN = 'SET_LOGIN';
const SET_PASSWORD = 'SET_PASSWORD';
const SET_ADMIN_STATUS = 'SET_ADMIN_STATUS';

let initialState = {
    admin: true,
    login: '',
    password: '',
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGIN: 
            return {
                ...state, login: action.login
            }
        case SET_PASSWORD: 
            return {
                ...state, password: action.password
            }
        case SET_ADMIN_STATUS: 
            return {
                ...state, admin: action.status
            }
        default:
            return state;
    }
}

export const setLogin = (login) => ({type: 'SET_LOGIN', login});
export const setPassword = (password) => ({type: 'SET_PASSWORD', password});
export const setAdminStatus = (status) => ({type: 'SET_ADMIN_STATUS', status});

export default authReducer;