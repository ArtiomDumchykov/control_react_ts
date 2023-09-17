import React from 'react'

import './MoviesPage.scss';

import { MoviesListContainer } from 'components';

export const MoviesPage = () => {
  return (
    <div className="movies">
      <div className="movies__container _container">
        <div className="movies__content">
          <div className="movies-list-wrap">
            <MoviesListContainer/>  
          </div>
        </div>
      </div>
    </div>
  )
}
