import React from "react"

interface ICountriesProps {
    original_language: string
}

export const Countries = ({original_language}: ICountriesProps) => {
    return (
        <div className='movie-info-short-desctiption-field-wrap'>
            <span className='short-description-field'>Countries</span>
            <span>{original_language}</span>
        </div>
    )
}