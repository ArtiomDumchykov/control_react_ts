import React from "react"

interface IBudgetProps {
    budget: number
}

export const Budget = ({budget}: IBudgetProps) => {
    return (
        <div className='movie-info-short-desctiption-field-wrap'>
            <span className='short-description-field'>Budget</span>
            <span>{budget}</span>
        </div>
    )
} 
