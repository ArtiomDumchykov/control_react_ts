import React from 'react';
import { useParams } from 'react-router-dom';

import { MovieListCard } from 'components'

export const MoviePage = () => {
  const {movieId} = useParams()

  if (!movieId) return null

  return (
    <section className='movie' style={{ padding: "25px 0" }}>
    <div className="movie__container _container">
        <div className="movie__content">
            {!!movieId && <MovieListCard movieId={movieId} />}
        </div>
    </div>
</section>
  )
}
