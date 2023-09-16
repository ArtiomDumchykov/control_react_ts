import React from 'react';

import "./MoviesLists.scss"

import { IMovies } from 'type';

import { Movie } from '../Movie/Movie';
interface IMoviesListsProps {
  movies: IMovies[]
}

export const MoviesLists = ({movies}: IMoviesListsProps) => {
  if (!movies) {
    return (
      <div>NO Movies</div>
    )
  }

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


