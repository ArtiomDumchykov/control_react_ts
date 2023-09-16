import React, { FormEvent } from 'react'

import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';

import './Search.scss'
import { useAppDispatch } from 'hooks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from 'routes';
import { searchActions } from 'reduxRTK/slices';


export const Search = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [_, setQuery] = useSearchParams()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = event.currentTarget.filmname.value;


    if (text.trim()) {
      navigate(`${ROUTES.MOVIES_LIST}`)
      dispatch(searchActions.setSearchQuery(text))
      setQuery(prev => {
        prev.set("query", `${text}`)
        prev.set("page", "1")
        return prev
      })
      event.currentTarget.reset();
    }
  }

  return (
    <div className='search-wrap'>
      <form
        className="search-form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="search-form__container">
          <div className="search-field search">
            <label htmlFor="search" className="label">
              <SearchIcon
                className='search-icon'
              />
              <input
                className='textField'
                type="text"
                name="filmname"
                id="search"
                placeholder='Search film...'
              />
            </label>
            <button type='submit'>Search</button>
          </div>
        </div>
      </form>
    </div>
  )
}
