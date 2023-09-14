import React, { ChangeEvent, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import {Pagination as RowPagination} from '@mui/material';

import './Pagination.scss';

import { useAppDispatch, useAppSelector } from 'hooks';
import { moviesActions } from 'reduxRTK/slices';

export const Pagination = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies)

    const [query, setQuery] = useSearchParams({ page: "1", });

    useEffect(() => {
        const queries = Object.fromEntries(query.entries())
        dispatch(moviesActions.getAll({ params: queries }));
    }, [query, setQuery])

    const handleChangePage = (event: ChangeEvent<unknown>, page: number) => {
        setQuery(prev => {
            prev.set("page", page.toString())
            return prev
        })

      };

    return (
       <>
        {
            movies && (
                    <RowPagination 
                        className={'custom-pagination'}
                        count={500} 
                        color="primary"
                        page={+query.get("page")}
                        onChange={handleChangePage}
                        
                    />
            )
        }
        
       </>
    )
}
