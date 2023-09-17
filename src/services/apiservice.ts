import axios, { AxiosError } from 'axios';

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


// instanceAxiosApi.interceptors.response.use(
//     (res) => {return res},
//     async (error: AxiosError) => {
//         const originalRequest = error.config

//         if (error.response.status === 422) {
           
//         }
//     }
// )

export {
    instanceAxiosApi
}

