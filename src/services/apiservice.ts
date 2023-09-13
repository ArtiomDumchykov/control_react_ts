import axios, { AxiosResponse } from 'axios';

const { 
    REACT_APP_BASEURL: baseURL,
    REACT_APP_BASEURL_ACCESS_TOKEN: accessToken 
} = process.env

const authorizationToken = `Bearer ${accessToken}`;


const instanceAxiosApi = axios.create({baseURL});

instanceAxiosApi.interceptors.request.use(config => {
    config.headers.Authorization = authorizationToken
    return config
})

export {
    instanceAxiosApi
}

