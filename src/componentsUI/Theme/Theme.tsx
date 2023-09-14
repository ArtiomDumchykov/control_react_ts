import React from 'react';

import styles from "./Theme.module.scss";
import { useTheme } from 'hooks';

export const Theme = () => {

    const {themeText, ThemeIcon, handleToggleTheme} = useTheme()

    return (
        <div 
            className={styles.switcher}
            onClick={handleToggleTheme}
        >
            <span>{themeText}</span>
            <ThemeIcon
                className={styles.icon} 
            />
        </div>
    )
}
