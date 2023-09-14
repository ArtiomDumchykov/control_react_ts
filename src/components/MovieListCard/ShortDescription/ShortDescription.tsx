import React from 'react'

import { IGenre } from 'type';

import { GenreBadge, StarsRating } from 'componentsUI';
import { Description } from './Description';

interface IShortDescriptionProps {
    short_description: {
        vote_average: number
        original_language: string
        genres: IGenre[]
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
            <Description
                text_title='Retying'
                text_sub_title={`${vote_average}`}
            > 
                <StarsRating rating={vote_average} />
            </Description> 
            <Description
                text_title='Countries'
                text_sub_title={`${original_language}`}
            />
            <Description
                text_title='Genre'
                className_title='genre-field'
            >
                <div className="genre">
                    {
                        genres.map((value) => <GenreBadge key={value.id} genre={value} />)
                    }
                </div>
            </Description>
            <Description
                text_title='Budget'
                text_sub_title={`${budget}`}

            />
            <Description
                text_title='Runtime'
                text_sub_title={`${runtime} min`}
            />
            <Description
                text_title='Release date'
            >
                <span
                    className='realese_date-text'
                    onClick={handleClick}
                >
                    {releaseDate}
                </span>
            </Description>
        </div>
    )
}

