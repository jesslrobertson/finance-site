import React, {useContext, useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from "./ContextProvider"
import DarkModeSwitch from './DarkModeSwitch';

function Landing() {

  //context
  const {darkMode} = useContext(ThemeContext)

//state used to toggle menu
const [menuToggle, setMenuToggle] = useState(false)

//function used to handle click of menu
const menuClick = () => {
  setMenuToggle(!menuToggle)
}


  return (
    <div className= {darkMode ? "section-dark landing" : 'section landing'}>
     { menuToggle ?  <CloseIcon id = "menu-icon" onClick = {menuClick} /> : <MenuIcon id = "menu-icon" onClick = {menuClick}/>  }
      { menuToggle ?
        <>
          <div className = "menu-container">
            <p className='menu-item'>Finances</p>
            <p className='menu-item'>Insurance</p>
            <p className='menu-item'>Taxes</p>
            <p className='menu-item'>Contact</p>
          </div>
        </>

        :

        <>
            <img className = "landing-img"src='https://images.unsplash.com/photo-1609220136736-443140cffec6' alt="parent with two children"/>
            <div className='landing-text'>
            <h1>We help you put all the pieces of your financial puzzle together</h1>
            <p>Empowering you to be the CFO of your family</p>
            <button className = {darkMode ? "learn-btn-dark" : "learn-btn"}>Learn More</button>
      </div>
        </>
      
}
    </div>
  )
}

export default Landing