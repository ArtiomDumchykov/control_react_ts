interface IRealeseProps {
    releaseDate: number,
    handleClick: () => void

}

export const RealeseDate =  ({releaseDate, handleClick}: IRealeseProps) => {
    return (
        <div className='movie-info-short-desctiption-field-wrap'>
        <span className='short-description-field'>Release date</span>
        <span
            className='realese_date-text'
            onClick={handleClick}
        >
            {releaseDate}
        </span>
    </div>
    )
}