import React from 'react';

import { NavList } from './NavList/NavList';
import { Theme } from 'componentsUI';

export const Navbar = () => {
    return (
        <>
            <NavList />
            <div className="header__actions">
                <Theme />
            </div>
        </>
    )
}

