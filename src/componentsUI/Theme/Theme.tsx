import React, {useEffect} from 'react';

import styles from "./Theme.module.scss"

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';

import { themeActions } from 'reduxRTK/slices';
import { useAppDispatch, useAppSelector } from 'hooks';
import { isLightTheme } from 'guards';

export const Theme = () => {

    const dispatch = useAppDispatch();
    const theme = useAppSelector(state => state.theme);

    const isTheme = isLightTheme(theme);

    const themeText = isTheme ? "Light" : "Dark";
    const ThemeIcon = isTheme ? SunIcon : MoonIcon;

    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
    }, [theme])


    const handleToggleTheme = () => {
        dispatch(themeActions.setTheme(theme === "light" ? "dark" : "light"))
    }

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
