import React from 'react'

export const themes = {
    dark: {
        background: '#222',
        color: 'dodgerblue'
    },
    light: {
        background: 'dodgerblue', 
        color: '#222'
    }
}

export const ThemeContext = React.createContext(
    themes.dark // default value
)