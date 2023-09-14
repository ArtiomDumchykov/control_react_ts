import React from 'react';

import { NavList } from './NavList/NavList';
import { Theme } from 'componentsUI';
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
                <Theme />
                <NavUserInfo />
            </div>
        </>
    )
}

