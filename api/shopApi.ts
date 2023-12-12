import axios from "axios";

const shopApi = axios.create({
    baseURL : 'http://localhost:8080/api',
    //withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'X-Requested-With': 'XMLHttpRequest',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers'

    // }    
})

export default shopApi