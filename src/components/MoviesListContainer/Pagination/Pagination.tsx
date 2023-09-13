import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';
import { moviesActions } from 'reduxRTK/slices';

export const Pagination = () => {
    const dispatch = useAppDispatch();

    const [query, setQuery] = useSearchParams({ page: "1", });

    useEffect(() => {
        const paramsRequest = { ...Object.fromEntries(query.entries()) };
        dispatch(moviesActions.getAll({ params: paramsRequest }));
    }, [query, setQuery, dispatch])

    return (
        <div>Pagination</div>
    )
}
