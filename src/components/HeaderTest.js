import React, {useState} from "react"
import { CloseButton } from "react-bootstrap";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";


export default function HeaderTest() {


    const [activeDropDown, setActiveDropDown] = useState(null)

    const menu = [ 
        {   
            title: "Finances", 
            dropDown: ["Service 1",  "Service 2", 'Service 3'],
             id: 1
        }, 
    { title: "Insurance", dropDown: false,  id: 2},
     { title: "Taxes", dropDown: false,  id: 3}
    ]


console.log(menu)
    return (
    <>
    <div className="nav-container" onMouseLeave={()=> setActiveDropDown(null)}>
        <h1>FIT Financial</h1>
   
                            <div className = "nav-link-box">
                                                    {menu.map((variant, index) => { 
                                                            const isActive = variant.id === activeDropDown
                                                        return    ( 
                                            <div >
                                                <button className = "nav-button" onMouseEnter = {() => setActiveDropDown(variant.id)}>{variant.title}</button> 
                                                {isActive && <div className =  "item-list">
                                                    <p className = "nav-item">Service 1</p>
                                                    <p className = "nav-item">Service 2</p>
                                                    <p className = "nav-item">Service 3</p>
                                                    <p className = "nav-item">Service 4</p>
                                                </div>
                                                
                                                        }
                                                </div>
                            
                                        )}
                                        )
                                        }
        <button className = "nav-button" >Contact</button>
                        </div>
        </div>    


        
            </>
        )
        
        }
