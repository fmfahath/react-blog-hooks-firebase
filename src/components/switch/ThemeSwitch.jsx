import React from 'react'
import './ThemeSwitch.css'
import { useThemeContext } from '../../hooks/useThemeContext'

const ThemeSwitch = () => {

    const { theme, dispatch } = useThemeContext();

    const switchTheme = () => {

        if (theme == "light") {
            dispatch({ type: 'DARK' })
        }
        else {
            dispatch({ type: 'LIGHT' })
        }

    }

    return (
        <div className="form-check form-switch">
            <input
                className="form-check-input toggle"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={switchTheme}
            />
        </div>
    )
}

export default ThemeSwitch