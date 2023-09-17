import React from 'react';

import userIcon from '../../assets/user.png';

import './NavUserInfo.scss';

import { useAppSelector } from 'hooks';
import { isLightTheme } from 'guards';

export const NavUserInfo = () => {
    const theme = useAppSelector(state => state.theme);
    const isTheme = isLightTheme(theme);

    return (
        <div className="nav-user-info">
            <div className='user-icon-wrap'>
                <img src={userIcon} alt="User Icon" className="user-icon" />
            </div>
        </div>
    );
};
