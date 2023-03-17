import React, {useState} from "react"

const ThemeContext = React.createContext()

function ContextProvider(props) {

    const [darkMode, setDarkMode] = useState(false)



    return (

        <ThemeContext.Provider value = {{
            darkMode,
            setDarkMode
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export   {ThemeContext, ContextProvider}