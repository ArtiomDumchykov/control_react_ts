import React, { FormEvent } from 'react'

import { ReactComponent as SearchIcon } from 'assets/icon-search.svg';

import './Search.scss'
import { useAppDispatch, useAppSelector } from 'hooks';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTES } from 'routes';


export const Search = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {query: searchQuery, } = useAppSelector(state => state.search) 
  const [q, setQ] = useSearchParams()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = event.currentTarget.filmname.value;


    if (text.trim()) {
      navigate(`${ROUTES.MOVIES_LIST}`)
      setQ(prev => {
        prev.set("search", `${text}`)
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
