import { ICreditsResponse, IGenre, IMoviesResponse, IParams, IRes, ISearchParams, IVideosResponse } from "type";
import { instanceAxiosApi } from "./apiservice";
import { urls } from "constants/";

const movieService = {
    getAll: (params?: IParams ): IRes<IMoviesResponse> => instanceAxiosApi.get(urls.movie.base, {params: {...params}}),
    getById: (movieId: string ) => instanceAxiosApi.get(urls.movie.byId(movieId)),

    getCredits: (movieId: string ): IRes<ICreditsResponse> => instanceAxiosApi.get(urls.credits.base(movieId)),

    getMovieTrailer: (movieId: string): IRes<IVideosResponse> => instanceAxiosApi.get(urls.videos.base(movieId)),
    getVideos: (id: string) => instanceAxiosApi.get(urls.videos.base(id)),
  

    getGenres: (): IRes<IGenre[]> => instanceAxiosApi.get(urls.genre.base),
    search: (query: ISearchParams) => instanceAxiosApi.get(urls.search.base, { params: { ...query } }),
  
}  


export {
    movieService
}