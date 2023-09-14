import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { MovieInfo } from './MovieInfo/MovieInfo';

import { ICredits, IMovieInfo, IVideos } from 'type';
import { movieService } from 'services';

interface IMovieListCardProps {
    movieId: number | string
}


export const MovieListCard = ({movieId}: IMovieListCardProps) => {

    const [movie, setMovie] = useState<IMovieInfo>(null)
    const [credits, setCretids] = useState<ICredits>(null)
    const [videos, setVideos] = useState<IVideos>(null)


    console.log("movie", movie)
    console.log("credits", credits)
    console.log("movieTrailersData", videos)
    
    useEffect(() => {
        (async() => {
            try {
                const {data} = await movieService.getById(movieId.toString())
                const { data: creditData } = await movieService.getCredits(movieId.toString())
                const {data: movieTrailersData} = await movieService.getMovieTrailer(movieId.toString())
            

                setMovie(data)
                setCretids(creditData)
                setVideos(movieTrailersData)
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
