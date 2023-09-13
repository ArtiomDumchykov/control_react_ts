import React from 'react';

import './Header.scss'

import { ROUTES } from 'routes';

import { Logo } from 'componentsUI';
import { Navbar } from 'components/Navbar';

export const Header = () => {

  return (
    <header className='header'>
        <div className="header__container _container">
            <div className="header__logo-wrap">
                <Logo to={ROUTES.MAIN}>LOGO</Logo>
            </div>
            <Navbar/>
        </div>
    </header>
  )
}


