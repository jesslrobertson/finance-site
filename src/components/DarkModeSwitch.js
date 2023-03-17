import React, {useContext} from "react"
import { ThemeContext } from "./ContextProvider"
import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { yellow } from "@mui/material/colors";

export default function DarkModeSwitch(){

    const {darkMode, setDarkMode} = useContext(ThemeContext)

    console.log(darkMode)

    return (
        <>
        <div className="dark-mode-switch">
              { !darkMode ? <DarkModeIcon /> :  <DarkModeIcon /> }
                <Switch onClick = {()=> setDarkMode(!darkMode)} defaultChecked size="larger" />
            {!darkMode ? <LightModeIcon  color = "action" /> : <LightModeIcon sx = {{ color: yellow[500]}} />}
        </div>
         
        </>
     


    )
}