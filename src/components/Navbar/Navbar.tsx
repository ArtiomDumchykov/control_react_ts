import React from 'react';

import { NavList } from './NavList/NavList';
import { Theme, Search } from 'componentsUI';
import { NavUserInfo } from 'components/NavUserInfo/NavUserInfo';

export const Navbar = () => {
    return (
        <>
            <NavList />
            <div 
                className="header__actions"
                style={{
                    display: "flex",
                    gap: "15px"
                }}
            >
                <Search/>
                <Theme />
                <NavUserInfo />
            </div>
        </>
    )
}

