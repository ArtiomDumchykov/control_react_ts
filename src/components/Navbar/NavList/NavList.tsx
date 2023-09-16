import React from 'react';

import './NavList.scss'

import { ROUTES } from 'routes';

import { NavItem } from '../NavItem/NavItem';

export interface INavLinks {
    linkName: string, 
    redirect: string
}

const navLinks: INavLinks[] = [
    {
        linkName: "Home",
        redirect: ROUTES.MAIN
    },
    {
        linkName: 'movies',
        redirect: ROUTES.MOVIES_LIST
    },
    {
        linkName: 'genres',
        redirect: ROUTES.MOVIES_GENRES
    },
]

export const NavList = () => {
  return (
    <div className='header-nav-wrap'>
        <nav className="header__nav">
            <ul className="header-nav__list nav-list">
                {
                    !!navLinks?.length && [...navLinks].map(item => <NavItem item={item} key={item.linkName}/>)
                }
            </ul>
        </nav>
    </div>
  )
}


