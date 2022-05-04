import Axios from "axios";

const axios = Axios.create({
    responseType: "json",
    baseURL: 'http://konceptual-backend.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

axios.interceptors.response.use(function (res) {
    return res;
})

export default axios;