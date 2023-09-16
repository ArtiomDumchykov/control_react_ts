import React from 'react';

import { IGenre } from 'type'

interface IGenreProps {
  genre: IGenre,
}

export const Genre = ({genre}: IGenreProps) => {
  const {id, name} = genre
  return (
    <li className="genre__item">
      <span className='genre__item-'>{name}</span>
    </li>
  )
}
