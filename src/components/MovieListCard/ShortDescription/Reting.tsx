import React from "react"

interface IRetingProps {
    vote_average: number
}
export const Reting = ({vote_average}: IRetingProps ) => {
    return(
        <div className='movie-info-short-desctiption-field-wrap'>
            <span className='short-description-field'>Retying</span>
            <span>{vote_average}</span>
            {/* <StarsRating rating={vote_average} /> */}
        </div>

    )
}