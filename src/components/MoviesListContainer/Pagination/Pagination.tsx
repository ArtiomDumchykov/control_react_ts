import React, { ChangeEvent, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import {Pagination as RowPagination, SelectChangeEvent} from '@mui/material';

import './Pagination.scss';

import { useAppDispatch, useAppSelector } from 'hooks';
import { moviesActions, searchActions } from 'reduxRTK/slices';

export const Pagination = () => {
    const dispatch = useAppDispatch();
    const {movies} = useAppSelector(state => state.movies)
    const {movies_search, total_pages: totalPagesearch} = useAppSelector(state => state.search)

    console.log("movies_search", movies_search)

    const [query, setQuery] = useSearchParams({ page: "1", });

    useEffect(() => {
        const queries = Object.fromEntries(query.entries())
        dispatch(moviesActions.getAll({ params: queries }));
        // dispatch(searchActions.search({query: {query: "Terminators", page: 1}}))

    }, [query, setQuery])

    const handleChangePage = (event: ChangeEvent<unknown>, page: number): void => {
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
                        count={totalPagesearch || 500} 
                        color="primary"
                        page={+query.get("page")}
                        onChange={handleChangePage}
                    />
            )
        }
        
       </>
    )
}
