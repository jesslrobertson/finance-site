import './App.css';
import Header from './components/Header'
import HeaderTest from './components/HeaderTest';
import Landing from './components/Landing'
import {ThemeContext }from "./components/ContextProvider"
import { useContext } from 'react';
import DarkModeSwitch from './components/DarkModeSwitch';

function App() {

const {darkMode, setDarkMode} = useContext(ThemeContext)


  return (
    <div className= {!darkMode ? "App" : "App-dark"}>
      <DarkModeSwitch />
      <HeaderTest />
      <Landing />
    </div>
  );
}

export default App;
