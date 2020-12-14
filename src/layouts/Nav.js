import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <nav className="nav">
            <div className="nav-logo">
                <NavLink exact to="/rooms">
                    <h2>Apartament Rooms</h2>
                    <h4>for rent</h4>
                </NavLink>
                <div onClick={() => setIsOpened(prevState => !prevState)} className="hamburger-btn"><FontAwesomeIcon icon={faBars} /></div>
            </div>
            <ul className={`nav-links-cnt ${isOpened ? 'active' : ''}`}>
                <li className="nav-link">
                    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                </li>
                <li className="nav-link">
                    <NavLink to="/rooms" activeClassName="selected">Rooms</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
