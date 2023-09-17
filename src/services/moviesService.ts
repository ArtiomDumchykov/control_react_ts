import { ICreditsResponse, IGenresResponse, IMovieInfo, IMoviesResponse, IParams, IRes, ISearchParams, IVideosResponse } from "type";

import { urls } from "constants/";
import { instanceAxiosApi } from "./apiservice";

const movieService = {
    getAll: (params?: IParams ): IRes<IMoviesResponse> => instanceAxiosApi.get(urls.movie.base, {params: {...params}}),
    getById: (movieId: string ): IRes<IMovieInfo> => instanceAxiosApi.get(urls.movie.byId(movieId)),

    getCredits: (movieId: string ): IRes<ICreditsResponse> => instanceAxiosApi.get(urls.credits.base(movieId)),

    getMovieTrailer: (movieId: string): IRes<IVideosResponse> => instanceAxiosApi.get(urls.videos.base(movieId)),
    getVideos: (id: string) => instanceAxiosApi.get(urls.videos.base(id)),
  
    getGenres: (): IRes<IGenresResponse> => instanceAxiosApi.get(urls.genre.base),
    search: (params?: ISearchParams): IRes<IMoviesResponse> => instanceAxiosApi.get(urls.search.base, { params: { ...params } }),
  
}  

export {
    movieService
}