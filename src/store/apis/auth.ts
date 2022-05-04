import axios from './axios';
import jwtDecode from 'jwt-decode';
import { Emitter } from './emitter';
class jwtService extends Emitter {

    init() {
        this.setInterceptors();
        this.handleAuthentication();
    }

    setInterceptors = () => {
        axios.interceptors.request.use(
            (config: any) => {
                config.headers['Authorization'] = 'Bearer ' + this.getAccessToken();
                return config;
            }, (error) => {
                console.log("Failed");
                return Promise.reject(error);
            });

        axios.interceptors.response.use(response => {
            return response;
        }, err => {
            if (err.response?.status === 401 && err.config && !err.config.__isRetryRequest) {
                // if you ever get an unauthorized response, logout the user
                this.emit("onAutoLogout", "Invalid access_token");

                this.setSession(null);
            }
        });
    };

    handleAuthentication = () => {

        let access_token = this.getAccessToken();

        if (this.isAuthTokenValid(access_token)) {
            this.setSession(access_token);
            this.emit("onAutoLogin", true);
        }
        else {
            this.setSession(null);
            this.emit("onAutoLogout", 'access_token expired');
        }
    };

    createUser = (data: any) => {
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/users/', {
                user: {
                    first_name: data.firstName,
                    last_name: data.lastName,
                    email: data.email,
                    username: data.userName,
                    password: data.password,
                    password_confirmation: data.passwordConfirm,
                }
            })
                .then(response => {
                    if (response.data.user) {
                        resolve(response.data.user);
                    }
                    else {
                        reject(response.data.error);
                    }
                });
        });
    };

    signInWithEmailAndPassword = (data: any) => {
        return new Promise((resolve, reject) => {
            axios.post('api/auth/login', {
                email: data.email,
                password: data.password,
                wallet_address: data.wallet_address
            }).then(response => {
                if (response.data) {
                    this.setSession(response.data.token);
                    resolve(response.data.user);
                }
                else {
                    reject(response.data.error);
                }
            });
        });
    };

    signInWithToken = () => {
        return new Promise((resolve, reject) => {
            axios.post('/api/auth/token', {
            }).then(response => {
                if (response.data.user) {
                    this.setSession(response.data.token);
                    resolve(response.data.user);
                }
                else {
                    reject(response.data.error);
                }
            });
        });
    };

    updateUser = (data: any) => {
        return new Promise((resolve, reject) => {
            axios.put('/api/v1/users/', {
                user: {
                    id: data.id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    username: data.username,
                }
            })
                .then(response => {
                    if (response.data) {
                        resolve(response.data);
                    }
                    else {
                        reject(response.data.error);
                    }
                });
        });
    };

    setSession = (access_token: any) => {
        if (access_token) {
            localStorage.setItem('jwt_access_token', access_token);
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
        }
        else {
            localStorage.removeItem('jwt_access_token');
        }
    };

    logout = () => {
        console.log('sgegeg')
        this.setSession(null);
    };

    isAuthTokenValid = (access_token: any) => {
        if (!access_token) {
            return false;
        }
        try {
            const decoded: any = jwtDecode(access_token);
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                console.warn('access token expired');
                return false;
            }
            else {
                return true;
            }
        } catch (e) {
            return false;
        }
    };

    getAccessToken = () => {
        return window.localStorage.getItem('jwt_access_token');
    };
}

const instance = new jwtService();

export default instance;
