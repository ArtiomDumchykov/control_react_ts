import React from 'react';

import './Genres.scss';

import { IGenre } from 'type';

import { Genre } from '../Genre/Genre';
interface IGenresProps {
  genres: IGenre[]
}

export const Genres = ({ genres }: IGenresProps) => {
  return (
    <ul className='genres__list'>
      {
        genres && (
          genres.map(item => <Genre genre={item} key={`${item.id}_${item.name}`} />)
        )
      }
    </ul>
  )
}
