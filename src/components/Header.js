import React, {useState} from 'react'



export default function Header(){
  //TODO - route each link to relevant page, or jump to relevant section





  return (
    <header>
      <h1 className = "nav-title">FIT Financial</h1>
      <div className='nav-link-box'>
        <li className='nav-link'>Home</li>

        <li className='nav-link' >Finances</li>
    
          
        <li className='nav-link'>Insurance</li>
        
        <li className='nav-link'>Taxes</li>
      
        <a className='nav-link' href="mailto:fitfinancial@site.com">
          Contact
        </a>
      </div>
    </header>
  )
}