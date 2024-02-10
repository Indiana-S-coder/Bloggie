"use Client"
import { createContext, useState } from 'react'


export const ThemeContext = createContext();

const getFormLocalStorage = () => {
    const value = localStorage.getItem("theme");
    return value || "light";
};

export const ThemeContextProvider = ({childern}) => {
    const {theme, setTheme} = useState(() => {
        return getFormLocalStorage();
    });

    return (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
    );

}