import React from 'react'

import { IGenre } from 'type';

import { Reting, Countries, Genres, Budget, RunTime, RealeseDate } from './';


interface IShortDescriptionProps {
    short_description: {
        vote_average: number
        original_language: string
        genres: IGenre[];
        budget: number
        runtime: number
        releaseDate: number
        handleClick: () => void
    }
}

export function ShortDescription({short_description}: IShortDescriptionProps) {
    const {vote_average, original_language, genres, budget, runtime, releaseDate, handleClick} = short_description
    return (
        <div className="movie-info__short-decription">
        <h2 className="movie-info-short-dectiption__title">About the film</h2>       
        <Reting vote_average={vote_average}/>
        <Countries original_language={original_language}/>
        <Genres genres={genres}/>
        <Budget budget={budget}/>
        <RunTime runtime={runtime}/>
        <RealeseDate releaseDate={releaseDate} handleClick={handleClick}/>
    </div>
    )
}




