import React from 'react'
import {Link} from "react-router-dom";
import searchi from './search icon.png'
function Navbar() {
    return <div className="navvbar">

        
        <ul>
        <li><p><Link to='/' className="menu">HOME</Link></p></li>
        <li><p><Link to='/About' className="menu" >ABOUT</Link></p></li>
        <li><p><Link to='/Contact' className="menu" >CONTACT</Link></p></li>
        <li><p><Link to='/Searchb' className="menus" ><img src={searchi} alt="search icon" width="30%"/></Link></p></li>
        
        </ul>
       </div>
}

export default Navbar;