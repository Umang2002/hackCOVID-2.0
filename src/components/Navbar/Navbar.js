import React, { useState } from 'react';
import './Navbar.css'
import {NavLink,Link,activeClassName} from 'react-router-dom';

const Navbar = () => {

    const [isMobile,setIsMobile] = useState(false);
 
    return (


       
        <div className="main">
            <header>
                <Link to="#" className="logo">c<span
                className="fas fa-virus"> </span>VID-19</Link>
            
              <button className="mobile-manu-icon" onClick={()=>setIsMobile(!isMobile)}>
                  {isMobile  ? <i className=" fas fa-times"></i> : <i className="fas fa-bars"></i>}
              </button>
         
            
      
               <nav className={isMobile?"navbar-mobile":"navbar"} onClick={()=>setIsMobile(false)}>
                    <NavLink to="/" exact activeClassName="active">home</NavLink>
                    <NavLink to="/prevent" activeClassName="active" >Prevent</NavLink>
                    <NavLink to="/symptoms"  activeClassName="active" >Symptoms</NavLink>
                    <NavLink to="/precautions"  activeClassName="active">Precautions</NavLink>
                    <NavLink to="/tracker"  activeClassName="active">Tracker</NavLink>
                    <NavLink to="/hand-wash"  activeClassName="active">Hand-Wash</NavLink>
               </nav>
            </header>
        </div>
    )
}

export default Navbar
