import React, { ChangeEvent, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'hooks';
import { moviesActions, searchActions } from 'reduxRTK/slices';

import { MoviesLists } from './MoviesLists/MoviesLists'
import { Pagination } from './Pagination/Pagination';


export const MoviesListContainer = () => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector(state => state.movies);
  const { movies_search, page: page_search, total_pages: total_pages_search } = useAppSelector(state => state.search)

  const [query, setQuery] = useSearchParams({ page: "1", });

  const hasQuery: boolean = !!query.has("query");
  const isPagination = !!hasQuery ? !!movies_search?.length : !!movies?.length

  useEffect(() => {
    const queries = Object.fromEntries(query.entries())
    if (!hasQuery) {
      dispatch(moviesActions.getAll({ params: queries }));
    } else {
      dispatch(searchActions.search({ query: queries }))
    }
  }, [query, setQuery, dispatch])

  const handleChangePage = (event: ChangeEvent<unknown>, page: number): void => {
    setQuery(prev => {
      prev.set("page", page.toString())
      return prev
    })

  };

  if (!isPagination) {
    return (

      <span
        style={{
          fontSize: "24px",
          fontWeight: 500
        }}
      >
        no films...
      </span>
    )
  }

  return (
    <>
      {
        !!movies && (
          <>
            <MoviesLists
              movies={!!hasQuery ? movies_search : movies}
            />

            {isPagination && (
              <Pagination
                page={+query.get("page")}
                count={!hasQuery ? 500 : total_pages_search}
                handleChangePage={handleChangePage}
              />
            )}
          </>
        )
      }
    </>
  )
}
