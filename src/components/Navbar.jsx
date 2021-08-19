import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return <nav className="navvbar">
         <h4><Link to='/Insert'>Insert</Link></h4>
        <h4 className="menu"><Link to='/Signup'>Signup</Link></h4>
        
        </nav>
}

export default Navbar;