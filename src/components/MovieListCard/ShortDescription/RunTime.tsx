import React from "react"

interface IRunTimeProps {
    runtime: number
}

export const  RunTime = ({runtime}: IRunTimeProps) => {
    return (
        <div className='movie-info-short-desctiption-field-wrap'>
            <span className='short-description-field'>Runtime</span>
            <span>{runtime} min</span>
        </div>
    )
}

