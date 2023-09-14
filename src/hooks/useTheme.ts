import { isLightTheme } from "guards";
import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";

import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { themeActions } from "reduxRTK/slices";


export const useTheme = () => {
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

    return {
        handleToggleTheme,
        themeText, ThemeIcon,
    }

}