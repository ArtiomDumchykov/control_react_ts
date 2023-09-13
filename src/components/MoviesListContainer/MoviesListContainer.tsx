import React from 'react';

import { MoviesLists } from './MoviesLists/MoviesLists'
import { Pagination } from './Pagination/Pagination';

export const MoviesListContainer = () => {
  return (
    <>
        <MoviesLists/>
        <Pagination/>
    </>
  )
}
