import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { useAppDispatch, useAppSelector } from 'hooks';
import { movieActions } from 'reduxRTK/slices';

import { MovieInfo } from './MovieInfo/MovieInfo';
import { MovieTrailerModal } from 'components/Modal';
import { PostersPreview } from 'components/PostersPreview/PostersPreview';

interface IMovieListCardProps {
    movieId: string
}

export const MovieListCard = ({movieId}: IMovieListCardProps) => {

    const dispatch = useAppDispatch();
    const { movie, credits, videos, } = useAppSelector(state => state.movie)

    const [isMovieTrailerOpen, setIsMovieTrailerOpen] = useState(false)

    useEffect(() => {
        (async() => {
            try {
                dispatch(movieActions.getMovie({movieId}))
                dispatch(movieActions.getMovieCredits({movieId}))
                dispatch(movieActions.getMovieTrailers({movieId}))
              
            } catch (error) {
                const err = error as AxiosError;
                console.log(err)
            }
        })()
    }, [movieId, dispatch])


    const [video = null] = videos || [];

    const openModal = () => {
        setIsMovieTrailerOpen(true);
    };

    const closeModal = () => {
        setIsMovieTrailerOpen(false);
    };
    
    if (!movie) return null;

  return (
    <div>
        {
            !!movie && (
                <>
                    <MovieInfo movie={movie} onOpen={openModal}/>
                    {
                        !!isMovieTrailerOpen && (
                            <MovieTrailerModal
                                video={video}
                                onClose={closeModal}
                            />
                        )
                        
                    }
                    <PostersPreview/>
                </>
            )
        }
    </div>
  )
}
