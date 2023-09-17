import React from 'react'

import './GenresPage.scss';

import { GenresContainer } from 'components';

export const GenresPage = () => {
  return (
    <section className='genres'>
      <div className="genres__container _container">
        <h1 className='genres__title'>Genres</h1>
        <div className="genres__content">
          <GenresContainer />
        </div>
      </div>
    </section>
  )
}
