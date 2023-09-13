import React from "react"

import { GenreBadge } from "componentsUI";
import { IMovieInfo } from "type";

export const  Genres = ({genres}: Pick<IMovieInfo, "genres">) =>  {
    return (
        <div className='movie-info-short-desctiption-field-wrap  genre-field'>
            <span className='short-description-field genre-field'>Genre</span>
            <div className="genre">
                {
                    genres.map((value) => <GenreBadge key={value.id} genre={value} />)
                }
            </div>
        </div>
    )
}