import { AxiosResponse } from "axios";

import { ICasts, ICrew, IGenre, IMovies, IVideo } from "./movies_type";

interface IParams {
    page?: number,
    with_genres?: number,
    primary_release_year?: number,
    'vote_average.gte'?: number,
    'vote_average.lte'?: number,
    'vote_count.gte'?: number,
    'vote_count.lte'?: number,
    'primary_release_date.gte'?: number
    'primary_release_date.lte'?: number
}  

interface ISearchParams {
    query?: string,
    page?: number
}

interface IMoviesResponse {
    page: number;
    results: IMovies[];
    total_pages: number;
    total_results: number;
}

interface ICreditsResponse {
    id: number
    cast?: ICasts[]
    crew?: ICrew[]
}


interface IVideosResponse {
    id: number,
    results: IVideo[]
}

interface IGenresResponse {
    genres: IGenre[]
}

type IRes<T> = Promise<AxiosResponse<T>>

export type {
    IGenresResponse,
    IVideosResponse,
    ICreditsResponse,
    IMoviesResponse,
    IParams,
    ISearchParams,
    IRes,
}