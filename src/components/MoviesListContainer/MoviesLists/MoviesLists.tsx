import React from 'react';

import "./MoviesLists.scss"

import { useAppSelector } from 'hooks'

import { Movie } from '../Movie/Movie';

export const MoviesLists = () => {

  const { movies } = useAppSelector(state => state.movies);

  return (
    <>
      {
        !!movies?.length && (
          <ul className="movies__list">
            {movies.map(item => <Movie movie={item} key={item.id} />)}
          </ul>
        )
      }
    </>
  )
}


