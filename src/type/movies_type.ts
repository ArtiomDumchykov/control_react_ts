import { ICreditsResponse, IVideosResponse } from "./api_types";

interface IMovies {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface IMovieInfo {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: IBelongs_to_collection | null;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductiomCompany[];
    production_countries: IProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenLaguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

interface IBelongs_to_collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

interface IGenre {
    id: number;
    name: string;
}

interface IProductiomCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface ISpokenLaguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}


interface ICasts {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}
interface ICrew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}

type ICredits = ICreditsResponse


interface IVideo {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}

type IVideos = IVideosResponse 

export type {
    IVideos,
    ICredits,
    IVideo,
    ICasts,
    ICrew,
    IMovies,
    IMovieInfo,
    IGenre
}