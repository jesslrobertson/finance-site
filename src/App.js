import React from "react"
import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import Header from './components/Header'
import HeaderTest from './components/HeaderTest';
import Landing from './components/Landing'
import {ThemeContext }from "./components/ContextProvider"
import { useContext } from 'react';
import DarkModeSwitch from './components/DarkModeSwitch';
import Taxes from "./components/Taxes";
import Insurance from "./components/Insurance";
import Finances from "./components/Finances";

function App() {

const {darkMode, setDarkMode} = useContext(ThemeContext)


  return (

    <> 
  
    <div className= {!darkMode ? "App" : "App-dark"}>
      <DarkModeSwitch />
      <HeaderTest />
    </div>

    <Routes>
      <Route path = "/" element = {<Landing />} />
      <Route path = "Finances" element = {<Finances />} />
      <Route path = "/Insurance" element = {<Insurance />} />
      <Route path = "/Taxes" element = {<Taxes/>} />
    </Routes>
  
   


   
  
    </>

  )
}

export default App;
