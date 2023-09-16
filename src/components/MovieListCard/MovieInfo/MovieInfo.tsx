import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import "./MovieInfo.scss";

import { urls } from 'constants/';
import { IMovieInfo } from 'type';

import { ShortDescription } from '../ShortDescription/ShortDescription';
import { useAppDispatch } from 'hooks';
import { movieActions } from 'reduxRTK/slices';

interface IMovieInfoProps {
    movie: IMovieInfo,
    onOpen: () => void
}

export const MovieInfo = ({ movie, onOpen }: IMovieInfoProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    const [, setQuery] = useSearchParams({ page: "1", })


    useEffect(() => {
        return () => {
            dispatch(movieActions.setClearMovieInfo())
        }
    }, [])



    if (!movie) return null

    const { title, vote_average, original_language, genres, budget, runtime, release_date, overview } = movie;

    const backdropPath = movie?.poster_path ? urls.posterUrl.base + movie.poster_path : urls.notFoundPoster.base;
    
    const releaseDate = +release_date.split('-')[0];

  
    const handleClick= () => {
        navigate(`/moviesList`)
        setQuery(prev => {
            prev.set("primary_release_year", `${releaseDate}`)
            return prev
        })
    }

    return (
        <>
            <div className="movie__info-info">
                <div className='movie-info-info__content'>
                    <div
                        style={{ backgroundImage: `url(${backdropPath})` }}
                        className="backdrop-path"
                    >
                        <p></p>
                    </div>
                    <div className="movie-info__decription-wrap">
                        <div className="short-description-wrap">
                            <h2
                                className="movie-info-info__title"
                            >
                                {title}
                            </h2>
                            <div className="short-description__btn">
                                <button
                                    className='action-btn btn-play'
                                onClick={() => onOpen()}
                                >
                                    play
                                </button>
                                <button
                                    className='action-btn btn-favorite'
                                >
                                    favorite
                                </button>
                            </div>
                        </div>
                        <div className="overview">
                            <p>{overview}</p>
                        </div>
                        <ShortDescription 
                            short_description={{
                                vote_average,
                                original_language,
                                genres,
                                budget,
                                runtime,
                                releaseDate,
                                handleClick
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
