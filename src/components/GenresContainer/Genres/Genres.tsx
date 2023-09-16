import React from 'react'

import { IGenre } from 'type'

import { Genre } from '../Genre/Genre'

interface IGenresProps {
    genres: IGenre[]
}

export const Genres = ({genres}: IGenresProps) => {
  return (
    <>
        {
            genres && (
                genres.map(item => <Genre genre={item} key={`${item.id}_${item.name}`}/>)
            )
        }
    </>
  )
}
