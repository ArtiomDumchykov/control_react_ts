import React, { useState } from 'react';

import './NavUserInfo.scss';

import { useAppSelector } from 'hooks';
import { isLightTheme } from 'guards';
import { UserPanel } from './UserPanel/UserPanel';


export const NavUserInfo = () => {
    const [showPanel, setShowPanel] = useState(false);

    const theme = useAppSelector(state => state.theme);
    const isTheme = isLightTheme(theme);



    // const handleMouseEnter = () => {
    //     setShowPanel(true);
    // };

    // const handleMouseLeave = () => {
    //     setShowPanel(false);
    // };

    return (
        <div
            className="nav-user-info"
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
        >
      
            {/* {showPanel && <UserPanel />}  */}
           <UserPanel />
        </div>
    );
};
