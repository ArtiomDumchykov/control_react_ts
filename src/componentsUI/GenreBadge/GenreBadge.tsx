import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import './GenreBadge.scss';

import { IGenre } from 'type';

interface IGenreProps {
    genre: IGenre
}

export const GenreBadge = ({ genre }: IGenreProps) => {
    const { id: with_genres, name } = genre;

    const navigate = useNavigate();
    const [, setQuery] = useSearchParams({ page: "1", })

    const handleClick = () => {
        navigate(`/moviesList`)
        setQuery(prev => {
            prev.set("with_genres", `${with_genres}`);
            return prev
        })
    }

    return (
        <span
            className='genre__iten'
            onClick={handleClick}
        >
            {name}
        </span>
    );
};




