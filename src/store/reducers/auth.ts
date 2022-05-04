import * as Actions from '../actions';

const initState = {
    token: null,
    currentUser: {},
    loginSuccess: false,
    registerSuccess: false,
    updateSuccess: false,
    error: {
        email: null,
        password: null
    }
}

const auth = function (state = initState, action: any) {
    switch (action.type) {
        case Actions.TYPE_LOGOUT_USER:
            return { ...state, currentUser: null, token: null }
        case Actions.TYPE_SET_USER_DATA:
            return { ...state, currentUser: action.user };
        case Actions.TYPE_LOGIN_SUCCESS:
            return { ...state, loginSuccess: true }
        case Actions.TYPE_LOGIN_ERROR:
            return { ...state, loginSuccess: false, error: { ...state.error, email: action.error.email, password: action.error.password } }
        case Actions.TYPE_REGISTER_SUCCESS:
            return { ...state, registerSuccess: true };
        case Actions.TYPE_REGISTER_ERROR:
            return { ...state, registerSuccess: false, error: { ...state.error, email: action.error.email, password: action.error.password } }
        case Actions.TYPE_UPDATE_SUCCESS:
            return { ...state, updateSuccess: true };
        case Actions.TYPE_UPDATE_ERROR:
            return { ...state, updateSuccess: false, error: { ...state.error, email: action.error.email, password: action.error.password } }
        default:
            return state;
    }
}

export default auth;