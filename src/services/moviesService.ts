import { IMoviesResponse, IParams, IRes } from "type";
import { instanceAxiosApi } from "./apiservice";
import { urls } from "constants/";

const movieService = {
    getAll: (params?: IParams ): IRes<IMoviesResponse> => instanceAxiosApi.get(urls.movie.base, {params: {...params}}),
    getById: (movieId: string | number) => instanceAxiosApi.get(urls.movie.byId(movieId)),
  
}  


export {
    movieService
}