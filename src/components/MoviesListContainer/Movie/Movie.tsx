import React from 'react'
import { useNavigate } from 'react-router-dom';

import './Movie.scss'

import { urls } from 'constants/';
import { IMovies } from 'type'


interface IMovieListProps {
    movie: IMovies
}

export const Movie = ({ movie }: IMovieListProps) => {
    const navigate = useNavigate();

    if (!movie) return null;

    const { id, poster_path, title, release_date, vote_average } = movie;
    
    const data = +release_date.split('-')[0];
    const img = urls.posterUrl.base + poster_path || urls.notFoundPoster.base


    return (
        <li className="movies-lists__item">
            <div 
                className="movies-lists-item__img-wrap"
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => navigate(`/movieInfo/${id}`) }
            >
                <p></p>
            </div>
            <div className="badges">
                <span
                    className="rating__badges"
                    style={{
                        backgroundColor: vote_average > 5 ? "green" : "red"
                    }}
                >
                    {vote_average}
                </span>
                {data === new Date().getFullYear() &&  <span className="new__badges-text">NEW</span>}
            </div>
            <div className="movies-lists-item__info-short">
            <p>{title}</p>
            <p>{data} <span>Movie</span></p>
        </div>
        </li>
    )
}
