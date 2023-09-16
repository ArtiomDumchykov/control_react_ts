import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from 'hooks'
import { genresActions } from 'reduxRTK/slices';

import { Genres } from './Genres/Genres';

export const GenresContainer = () => {

  const dispatch = useAppDispatch();

  const {genres} = useAppSelector(state => state.genres)

  useEffect(() => {
    dispatch(genresActions.getGenres())
  }, [dispatch])


  return (
    <>
      <div>
        <Genres genres={genres}/>
      </div>
    </>
  )
}
