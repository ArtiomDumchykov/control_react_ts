import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { MovieInfo } from './MovieInfo/MovieInfo';

import { IMovieInfo } from 'type';
import { movieService } from 'services';

interface IMovieListCardProps {
    movieId: number | string
}

export const MovieListCard = ({movieId}: IMovieListCardProps) => {

    const [movie, setMovie] = useState<IMovieInfo>(null)
    
    useEffect(() => {
        (async() => {
            try {
                const {data} = await movieService.getById(movieId)
                setMovie(data)
            } catch (error) {
                const err = error as AxiosError;
                console.log(err)
            }
        })()
    }, [movieId])
    
    if (!movie) return null;

  return (
    <div>
        <MovieInfo movie={movie}/>
    </div>
  )
}
