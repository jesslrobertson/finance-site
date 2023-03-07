import React from 'react'


export default function Header(){
  //TODO - route each link to relevant page, or jump to relevant section
  return (
    <header>
      <h1>FIT Financial</h1>
      <div className='nav-link-box'>
        <a>Home</a>
        <a>Finances</a>
        <a>Insurance</a>
        <a>Taxes</a>
        <a href="mailto:fitfinancial@site.com">
          <button>Contact</button>
        </a>
      </div>
    </header>
  )
}