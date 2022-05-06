import AuthService from '../apis/auth';

export const TYPE_SET_USER_DATA = "TYPE_SET_USER_DATA";
export const TYPE_LOGOUT_USER = "TYPE_LOGOUT_USER";
export const TYPE_LOGIN_ERROR = 'TYPE_LOGIN_ERROR';
export const TYPE_LOGIN_SUCCESS = 'TYPE_LOGIN_SUCCESS';
export const TYPE_REGISTER_ERROR = 'TYPE_REGISTER_ERROR';
export const TYPE_REGISTER_SUCCESS = 'TYPE_REGISTER_SUCCESS';
export const TYPE_UPDATE_ERROR = 'TYPE_UPDATE_ERROR';
export const TYPE_UPDATE_SUCCESS = 'TYPE_UPDATE_SUCCESS';

export function actionLogout() {
    return (dispatch: any) => {
        AuthService.logout();
        return dispatch({
            type: TYPE_LOGOUT_USER,
        });
    }
}

export const actionSetUserData = (user: any) => ({
    type: TYPE_SET_USER_DATA,
    user
})

export function actionLogin(data:any) {
    return (dispatch: any) =>
        AuthService.signInWithEmailAndPassword(data)
            .then((user) => {
                dispatch(actionSetUserData(user));

                return dispatch({
                    type: TYPE_LOGIN_SUCCESS
                });
            }
            )
            .catch(error => {
                return dispatch({
                    type: TYPE_LOGIN_ERROR,
                    error
                });
            });
}
export function actionRegister(data:any) {
    return (dispatch:any) =>
        AuthService.createUser(data)
            .then((user) => {
                return dispatch({
                    type: TYPE_REGISTER_SUCCESS
                });
            }
            )
            .catch(error => {
                return dispatch({
                    type: TYPE_REGISTER_ERROR,
                    error
                });
            });
}
export function actionUpdateUser(data:any) {
    return (dispatch:any) =>
        AuthService.updateUser(data)
            .then((user) => {
                return dispatch({
                    type: TYPE_UPDATE_SUCCESS
                });
            })
            .catch(error => {
                return dispatch({
                    type: TYPE_UPDATE_ERROR,
                    error
                });
            });
}
