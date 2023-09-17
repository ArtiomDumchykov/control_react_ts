import React from 'react';
import './Genre.scss';

import { IGenre } from 'type'
import { useNavigate, useSearchParams } from 'react-router-dom';

interface IGenreProps {
  genre: IGenre,
}

export const Genre = ({ genre }: IGenreProps) => {

  const navigate = useNavigate();
  const [, setQuery] = useSearchParams({ page: "1", })

  const { id, name } = genre

  const handleClick = () => {
    navigate(`/moviesList`)
    setQuery(prev => {
      prev.set("with_genres", `${id}`);
      return prev
    })

  }

  return (
    <li 
      className="genre__item"
      onClick={handleClick}
    >
      <span className='genre__item-text'>{name}</span>
    </li>
  )
}
